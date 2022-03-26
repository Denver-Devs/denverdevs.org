import { supabase } from "@/lib/supabase/";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageUpload({ url, size, onUpload, bucket, disabled }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
    async function downloadImage(path) {
      try {
        const { data, error } = await supabase.storage
          .from(bucket)
          .getPublicUrl(path);
        if (error) {
          throw error;
        }
        setImageUrl(data.publicURL);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  }, [bucket, url]);

  async function uploadImage(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <HStack>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Image"
          width={50}
          height={50}
          borderWidth="1px"
          borderRadius="md"
        />
      ) : (
        <Box
          style={{ height: 50, width: 50 }}
          borderWidth="1px"
          borderRadius="md"
        />
      )}
      <FormControl isDisabled={disabled}>
        <Input
          variant="filled"
          p="2.5"
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadImage}
          disabled={uploading || disabled}
          height="auto"
        />
      </FormControl>
    </HStack>
  );
}
