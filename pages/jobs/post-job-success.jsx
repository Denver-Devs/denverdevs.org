import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

const PostJobSuccessPage = () => {
  return (
    <Flex marginY="24" direction={{ base: "column", xl: "row" }}>
      <Head>
        <title>Success | Denver Devs Job Board</title>
      </Head>
      <Box
        maxWidth="80ch"
        borderWidth="1px"
        borderRadius="md"
        padding={["4", "8"]}
        margin="auto"
      >
        <Stack spacing="6">
          <Heading>Success! 🎉</Heading>
          <Text>
            Thanks for submitting your job post. We&apos;re going to review it
            and make sure everything looks good, if all goes well you should see
            it on the site within 24 hours.
          </Text>
          <Text>
            We&apos;ll reach out to the contact email provided if we see any
            issues with the job post.
          </Text>

          <HStack spacing="4">
            <Link
              as={NextLink}
              href="/jobs/dashboard"
              _hover={{ textDecoration: "none" }}
              size="sm"
            >
              <Button colorScheme="gray">View your jobs</Button>
            </Link>
            <Link
              as={NextLink}
              href="/jobs/post-job"
              _hover={{ textDecoration: "none" }}
              size="sm"
            >
              <Button colorScheme="gray">Submit another job post</Button>
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default PostJobSuccessPage;
