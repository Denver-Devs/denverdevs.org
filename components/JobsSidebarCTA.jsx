import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export const JobsSidebarCTA = ({ isUser }) => {
  return (
    <>
      {!isUser ? (
        <Box border="1px solid rgba(255, 255, 255, 0.16)" borderRadius="20px">
          <Box
            padding={8}
            background="linear-gradient(125.04deg, #1D407C -0.1%, #4B1114 97.61%)"
            borderRadius="20px"
          >
            <Box color={"white"}>
              <Heading marginBottom={3} size="md">
                Want to post a job?
              </Heading>
              <Text marginBottom={6}>
                All you need to do is sign up! It’s free and easy, just make
                sure you check our{" "}
                <Link as={NextLink} href={"/rules-and-faq"} passHref>
                  Rules and FAQ
                </Link>{" "}
                before posting.
              </Text>
            </Box>
            <Button as="a" colorScheme="gray" href="/jobs/dashboard">
              Sign up
            </Button>
          </Box>
        </Box>
      ) : (
        <Box border="1px solid rgba(255, 255, 255, 0.16)" borderRadius="20px">
          <Box
            padding={8}
            background="linear-gradient(125.04deg, #1D407C -0.1%, #4B1114 97.61%)"
            borderRadius="20px"
          >
            <Heading marginBottom={3} size="md">
              Want to manage your posts?{" "}
            </Heading>
            <Text marginBottom={6}>
              Head to your dashboard to see manage your posts.
            </Text>
            <Button as="a" colorScheme="gray" href="/jobs/dashboard">
              Your Dashboard
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
