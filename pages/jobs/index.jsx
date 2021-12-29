import { FilterDrawer } from "@/components/FilterDrawer";
import HiringEntriesList from "@/components/HiringEntriesList";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";
import { supabase } from "@/utils/lib/supabase";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Link,
  Spacer,
  Switch,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

export default function BrowseJobsPage({ hiringEntries, lookingEntries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [filters, setFilters] = useState({
    remoteOnly: false,
    tags: [],
  });

  const [remoteOnly, toggleRemoteOnly] = useState(false);

  useEffect(() => {
    setFilters({
      ...filters,
      remoteOnly: remoteOnly,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteOnly]);

  return (
    <>
      <Head>
        <title>Jobs | Denver Devs</title>
      </Head>
      <Box marginTop={{ base: "20", xl: "28" }} marginBottom={{ base: "6", xl: "20" }}>
        <Box my="10">
          <Flex direction={{ base: "column", md: "row" }}>
            <Box flex="auto" mr={{ base: "0", md: "10" }}>
              <Flex spacing={6} align="stretch" mb={{ base: "4", md: "8" }}>
                <Heading as="h2" fontSize="xl">
                  Browse the latest jobs
                </Heading>
                <Spacer />
                <Button ref={btnRef} size="md" onClick={onOpen} display={{ base: "block", lg: "none" }}>
                  Filters
                </Button>
                <FilterDrawer isOpen={isOpen} onClose={onClose}>
                  <CheckboxGroup
                    colorScheme="blue"
                    onChange={(e) => {
                      e.preventDefault();
                      setFilters(e);
                    }}
                  >
                    <VStack spacing={2} align="flex-start">
                      {jobTagsArray.map((tag) => (
                        <Checkbox value={tag.value} key={tag.value}>
                          {tag.label}
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                </FilterDrawer>
              </Flex>
              <HiringEntriesList hiringEntries={hiringEntries.data} filters={filters} />
            </Box>
            <Box
              flex="auto"
              maxW={{ base: "100%", lg: "300px" }}
              mb={{ base: "10", lg: "0" }}
              display={{ base: "none", lg: "block" }}
            >
              <Box borderWidth="1px" p="4" borderRadius="sm">
                <Heading as="h5" size="sm" mb="4">
                  Filters
                </Heading>
                <Switch onChange={() => toggleRemoteOnly(!remoteOnly)}>Remote Only</Switch>
                <CheckboxGroup colorScheme="blue" onChange={(e) => setFilters({ ...filters, tags: e })}>
                  <VStack spacing={2} align="flex-start">
                    {jobTagsArray.map((tag) => (
                      <Checkbox value={tag.value} key={tag.value}>
                        {tag.label}
                      </Checkbox>
                    ))}
                  </VStack>
                </CheckboxGroup>
              </Box>
              <Box p={{ base: "4", lg: "4" }} borderRadius="sm" borderWidth="1px" marginTop="4">
                <Heading size="md" mb="2">
                  Want to post a job?
                </Heading>
                <Text mb="3">
                  All you need to do is sign up! It’s free and easy, just make sure you check our{" "}
                  <Link as={NextLink} href={"/rules-and-faq"} passHref>
                    Rules and FAQ
                  </Link>{" "}
                  before posting.
                </Text>
                <Button colorScheme="gray">Sign up</Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hiringEntries: await supabase.from("posts").select("*").eq("approved", true),
    },
  };
}
