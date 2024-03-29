import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function JobPostDescription({ job }) {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      marginBottom={8}
      padding={{ base: "5" }}
      background={backgroundColor}
      borderWidth="1px"
      borderTopRadius="lg"
      borderBottomRadius={"lg"}
      transitionDuration="0.2s"
      transitionProperty="background-color"
    >
      <Heading as="h2" marginBottom={2} fontSize="xl">
        Description
      </Heading>
      <Text color={"gray.400"} fontSize={"xl"}>
        {job?.description ||
          "No description has been provided for this job listing."}
      </Text>
    </Box>
  );
}
