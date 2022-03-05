import { FilterDrawer } from "@/components/FilterDrawer";
import HiringEntriesList from "@/components/HiringEntriesList";
import { useUserContext } from "@/context/UserContext";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";
import { supabase } from "@/utils/lib/supabase";
import { Box, Button, Flex, Heading, Link, Spacer, Stack, Switch, Text, useDisclosure } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { uniqBy } from "lodash";
import Head from "next/head";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import useFilteredState from "../../hooks/useFilteredState";
import { createIncludeTagsFilter, createIsMineFilter, isRemoteFilter } from "../../utils/filters/job.filters";

export default function BrowseJobsPage({ hiringEntries, lookingEntries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { user } = useUserContext();
  const [userEntries, setUserEntries] = useState({ data: [] });
  const [tags, setTags] = useState([]); //eg... [{value: "part-time:", label: "Part-Time"}]

  const onSelectTags = (tags) => {
    setTags(tags);
  };

  // unique so we don't duplicate entries that belong to the user
  const allHiringEntries = uniqBy([...userEntries.data, ...hiringEntries.data], (a) => a.id);

  const { filteredState: filteredHiringEntries, overwriteFilter, toggleFilter } = useFilteredState(allHiringEntries);

  useEffect(() => {
    overwriteFilter(createIncludeTagsFilter(tags));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  useEffect(() => {
    if (user) {
      supabase.from("posts").select("*").eq("user_id", user.id).eq("approved", true).then(setUserEntries);
    }
  }, [user]);

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
                  <Stack borderWidth="1px" p="4" borderRadius="sm">
                    <Heading as="h5" size="sm" mb="4">
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
              </Flex>
              <HiringEntriesList hiringEntries={filteredHiringEntries} />
            </Box>
            <Box
              flex="auto"
              maxW={{ base: "100%", lg: "300px" }}
              mb={{ base: "10", lg: "0" }}
              display={{ base: "none", lg: "block" }}
            >
              <Stack borderWidth="1px" p="4" borderRadius="sm">
                <Heading as="h5" size="sm" mb="4">
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
