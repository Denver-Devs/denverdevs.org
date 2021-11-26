import {
  Box,
  Flex,
  Icon,
  Image,
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

const HiringEntriesList = ({ hiringEntries, filters }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.200");

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
                <Image
                  src={hiringEntry.companyLogo[0].thumbnails?.large?.url}
                  fallbackSrc="https://via.placeholder.com/75"
                  alt={hiringEntry.companyName}
                  borderWidth="1px"
                  borderRadius="lg"
                  width={{ base: "32px", md: "75px" }}
                />
              </Box>
              <Box>
                <Text as="h4" fontFamily="body" fontSize="lg" noOfLines={1} fontWeight="extrabold">
                  <NextLink href="/job/[id]/" as={`/job/${hiringEntry.id}/`}>
                    <LinkOverlay>{hiringEntry.title}</LinkOverlay>
                  </NextLink>
                </Text>
                <Text fontSize="sm" fontWeight="light" mt="1" opacity="0.7">
                  <Icon as={MdEmojiPeople} mr="1" />
                  {hiringEntry.companyName}
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
