import { supabase } from "@/lib/supabase/";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageUpload({ url, size, onUpload, bucket }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
    async function downloadImage(path) {
      try {
        const { data, error } = await supabase.storage.from(bucket).getPublicUrl(path);
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

      let { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file);

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
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="Image" width={size} height={size} />
      ) : (
        <div style={{ height: size, width: size }} />
      )}
      <div style={{ width: size }}>
        <label className="button primary block" htmlFor="single">
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadImage}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
