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

export default function HomeOld() {
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
              So long, Denver Devs
            </Heading>
            <Box maxWidth="66ch" marginTop="8">
              <Prose>
                <Text>
                  Hi friend, Dan here, the founder of Denver Devs here to tell
                  you that&nbsp;
                  <strong>
                    Denver Devs is shutting down March 31st, 2023.
                  </strong>
                </Text>
                <Text>
                  If you&apos;d like to read more about the decision you can
                  visit a blog post on{" "}
                  <Link
                    fontWeight="bold"
                    textDecoration="underline"
                    href="https://www.danhannigan.dev/post/denver-devs-turns-eight-this-year-and-i-think-im-done-with-it"
                  >
                    my site here
                  </Link>
                  . But the TLDR is: Eight years is a very long time to dedicate
                  to something volunteer-based. Though it wasn&apos;t a constant
                  24/7 thing, I&apos;ve been actively involved in maintaining
                  and monitoring a single chatroom on the internet since 2015,
                  and I&apos;m tired. I think it&apos;s time to open the space
                  to new voices and concepts, so I&apos;m shutting Denver Devs
                  down on March 31st.
                </Text>
                <Text>
                  New communities are popping up in it&apos;s place and
                  I&apos;ll be adding them to{" "}
                  <Link
                    fontWeight="bold"
                    textDecoration="underline"
                    href="https://denvertech.community"
                  >
                    denvertech.community
                  </Link>{" "}
                  as they do.
                </Text>
                <Text>
                  Thanks for being a part of Denver Devs if you were, and if you
                  missed it I hope you find your spot to land.
                </Text>
                <Text>- Dan Hannigan</Text>
              </Prose>
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
              maxHeight="300px"
              padding={{ base: "4", lg: "8" }}
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
            >
              <Heading marginBottom="2" size="md">
                Check out other communities
              </Heading>
              <Text marginBottom="3">
                We&apos;ve built a one stop shop for all things Denver Tech
                community related - including spaces to head to with Denver Devs
                being gone check it out!
              </Text>
              <Link
                href="https://www.denvertech.community/chat-communities"
                isExternal
              >
                <Button
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600" }}
                  backgroundColor="whiteAlpha.200"
                  variant="outline"
                >
                  Visit denvertech.community
                </Button>
              </Link>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}
