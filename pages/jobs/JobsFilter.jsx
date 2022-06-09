import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";

import { FilterTagButton } from "@/components/FilterTagButton";
import { jobLocationsArray } from "@/utils/helpers/jobLocationsArray";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";

export const JobsFilter = ({
  locationFiltersList,
  tagFiltersList,
  handleTagSelect,
  handleLocationSelect,
  handleClickRemoteOnly,
}) => {
  const [showMoreTags, setShowMoreTags] = useState(false);

  const jobTagsByCategory = jobTagsArray.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

  return (
    <Stack padding="8" borderWidth="1px" borderRadius="20px" spacing={4}>
      <Box>
        <Heading as="h5" marginBottom="4" size="md">
          Narrow your search
        </Heading>
        <Button
          leftIcon={<MdFilterList />}
          onClick={handleClickRemoteOnly}
          size="sm"
        >
          Show Remote Only
        </Button>
      </Box>
      <Box>
        <Text marginBottom={2}>Filter by location</Text>
        <Wrap spacing={2}>
          {jobLocationsArray.map((location) => (
            <WrapItem key={location.value}>
              <FilterTagButton
                isSelected={locationFiltersList.some(
                  (filter) => filter.value === location.value
                )}
                handleSelect={() => handleLocationSelect(location)}
                name={location.label}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box>
        <Text marginBottom={2}>Filter by tag</Text>
        {/* Could create multiple wrap groups depending on how many tags want to be hidden */}
        <Wrap spacing={2}>
          {showMoreTags
            ? Object.entries(jobTagsByCategory).map(([category, tags]) => (
                <WrapItem key={category} paddingBottom={4}>
                  <Wrap spacing={2}>
                    {tags.map((tag) => (
                      <WrapItem key={tag.value}>
                        <FilterTagButton
                          isSelected={tagFiltersList.includes(tag)}
                          handleSelect={() => handleTagSelect(tag)}
                          name={tag.label}
                          key={tag.value}
                        />
                      </WrapItem>
                    ))}
                  </Wrap>
                </WrapItem>
              ))
            : jobTagsByCategory["job-category"].map((tag) => (
                <WrapItem key={tag.value}>
                  <FilterTagButton
                    isSelected={tagFiltersList.includes(tag)}
                    handleSelect={() => handleTagSelect(tag)}
                    name={tag.label}
                  />
                </WrapItem>
              ))}
        </Wrap>
        <Flex marginTop={showMoreTags ? 0 : 4}>
          <Button
            colorScheme="purple"
            onClick={() => setShowMoreTags(!showMoreTags)}
            size="xs"
            variant={"link"}
          >
            {showMoreTags ? "Hide extra tags" : "View more tags"}
          </Button>
        </Flex>
      </Box>
    </Stack>
  );
};
