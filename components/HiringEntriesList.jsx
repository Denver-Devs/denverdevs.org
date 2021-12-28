import {
  Box,
  Button,
  Flex,
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmojiPeople, MdLocationOn } from "react-icons/md";
import Logo from "./Logo";

const HiringEntriesList = ({ hiringEntries, filters }) => {
  const [hiringEntriesFiltered, setHiringEntriesFiltered] = useState([]);

  // filters shape: { remoteOnly: false, tags: [''] }
  // entries shape: [{ id: "", title: "", company: "", location: "", tags: [''], location_type: "" }]
  // TODO: these are funky? These filters? Refactor them.
  useEffect(() => {
    let filteredEntries = hiringEntries;
    let currentFilters = new Set(filters.tags);
    if (filters.remoteOnly) {
      let remoteEntries = filteredEntries.filter((entry) => entry.location_type === "remote");
      if (filters.tags.length > 0) {
        remoteEntries = filteredEntries.filter((entry) =>
          entry.tags.some((tag) => currentFilters.has(tag) && entry.location_type === "remote")
        );
      }
      filteredEntries = remoteEntries;
    }
    setHiringEntriesFiltered(filteredEntries);
  }, [filters.remoteOnly, filters.tags, hiringEntries]);

  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Stack spacing="4">
      {hiringEntriesFiltered.length > 0 ? (
        hiringEntriesFiltered.map((hiringEntry) => (
          <LinkBox
            p={{ base: "2", md: "5" }}
            key={hiringEntry.id}
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ cursor: "pointer", backgroundColor: highlightColor }}
            background={backgroundColor}
            transitionProperty="background-color"
            transitionDuration="0.2s"
          >
            <Flex alignItems="flex-start" flexDirection={{ base: "column", md: "row" }}>
              <Box minW={{ base: "32px", md: "75px" }} borderRadius="lg" marginRight={{ base: "0", md: "6" }}>
                {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
                <Logo path={hiringEntry.public_logo_url} />
              </Box>
              <Box>
                <Text as="h4" fontFamily="body" fontSize="lg" noOfLines={1} fontWeight="extrabold">
                  <NextLink href="/job/[id]/" as={`/job/${hiringEntry.id}/`}>
                    <LinkOverlay>{hiringEntry.title}</LinkOverlay>
                  </NextLink>
                </Text>
                <Text fontSize="sm" fontWeight="light" mt="1" opacity="0.7">
                  <Icon as={MdEmojiPeople} mr="1" />
                  {hiringEntry.company}
                </Text>
                <Text fontSize="sm" fontWeight="light" mt="0.5" opacity="0.7">
                  <Icon as={MdLocationOn} mr="1" />
                  {hiringEntry.location}
                </Text>
              </Box>
              <Spacer />
              <Box>
                {hiringEntry.tags.length > 0 &&
                  hiringEntry.tags.map((tag) => (
                    <Tag variant="subtle" key={tag} mr="2" colorScheme="gray">
                      {tag}
                    </Tag>
                  ))}
              </Box>
              <Button>View More</Button>
            </Flex>
          </LinkBox>
        ))
      ) : (
        <div>No jobs found </div>
      )}
    </Stack>
  );
};

export default HiringEntriesList;
