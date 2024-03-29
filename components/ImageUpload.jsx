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

import { supabase } from "@/lib/supabase/";

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
        <Flex
          background="white"
          borderWidth="1px"
          borderRadius="md"
          style={{ height: 50, width: 50 }}
        >
          <Image src={imageUrl} alt="Image" width={"100%"} height={"100%"} />
        </Flex>
      ) : (
        <Box
          borderWidth="1px"
          borderRadius="md"
          style={{ height: 50, width: 50 }}
        />
      )}
      <FormControl isDisabled={disabled}>
        <Input
          height="auto"
          padding="2.5"
          accept="image/*"
          disabled={uploading || disabled}
          id="single"
          onChange={uploadImage}
          type="file"
          variant="filled"
        />
      </FormControl>
    </HStack>
  );
}
