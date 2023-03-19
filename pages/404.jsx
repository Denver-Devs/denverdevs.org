import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import NextLink from "next/link";
import { usePlausible } from "next-plausible";
import { NextSeo } from "next-seo";
import React from "react";
import { FaDiscord, FaQuestionCircle, FaRocket } from "react-icons/fa";
import { SiChakraui, SiNetlify, SiNextdotjs } from "react-icons/si";

import * as ga from "@/lib/ga";

export default function Page404() {
  const plausible = usePlausible();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleInviteGA = () => {
    ga.event({
      action: "Clicked Invite Button",
    });
  };

  return (
    <>
      <NextSeo title={"Home"} />

      <Box
        marginTop={{ base: "4", xl: "16" }}
        padding={{ base: "5", xl: "16" }}
        color="white"
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        borderRadius="2xl"
        backgroundColor="blue.500"
      >
        <Flex flexWrap="wrap" flexDirection={{ base: "column", xl: "row" }}>
          <Stack flex="auto" maxWidth="container.md" spacing="6">
            <Heading as="h2" fontSize={{ base: "32px", xl: "64px" }} size="lg">
              404 Not found
            </Heading>
            <Box maxWidth="66ch" marginTop="8"></Box>
            <Text>
              The page your looking for likely does not exist anymore. Sorry
              about that!
            </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
