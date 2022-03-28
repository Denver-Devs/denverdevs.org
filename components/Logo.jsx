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
      setLogoPath(
        "https://tjkozhkscieinulujbed.supabase.co/storage/v1/object/public/logos/no-logo.png"
      );
    }
  }, [path]);

  return (
    <Image
      width={{ base: "60px", md: "75px" }}
      borderWidth="1px"
      borderRadius="lg"
      alt={"logo"}
      fallbackSrc="https://tjkozhkscieinulujbed.supabase.co/storage/v1/object/public/logos/no-logo.png"
      src={logoPath}
    />
  );
};

export default Logo;
