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
      <Box paddingBottom="8" flex="auto" borderWidth="1px" borderRadius="md" padding="8">
        <Stack spacing="6">
          <Heading>Success! 🎉</Heading>
          <Text>
            Thanks for submitting your job post. We&apos;re going to review it and make sure everything looks good, if
            all goes well you should see it on the site within 24 hours.
          </Text>
          <Text>We&apos;ll reach out to the contact email provided if we see any issues with the job post.</Text>

          <HStack spacing="4">
            {/* <Link as={NextLink} href="/jobs" _hover={{ textDecoration: "none" }} size="sm">
              <Button colorScheme="gray">View my job posts</Button>
            </Link> */}
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }} size="sm">
              <Button colorScheme="gray">Return home</Button>
            </Link>
            <Link as={NextLink} href="/form-hiring" _hover={{ textDecoration: "none" }} size="sm">
              <Button colorScheme="gray">Submit another job post</Button>
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Box flex="1" maxWidth="300px" minWidth="300px" ml={{ base: "0", lg: "10" }}>
        <Box
          padding="4"
          borderRadius="md"
          color={useColorModeValue("#9a6700", "#d29922")}
          bg={useColorModeValue("#fef8c5", "#272115")}
          borderColor={useColorModeValue("#e7c000", "#9e6a03")}
          borderLeftWidth="thick"
        >
          <Heading size="sm" mb="2">
            Note
          </Heading>
          <Text fontSize="sm">
            <Link
              href="https://leg.colorado.gov/bills/sb19-085"
              isExternal
              color={useColorModeValue("yellow.900", "white")}
            >
              A new law was passed in Colorado <ExternalLinkIcon mx="2px" />
            </Link>
            that took effect on January 1, 2021, related to pay transparency. It requires that:
          </Text>
          <UnorderedList fontSize="sm">
            <ListItem>
              Employers must announce to all Colorado employees current job openings, and the pay ranges associated with
              them.
            </ListItem>
            <ListItem>
              All job postings for positions that can be hired for and/or performed in Colorado must indicate the hourly
              or salary compensation, or a range of the hourly or salary compensation, and a general description of all
              the benefits and other compensation to be offered to the hired applicant.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  );
};

export default PostJobSuccessPage;
