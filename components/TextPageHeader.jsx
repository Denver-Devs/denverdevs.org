import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";

const TextPageHeader = ({ text }) => {
  return (
    <Flex
      borderRadius="2xl"
      backgroundColor="blue.500"
      padding={{ base: "4", xl: "8" }}
      paddingBottom={{ base: "4", xl: "6" }}
      bgGradient="linear(to-br, #2756A5, #CC6B61)"
      color="white"
      width="100%"
      flexDir={{ base: "column", md: "row" }}
    >
      <Heading as="h2" fontSize={{ base: "22px", xl: "32px" }}>
        {text}
      </Heading>
      <Spacer />
    </Flex>
  );
};

export default TextPageHeader;
