import { Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { supabase } from "@/lib/supabase/";

const Logo = ({ path }) => {
  const [logoPath, setLogoPath] = React.useState("");

  const getImageUrl = async (path) => {
    const { data, error } = await supabase.storage
      .from("logos")
      .getPublicUrl(path);
    return setLogoPath(data.publicURL);
  };

  useEffect(() => {
    if (path !== null && path !== undefined && path !== "") {
      setLogoPath(path);
    } else {
      setLogoPath("https://via.placeholder.com/75");
    }
  }, [path]);

  return (
    <Image
      width={{ base: "60px", md: "75px" }}
      borderWidth="1px"
      borderRadius="lg"
      alt={"logo"}
      fallbackSrc="https://via.placeholder.com/75"
      src={logoPath}
    />
  );
};

export default Logo;
