import { Box } from "@chakra-ui/react";

import { CTA } from "./CTA";
import { JobsFilter } from "./JobsFilter";

export const Sidebar = ({
  isUser,
  handleClickRemoteOnly,
  handleTagSelect,
  handleLocationSelect,
  locationFiltersList,
  tagFiltersList,
}) => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      minWidth="300px"
      maxWidth="300px"
      marginTop="10"
    >
      <JobsFilter
        handleClickRemoteOnly={handleClickRemoteOnly}
        handleTagSelect={handleTagSelect}
        handleLocationSelect={handleLocationSelect}
        locationFiltersList={locationFiltersList}
        tagFiltersList={tagFiltersList}
      />
      <Box marginBottom={4} />
      <CTA isUser={isUser} />
    </Box>
  );
};
