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
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { SiChakraui, SiNetlify, SiNextdotjs } from "react-icons/si";

import * as ga from "@/lib/ga";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleInviteGA = () => {
    ga.event({
      action: "Clicked Invite Button",
    });
  };

  return (
    <>
      <Head>
        <title>Denver Devs</title>
        <meta
          name="description"
          content={`Denver Devs is an online Discord community for software engineers and tech industry professionals in the Denver, Colorado area.`}
        />
        <meta property="og:title" content={"Jobs | Denver Devs"} />
        <meta
          property="og:description"
          content={`Denver Devs is an online Discord community for software engineers and tech industry professionals in the Denver, Colorado area.`}
        />
        <meta property="og:url" content={`https://denverdevs.org`} />
        <meta property="og:type" content="website" />
      </Head>
      <Box
        marginTop={{ base: "20", xl: "28" }}
        padding={{ base: "5", xl: "16" }}
        color="white"
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        borderRadius="2xl"
        backgroundColor="blue.500"
      >
        <Flex flexWrap="wrap" flexDirection={{ base: "column", xl: "row" }}>
          <Stack flex="auto" maxWidth="container.md" spacing="6">
            <Heading as="h2" fontSize={{ base: "32px", xl: "64px" }} size="lg">
              Connecting the tech industry of Denver
            </Heading>
            <Box maxWidth="66ch" marginTop="8">
              <Text fontSize={{ base: "md", lg: "xl" }}>
                Denver Devs is an online Discord community for software
                engineers &#38; tech industry professionals in the Denver
                <Text as="sup" color="whiteAlpha.700">
                  *
                </Text>{" "}
                area. We&apos;ve been around since 2015, and we&apos;re always
                excited to see new faces. We have a job board to help folks get
                hired &#38; other channels about all kinds of things to help you
                make connections, ranging from various coding languages,
                hobbies, career growth, and much more.
              </Text>
              <Text
                paddingTop={{ base: "0", xl: "2" }}
                color="whiteAlpha.700"
                fontSize="md"
              >
                * and surrounding areas, or remote!
              </Text>
            </Box>
            <Spacer />
            <Box display={{ base: "none", xl: "block" }} marginTop="auto">
              <Heading marginBottom="2" color="whiteAlpha.600" size="xs">
                Built with:
              </Heading>
              <HStack>
                <Box>
                  <Icon as={SiNextdotjs} boxSize="24px" opacity="0.7" />
                </Box>
                <Box>
                  <Icon as={SiChakraui} boxSize="24px" opacity="0.7" />
                </Box>

                <Box>
                  <Icon as={SiNetlify} boxSize="24px" opacity="0.7" />
                </Box>
              </HStack>
            </Box>
          </Stack>
          <Grid
            flex="1"
            gridGap={6}
            gridAutoFlow={{ base: "row", lg: "column", xl: "row" }}
            marginTop={{ base: "4", xl: "0" }}
            marginLeft={{ base: "0", xl: "10" }}
          >
            <Box
              padding={{ base: "4", lg: "8" }}
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
              // background="blackAlpha.50"
            >
              <Heading marginBottom="2" size="md">
                Join us on Discord
              </Heading>
              <Text marginBottom="3">
                Discord is where we all chat and hang out. All you need to do is
                grab an invite, so what are you wating for?
              </Text>
              <Link
                _hover={{ textDecoration: "none" }}
                href="https://discord.gg/denver-devs"
                isExternal
              >
                <Button
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600" }}
                  backgroundColor="whiteAlpha.200"
                  leftIcon={<FaDiscord />}
                  onClick={() => handleInviteGA()}
                  variant="outline"
                >
                  Get an invite
                </Button>
              </Link>
            </Box>
            <Box
              padding={{ base: "4", lg: "8" }}
              background="blackAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
            >
              <Heading marginBottom="2" size="md">
                We launched a Job Board!
              </Heading>
              <Text marginBottom="3">
                Check out our brand new free Job Board app (in beta). Want to
                learn more about it?
              </Text>
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                href="/updates/job-board-launch"
              >
                <Button
                  borderColor="whiteAlpha.400"
                  _hover={{
                    backgroundColor: "blackAlpha.600",
                    borderColor: "blackAlpha.700",
                  }}
                  backgroundColor="whiteAlpha.200"
                  leftIcon={<FaQuestionCircle />}
                  variant="outline"
                >
                  Job Board Launch
                </Button>
              </Link>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}
