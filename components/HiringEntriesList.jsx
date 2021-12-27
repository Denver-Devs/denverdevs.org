import { supabase } from "@/lib/supabase/";
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
import React from "react";
import { MdEmojiPeople, MdLocationOn } from "react-icons/md";
import Logo from "./Logo";

const HiringEntriesList = ({ hiringEntries, filters }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.200");

  const getImageUrl = async (path) => {
    if (path !== null || path !== undefined || path !== "") {
      const { data, error } = await supabase.storage.from("logos").getPublicUrl(path);
      return data.publicURL;
    }
  };

  return (
    <Stack spacing="4">
      {hiringEntries.length > 0 ? (
        hiringEntries.map((hiringEntry) => (
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
