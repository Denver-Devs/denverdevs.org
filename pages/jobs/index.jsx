import { FilterDrawer } from "@/components/FilterDrawer";
import HiringEntriesList from "@/components/HiringEntriesList";
import getHiringEntries from "@/getters/getHiringEntries";
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

  const [filters, setFilters] = useState([]);
  const [filteredHiringEntries, setFilteredHiringEntries] = useState([]);

  // TODO: check in on some nagging background thoughts about how this could be better
  useEffect(() => {
    const filterByTagSet = new Set(filters);
    if (filters.length > 0) {
      setFilteredHiringEntries(hiringEntries.filter((o) => o.tags.some((tag) => filterByTagSet.has(tag))));
    } else {
      setFilteredHiringEntries(hiringEntries);
    }
  }, [filters, hiringEntries]);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const { data, error } = await supabase.from("posts").select("*").eq("approved", true);
    setPosts(data);
    setLoading(false);
  }

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
                  <CheckboxGroup colorScheme="blue" onChange={(e) => setFilters(e)}>
                    <VStack spacing={2} align="flex-start">
                      {jobTagsArray.map((tag) => (
                        <Checkbox value={tag} key={tag}>
                          {tag}
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                </FilterDrawer>
              </Flex>
              <HiringEntriesList hiringEntries={posts} filters={filters} />
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
                <Switch>Remote Only</Switch>
                <CheckboxGroup colorScheme="blue" onChange={(e) => setFilters(e)}>
                  <VStack spacing={2} align="flex-start">
                    {jobTagsArray.map((tag) => (
                      <Checkbox value={tag} key={tag}>
                        {tag}
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
      hiringEntries: await getHiringEntries(),
    },
  };
}
