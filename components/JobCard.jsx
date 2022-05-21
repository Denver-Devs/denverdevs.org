import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaDollarSign } from "react-icons/fa";
import {
  MdCalendarToday,
  MdEmojiPeople,
  MdLink,
  MdLocationOn,
  MdMoney,
  MdOpenInNew,
} from "react-icons/md";

import { useUserContext } from "@/context/UserContext";
import {
  formatHourlyComp,
  formatSalaryComp,
} from "@/utils/helpers/formatCompensation";
import { supabase } from "@/utils/lib/supabase";

import Logo from "./Logo";

const JobCard = ({
  isUserPost,
  handleDeleteJob,
  handleOpenDialog,
  isDialogOpen,
  ...job
}) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.300", "whiteAlpha.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const { user } = useUserContext();
  const router = useRouter();

  const deleteJobPost = async (jobId) => {
    try {
      await supabase.from("posts").delete().eq("id", jobId);
      onClose();
      router.reload(window.location.pathname);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Box
        key={job.id}
        as="article"
        padding={{ base: "2", md: "5" }}
        background={backgroundColor}
        borderWidth="1px"
        borderTopRadius="lg"
        borderBottomRadius={
          isUserPost && router.pathname === "/jobs/dashboard" ? "none" : "lg"
        }
        transitionDuration="0.2s"
        transitionProperty="background-color"
      >
        <Flex flexDirection={{ base: "column", lg: "column" }}>
          <Flex
            alignItems={{ lg: "center" }}
            marginBottom={{ base: "2", lg: "4" }}
          >
            <NextLink href={`/jobs/${job.id}`} passHref>
              <Link
                alignItems={"center"}
                display={"flex"}
                minWidth={{ base: "30px", md: "70px" }}
                height={{ base: "30px", md: "70px" }}
                padding={"1"}
                background={"white"}
                borderWidth="1px"
                borderRadius="lg"
              >
                {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
                <Logo path={job.public_logo_url} />
              </Link>
            </NextLink>
            <Box width="100%" marginLeft={{ base: "2", lg: "4" }}>
              <Flex
                alignItems="center"
                justifyContent={"space-between"}
                flexDirection="row"
              >
                <Text
                  as="h4"
                  fontFamily="body"
                  fontSize={{ base: "xs", md: "lg" }}
                  fontWeight="extrabold"
                  noOfLines={1}
                >
                  <NextLink href={`/jobs/${job.id}`} passHref>
                    <Link>{job.title}</Link>
                  </NextLink>
                </Text>

                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="bold"
                  textAlign="right"
                  opacity="0.6"
                >
                  <Icon
                    as={MdCalendarToday}
                    boxSize={{ base: "10px", md: "16px" }}
                    marginRight="1"
                  />
                  {format(new Date(job.inserted_at), "MMM dd")}
                </Text>
              </Flex>
              <HStack wrap="wrap" gap="0" marginTop={1}>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="light"
                  opacity="0.7"
                >
                  <Icon
                    as={MdEmojiPeople}
                    boxSize={{ base: "10px", md: "16px" }}
                    marginRight="1"
                  />
                  {job.company}
                </Text>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="light"
                  textTransform="capitalize"
                  opacity="0.7"
                >
                  <Icon
                    as={MdLocationOn}
                    boxSize={{ base: "10px", md: "16px" }}
                    marginRight="1"
                  />
                  {job.location.length > 0 && job.location.join(", ")}
                </Text>
                {job.compensation_type && (
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="light"
                    textTransform="capitalize"
                    opacity="0.7"
                  >
                    <Icon
                      as={FaDollarSign}
                      boxSize={{ base: "10px", md: "16px" }}
                      marginRight="0.5"
                    />
                    <Text display="inline" marginRight="1">
                      {job.compensation_type}:
                    </Text>
                    {job.compensation_type === "hourly"
                      ? formatHourlyComp(
                          job.compensation_min,
                          job.compensation_max
                        )
                      : formatSalaryComp(
                          job.compensation_min,
                          job.compensation_max
                        )}
                  </Text>
                )}
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
              {job.tags?.length > 0 &&
                job.tags.map((tag) => (
                  <WrapItem key={tag}>
                    <Tag size="sm" variant="subtle">
                      {tag}
                    </Tag>
                  </WrapItem>
                ))}
            </Wrap>
            <Link
              marginTop="auto"
              _hover={{ textDecoration: "none" }}
              href={job.job_url}
              isExternal
            >
              <Button rightIcon={<ExternalLinkIcon />} size="sm">
                View Job
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      {isUserPost && router.pathname === "/jobs/dashboard" && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          background={highlightColor}
          borderTopRadius="none"
          borderBottomRadius="lg"
          paddingX="6"
          paddingY="2"
        >
          <Box>
            <Text marginRight="2" fontWeight="bold">
              Status:{" "}
              {job.approved ? (
                <Badge colorScheme="green" variant="subtle">
                  Approved
                </Badge>
              ) : (
                <Badge variant="subtle">In Review</Badge>
              )}
            </Text>
          </Box>
          <Button onClick={() => setIsOpen(true)} size="sm">
            Delete Post
          </Button>
        </Flex>
      )}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Job Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                marginLeft={3}
                colorScheme="red"
                onClick={() => deleteJobPost(job.id)}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default JobCard;
