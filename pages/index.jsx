import getHiringEntries from "@/getters/getHiringEntries";
import * as ga from "@/lib/ga";
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
import { NextLink } from "next/link";
import React, { useState } from "react";
import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { SiChakraui, SiNetlify, SiNextdotjs } from "react-icons/si";

export default function Home({ hiringEntries, lookingEntries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { loggedIn, user, login, logout } = useUserContext();
  const btnRef = React.useRef();

  const handleInviteGA = () => {
    ga.event({
      action: "Clicked Invite Button",
    });
  };

  const [session, setSession] = useState(null);

  return (
    <>
      <Head>
        <title>Denver Devs</title>
      </Head>
      <Box
        marginTop={{ base: "20", xl: "28" }}
        borderRadius="2xl"
        backgroundColor="blue.500"
        padding={{ base: "5", xl: "16" }}
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        color="white"
      >
        <Flex flexWrap="wrap" direction={{ base: "column", xl: "row" }}>
          <Stack maxW="container.md" flex="auto" spacing="6">
            <Heading as="h2" size="lg" fontSize={{ base: "32px", xl: "64px" }}>
              Connecting the tech industry of Denver
            </Heading>
            <Box maxWidth="66ch" marginTop="8">
              <Text fontSize={{ base: "md", lg: "xl" }}>
                Denver Devs is an online Discord community for software engineers &#38; tech industry professionals in
                the Denver
                <Text as="sup" color="whiteAlpha.700">
                  *
                </Text>{" "}
                area. We&apos;ve been around since 2015, and we&apos;re always excited to see new faces. We have a job
                board to help folks get hired &#38; other channels about all kinds of things to help you make
                connections, ranging from various coding languages, hobbies, career growth, and much more.
              </Text>
              <Text fontSize="md" color="whiteAlpha.700" pt={{ base: "0", xl: "2" }}>
                * and surrounding areas, or remote!
              </Text>
            </Box>
            <Spacer />
            <Box display={{ base: "none", xl: "block" }} mt="auto">
              <Heading size="xs" mb="2" color="whiteAlpha.600">
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
            ml={{ base: "0", xl: "10" }}
            mt={{ base: "4", xl: "0" }}
            flex="1"
            gap={6}
            gridAutoFlow={{ base: "row", lg: "column", xl: "row" }}
          >
            <Box
              p={{ base: "4", lg: "8" }}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              // background="blackAlpha.50"
            >
              <Heading size="md" mb="2">
                Join us on Discord
              </Heading>
              <Text mb="3">
                Discord is where we all chat and hang out. All you need to do is grab an invite, so what are you wating
                for?
              </Text>
              <Link href="https://discord.gg/denver-devs" isExternal _hover={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  backgroundColor="whiteAlpha.200"
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600" }}
                  leftIcon={<FaDiscord />}
                  onClick={() => handleInviteGA()}
                >
                  Get an invite
                </Button>
              </Link>
            </Box>
            <Box
              p={{ base: "4", lg: "8" }}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              background="blackAlpha.50"
            >
              <Heading size="md" mb="2">
                I thought you were on Slack?
              </Heading>
              <Text mb="3">We just moved! You can read more about why we did here</Text>
              <Link as={NextLink} href="/updates/moving-to-discord" _hover={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  backgroundColor="whiteAlpha.200"
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600", borderColor: "blackAlpha.700" }}
                  leftIcon={<FaQuestionCircle />}
                >
                  Why the move?
                </Button>
              </Link>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hiringEntries: await getHiringEntries(),
    },
  };
}
