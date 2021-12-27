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
      <Box marginTop={{ base: "20", xl: "28" }} marginBottom={{ base: "6", xl: "20" }} maxWidth="80ch" margin="auto">
        <TextPageHeader text={headerText} />
        <Box pt={["2", "8"]} marginX="auto" px={["2", "4"]}>
          <article>{children}</article>
        </Box>
      </Box>
    </>
  );
};

export default TextPageWrapper;
