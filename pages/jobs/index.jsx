import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { uniqBy } from "lodash";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { FilterDrawer } from "@/components/FilterDrawer";
import JobList from "@/components/JobList";
import { JobsPageSidebar } from "@/components/JobsPageSidebar";
import { JobsSidebarFilter } from "@/components/JobsSidebarFilter";
import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/utils/lib/supabase";

import useFilteredState from "../../hooks/useFilteredState";
import {
  createIncludeLocationsFilter,
  createIncludeTagsFilter,
  createIsMineFilter,
  isRemoteFilter,
} from "../../utils/filters/job.filters";

export default function BrowseJobsPage({ jobs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { user } = useUserContext();
  const [userEntries, setUserEntries] = useState({ data: [] });
  const [locationFilters, setLocationFilters] = useState([]); //eg... [{value: "San Francisco", label: "San Francisco"}]
  const [tagFilters, setTagFilters] = useState([]); //eg... [{value: "part-time:", label: "Part-Time"}]

  const onSelectTags = (tags) => {
    tagFilters.indexOf(tags) === -1
      ? setTagFilters([...tagFilters, tags])
      : setTagFilters(tagFilters.filter((tag) => tag !== tags));
  };

  const onSelectLocations = (location) => {
    locationFilters.indexOf(location) === -1
      ? setLocationFilters([...locationFilters, location])
      : setLocationFilters(locationFilters.filter((l) => l !== location));
  };

  // unique so we don't duplicate entries that belong to the user
  const allJobs = uniqBy([...userEntries.data, ...jobs.data], (a) => a.id);
  const numJobs = allJobs.length;

  const {
    filteredState: filteredJobs,
    overwriteFilter,
    toggleFilter,
  } = useFilteredState(allJobs);
  const numJobsFiltered = filteredJobs.length;

  useEffect(() => {
    overwriteFilter(createIncludeTagsFilter(tagFilters));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagFilters]);

  useEffect(() => {
    overwriteFilter(createIncludeLocationsFilter(locationFilters));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationFilters]);

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
                <Wrap>
                  <WrapItem>
                    <Heading as="h2" fontSize="xl">
                      Browse the latest jobs
                    </Heading>
                  </WrapItem>
                  <WrapItem>
                    <Text marginLeft={{ md: 8 }} fontSize="lg" opacity="0.7">
                      Showing {numJobsFiltered} out of {numJobs} jobs
                    </Text>
                  </WrapItem>
                </Wrap>
                <Spacer />
                <Button
                  ref={btnRef}
                  display={{ base: "inherit", lg: "none" }}
                  onClick={onOpen}
                  size="md"
                >
                  Filters
                </Button>
              </Flex>
              <FilterDrawer isOpen={isOpen} onClose={onClose}>
                <JobsSidebarFilter
                  handleClickRemoteOnly={() => toggleFilter(isRemoteFilter)}
                  handleTagSelect={onSelectTags}
                  handleLocationSelect={onSelectLocations}
                  tagFiltersList={tagFilters}
                  locationFiltersList={locationFilters}
                />
              </FilterDrawer>
              <Box marginTop="4">
                <JobList jobs={filteredJobs} />
              </Box>
            </Box>
            <JobsPageSidebar
              isUser={!!user}
              handleClickRemoteOnly={() => toggleFilter(isRemoteFilter)}
              handleTagSelect={onSelectTags}
              handleLocationSelect={onSelectLocations}
              tagFiltersList={tagFilters}
              locationFiltersList={locationFilters}
            />
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
