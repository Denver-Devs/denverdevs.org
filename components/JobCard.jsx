import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/utils/lib/supabase";
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
import { useRouter } from "next/router";
import React from "react";
import {
  MdCalendarToday,
  MdEmojiPeople,
  MdLink,
  MdLocationOn,
  MdOpenInNew,
} from "react-icons/md";
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
            <Link href={job.job_url} target="_blank">
              {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
              <Logo path={job.public_logo_url} />
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
                  <Link href={job.job_url} target="_blank">
                    {job.title}
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
                  {format(new Date(job.inserted_at), "MMM dd")}
                </Text>
              </Flex>
              <HStack gap="0" marginTop={1}>
                <Text fontSize="sm" fontWeight="light" opacity="0.7">
                  <Icon as={MdEmojiPeople} marginRight="1" />
                  {job.company}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  textTransform="capitalize"
                  opacity="0.7"
                >
                  <Icon as={MdLocationOn} marginRight="1" />
                  {job.location.length > 0 && job.location.join(", ")}
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
              {job.tags.length > 0 &&
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
