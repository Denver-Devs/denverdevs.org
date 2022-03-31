import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  MdCalendarToday,
  MdEmojiPeople,
  MdLink,
  MdLocationOn,
  MdOpenInNew,
} from "react-icons/md";

import Logo from "./Logo";

const JobCardPreview = ({ job, publicLogoUrl }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.300", "whiteAlpha.200");

  const [logoPath, setLogoPath] = useState("");

  useEffect(() => {
    setLogoPath(publicLogoUrl);
  }, [publicLogoUrl]);

  return (
    <div>
      <Box
        key={job.id}
        as="article"
        padding={{ base: "2", md: "5" }}
        background={backgroundColor}
        borderWidth="1px"
        borderRadius="lg"
        transitionDuration="0.2s"
        transitionProperty="background-color"
      >
        <Flex flexDirection={{ base: "column", lg: "column" }}>
          <Flex
            alignItems={{ lg: "center" }}
            marginBottom={{ base: "2", lg: "4" }}
          >
            <Link href={job.job_url || ""} target="_blank">
              {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
              <Logo path={publicLogoUrl} />
            </Link>
            <Box width="100%" marginLeft={{ base: "2", lg: "4" }}>
              <Flex
                alignItems="center"
                justifyContent={"space-between"}
                flexDirection="row"
              >
                <Text
                  as="h4"
                  fontFamily="body"
                  fontSize="lg"
                  fontWeight="extrabold"
                  noOfLines={1}
                >
                  <Link href={job.job_url || ""} target="_blank">
                    {job.title || "No title set"}
                    <ExternalLinkIcon
                      marginLeft="1"
                      marginBottom="1"
                      opacity={0.4}
                    />
                  </Link>
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  textAlign="right"
                  opacity="0.6"
                >
                  <Icon as={MdCalendarToday} marginRight="1" />
                  {format(new Date(), "MMM dd")}
                </Text>
              </Flex>
              <HStack gap="0" marginTop={1}>
                <Text fontSize="sm" fontWeight="light" opacity="0.7">
                  <Icon as={MdEmojiPeople} marginRight="1" />
                  {job.company || "No company set"}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  textTransform="capitalize"
                  opacity="0.7"
                >
                  <Icon as={MdLocationOn} marginRight="1" />
                  {job.location?.length > 0
                    ? job?.location?.map((tag) => tag.value).join(", ")
                    : ""}
                </Text>
              </HStack>
            </Box>
          </Flex>
          <Flex
            justifyContent={{ lg: "space-between" }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Wrap
              marginBottom={{ base: "4", lg: "0" }}
              marginLeft={{ lg: "85px" }}
              spacing="2"
            >
              {job.job_tags?.length > 0 &&
                job.job_tags.map((tag) => (
                  <WrapItem key={tag.value}>
                    <Tag size="sm" variant="subtle">
                      {tag.label}
                    </Tag>
                  </WrapItem>
                ))}
            </Wrap>
            <Link
              marginTop="auto"
              _hover={{ textDecoration: "none" }}
              href={job.job_url || ""}
              isExternal
            >
              <Button rightIcon={<ExternalLinkIcon />} size="sm">
                View Job
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default JobCardPreview;
