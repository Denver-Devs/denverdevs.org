import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import React from "react";

import TextPageHeader from "@/components/TextPageHeader";

const TextPageWrapper = ({ title, headerText, children }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          url: `https://denverdevs.org${router.asPath}`,
        }}
      />
      <Box
        maxWidth="80ch"
        margin="auto"
        marginTop={{ base: "20", xl: "28" }}
        marginBottom={{ base: "6", xl: "20" }}
      >
        <TextPageHeader text={headerText} />
        <Box paddingTop={["2", "8"]} px={["2", "4"]} marginX="auto">
          <article>{children}</article>
        </Box>
      </Box>
    </>
  );
};

export default TextPageWrapper;
