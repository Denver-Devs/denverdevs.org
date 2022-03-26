import TextPageHeader from "@/components/TextPageHeader";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const TextPageWrapper = ({ title, headerText, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Denver Devs</title>
      </Head>
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
