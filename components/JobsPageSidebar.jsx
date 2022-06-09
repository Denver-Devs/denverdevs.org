import { Box } from "@chakra-ui/react";
import React from "react";

import { JobsSidebarCTA } from "./JobsSidebarCTA";
import { JobsSidebarFilter } from "./JobsSidebarFilter";

export const JobsPageSidebar = ({
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
      <JobsSidebarFilter
        handleClickRemoteOnly={handleClickRemoteOnly}
        handleTagSelect={handleTagSelect}
        handleLocationSelect={handleLocationSelect}
        locationFiltersList={locationFiltersList}
        tagFiltersList={tagFiltersList}
      />
      <Box marginBottom={4} />
      <JobsSidebarCTA isUser={isUser} />
    </Box>
  );
};
