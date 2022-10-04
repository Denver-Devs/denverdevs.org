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
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import React from "react";

const PostJobSuccessPage = () => {
  return (
    <>
      <NextSeo title="Job Board | Success" />
      <Flex flexDirection={{ base: "column", xl: "row" }} marginY="24">
        <Box
          maxWidth="80ch"
          margin="auto"
          padding={["4", "8"]}
          borderWidth="1px"
          borderRadius="md"
        >
          <Stack spacing="6">
            <Heading>Success! 🎉</Heading>
            <Text>
              Thanks for submitting your job post. We&apos;re going to review it
              and make sure everything looks good, if all goes well you should
              see it on the site within 24 hours.
            </Text>
            <Text>
              We&apos;ll reach out to the contact email provided if we see any
              issues with the job post.
            </Text>

            <HStack spacing="4">
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                href="/jobs/dashboard"
                size="sm"
              >
                <Button colorScheme="gray">View your jobs</Button>
              </Link>
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                href="/jobs/post-job"
                size="sm"
              >
                <Button colorScheme="gray">Submit another job post</Button>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default PostJobSuccessPage;
