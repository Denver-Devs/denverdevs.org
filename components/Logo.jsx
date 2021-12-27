import { supabase } from "@/lib/supabase/";
import { Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Logo = ({ path }) => {
  const [logoPath, setLogoPath] = React.useState("");

  const getImageUrl = async (path) => {
    if (path !== null || path !== undefined || path !== "") {
      const { data, error } = await supabase.storage.from("logos").getPublicUrl(path);
      setLogoPath(data.publicURL);
    }
  };

  useEffect(() => {
    setLogoPath(getImageUrl(path));
  }, [path]);

  return (
    <Image
      src={logoPath}
      fallbackSrc="https://via.placeholder.com/75"
      alt={"logo"}
      borderWidth="1px"
      borderRadius="lg"
      width={{ base: "32px", md: "75px" }}
    />
  );
};

export default Logo;
