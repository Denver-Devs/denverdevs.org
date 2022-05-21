import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { uniqBy } from "lodash";
import Head from "next/head";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import { FilterDrawer } from "@/components/FilterDrawer";
import JobList from "@/components/JobList";
import { useUserContext } from "@/context/UserContext";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";
import { supabase } from "@/utils/lib/supabase";

import useFilteredState from "../../hooks/useFilteredState";
import {
  createIncludeTagsFilter,
  createIsMineFilter,
  isRemoteFilter,
} from "../../utils/filters/job.filters";

export default function BrowseJobsPage({ jobs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { user } = useUserContext();
  const [userEntries, setUserEntries] = useState({ data: [] });
  const [tags, setTags] = useState([]); //eg... [{value: "part-time:", label: "Part-Time"}]

  const onSelectTags = (tags) => {
    setTags(tags);
  };

  // unique so we don't duplicate entries that belong to the user
  const allJobs = uniqBy([...userEntries.data, ...jobs.data], (a) => a.id);

  const {
    filteredState: filteredJobs,
    overwriteFilter,
    toggleFilter,
  } = useFilteredState(allJobs);

  useEffect(() => {
    overwriteFilter(createIncludeTagsFilter(tags));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  useEffect(() => {
    if (user) {
      supabase
        .from("posts")
        .select("*")
        .eq("user_id", user.id)
        .eq("approved", true)
        .order("inserted_at", { ascending: false })
        .then(setUserEntries);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Jobs | Denver Devs</title>
        <meta
          name="description"
          content={`Looking for a developer job in Denver? Browse jobs on our site! Submit your own for free!`}
        />
        <meta property="og:title" content={"Jobs | Denver Devs"} />
        <meta
          property="og:description"
          content={`Looking for a developer job in Denver? Browse jobs on our site! Submit your own for free!`}
        />
        <meta property="og:url" content={`https://denverdevs.org/jobs/`} />
        <meta property="og:type" content="website" />
      </Head>
      <Box
        marginTop={{ base: "20", xl: "28" }}
        marginBottom={{ base: "6", xl: "20" }}
      >
        <Box my="10">
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box flex="auto" marginRight={{ base: "0", lg: "10" }}>
              <Flex>
                <Heading as="h2" fontSize="xl">
                  Browse the latest jobs
                </Heading>
                <Spacer />
                <Button
                  ref={btnRef}
                  display={{ base: "block", lg: "none" }}
                  onClick={onOpen}
                  size="md"
                >
                  Filters
                </Button>
              </Flex>
              <FilterDrawer isOpen={isOpen} onClose={onClose}>
                <Stack padding="4" borderWidth="1px" borderRadius="sm">
                  <Heading as="h5" marginBottom="4" size="sm">
                    Filters
                  </Heading>
                  <Switch
                    onChange={() => {
                      toggleFilter(isRemoteFilter);
                    }}
                  >
                    Remote Only
                  </Switch>
                  {user && (
                    <Switch
                      onChange={() => {
                        toggleFilter(createIsMineFilter(user));
                      }}
                    >
                      Only Show My Listings
                    </Switch>
                  )}
                  <Select
                    isMulti
                    options={jobTagsArray}
                    onChange={onSelectTags}
                    placeholder="Select tags to filter by"
                    closeMenuOnSelect={false}
                    selectedOptionStyle="check"
                    hideSelectedOptions={false}
                  />
                </Stack>
              </FilterDrawer>
              <Box marginTop="4">
                <JobList jobs={filteredJobs} />
              </Box>
            </Box>
            <Box
              display={{ base: "none", lg: "block" }}
              minWidth="300px"
              maxWidth="300px"
              marginTop="10"
            >
              <Stack padding="4" borderWidth="1px" borderRadius="sm">
                <Heading as="h5" marginBottom="4" size="sm">
                  Filters
                </Heading>
                <Switch
                  onChange={() => {
                    toggleFilter(isRemoteFilter);
                  }}
                >
                  Remote Only
                </Switch>
                {user && (
                  <Switch
                    onChange={() => {
                      toggleFilter(createIsMineFilter(user));
                    }}
                  >
                    Only Show My Listings
                  </Switch>
                )}
                <Select
                  isMulti
                  options={jobTagsArray}
                  onChange={onSelectTags}
                  placeholder="Select tags to filter by"
                  closeMenuOnSelect={false}
                  selectedOptionStyle="check"
                  hideSelectedOptions={false}
                />
              </Stack>
              {!user ? (
                <Box
                  marginTop="4"
                  padding={{ base: "4", lg: "4" }}
                  borderWidth="1px"
                  borderRadius="sm"
                >
                  <Heading marginBottom="2" size="md">
                    Want to post a job?
                  </Heading>
                  <Text marginBottom="3">
                    All you need to do is sign up! It’s free and easy, just make
                    sure you check our{" "}
                    <Link as={NextLink} href={"/rules-and-faq"} passHref>
                      Rules and FAQ
                    </Link>{" "}
                    before posting.
                  </Text>
                  <Button as="a" colorScheme="gray" href="/jobs/dashboard">
                    Sign up
                  </Button>
                </Box>
              ) : (
                <Box
                  marginTop="4"
                  padding={{ base: "4", lg: "4" }}
                  borderWidth="1px"
                  borderRadius="sm"
                >
                  <Heading marginBottom="2" size="md">
                    Want to manage your posts?
                  </Heading>
                  <Text marginBottom="3">
                    Head to your dashboard to see manage your posts.
                  </Text>
                  <Button as="a" colorScheme="gray" href="/jobs/dashboard">
                    Your Dashboard
                  </Button>
                </Box>
              )}
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
      jobs: await supabase
        .from("posts")
        .select("*")
        .eq("approved", true)
        .order("inserted_at", { ascending: false }),
    },
  };
}
