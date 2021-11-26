import getHiringEntries from "@/getters/getHiringEntries";
import { Box, Flex, Heading, HStack, Icon, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { SiAirtable, SiChakraui, SiNetlify, SiNextdotjs } from "react-icons/si";
import { useUserContext } from "../context/UserContext";

export default function Home({ hiringEntries, lookingEntries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loggedIn, user, login, logout } = useUserContext();
  const btnRef = React.useRef();

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
        bgGradient="linear(to-br, #2756A5, #CC6B61)"
        color="white"
      >
        <Flex flexWrap="wrap" direction={{ base: "column", xl: "row" }}>
          <Stack maxW="container.md" flex="auto" spacing="6">
            <Heading as="h2" size="lg" fontSize={{ base: "32px", xl: "64px" }}>
              👋 Hey, we&apos; moving to Discord!
            </Heading>
            <Box maxWidth="66ch" marginTop="8">
              <Text fontSize={{ base: "md", lg: "xl" }}>
                After five years on Slack, we’ve decided to make a move to Discord! We’re looking forward to having
                great features like entire chat history, advanced moderation tools, user roles, and more! We’re still
                buttoning things up and are supporting the Slack organization for a while longer.
              </Text>

              <Text fontSize={{ base: "md", lg: "md" }} mt="4">
                We’re not processing invites right now&#59; we will start again on November 29th. We’ll begin processing
                invites again after that, but you can still email us at info@denverdevs.org. Include your name,
                location, and a bit about why you&apos;d like to join!
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
                  <Icon as={SiAirtable} boxSize="24px" opacity="0.7" />
                </Box>
                <Box>
                  <Icon as={SiNetlify} boxSize="24px" opacity="0.7" />
                </Box>
              </HStack>
            </Box>
          </Stack>
          {/* <Grid
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
              <Link href="/browse" as={NextLink} _hover={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  backgroundColor="whiteAlpha.200"
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600" }}
                  leftIcon={<FaDiscord />}
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
                Looking for a job? Hiring?
              </Heading>
              <Text mb="3">Browse our job board, or post a job to get it listed. It&apos;s free, and easy.</Text>
              <Button
                variant="outline"
                backgroundColor="whiteAlpha.200"
                borderColor="whiteAlpha.400"
                _hover={{ backgroundColor: "blackAlpha.600", borderColor: "blackAlpha.700" }}
                onClick={login}
                leftIcon={<MdManageSearch />}
              >
                Browse jobs
              </Button>
            </Box>
          </Grid> */}
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
