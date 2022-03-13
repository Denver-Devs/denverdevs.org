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
import { MdCalendarToday, MdEmojiPeople, MdLink, MdLocationOn, MdOpenInNew } from "react-icons/md";
import Logo from "./Logo";

const JobCard = ({ isUserPost, handleDeleteJob, handleOpenDialog, isDialogOpen, ...job }) => {
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
        p={{ base: "2", md: "5" }}
        key={job.id}
        as="article"
        borderWidth="1px"
        borderTopRadius="lg"
        borderBottomRadius={isUserPost && router.pathname === "/jobs/dashboard" ? "none" : "lg"}
        // _hover={{ borderColor: "#777" }}
        background={backgroundColor}
        transitionProperty="background-color"
        transitionDuration="0.2s"
      >
        <Flex alignItems="flex-start" position="relative" flexDirection={{ base: "column", sm: "row" }}>
          <Box minW={{ base: "32px", md: "75px" }} borderRadius="lg" marginRight={{ base: "4", md: "6" }}>
            <Link href={job.job_url} target="_blank">
              {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
              <Logo path={job.public_logo_url} />
            </Link>
          </Box>
          <Box flexGrow="1">
            <Text as="h4" fontFamily="body" fontSize="lg" noOfLines={1} fontWeight="extrabold">
              <Link href={job.job_url} target="_blank">
                {job.title}
                <ExternalLinkIcon marginLeft="1" marginBottom="1" opacity={0.4} />
              </Link>
            </Text>
            <HStack marginTop={1} marginBottom={4} gap="0">
              <Text fontSize="sm" fontWeight="light" opacity="0.7">
                <Icon as={MdEmojiPeople} mr="1" />
                {job.company}
              </Text>
              <Text fontSize="sm" fontWeight="light" opacity="0.7" textTransform="capitalize">
                <Icon as={MdLocationOn} mr="1" />
                {job.location.length > 0 && job.location.join(", ")}
              </Text>
            </HStack>
            <Wrap spacing="10px" mr={{ base: "0", lg: "20" }}>
              {job.tags.length > 0 &&
                job.tags.map((tag) => (
                  <WrapItem key={tag}>
                    <Tag variant="subtle" size="sm">
                      {tag}
                    </Tag>
                  </WrapItem>
                ))}
            </Wrap>
          </Box>
          <Box display="flex" flexDirection="column" minHeight="92px">
            <Text fontSize="sm" fontWeight="bold" opacity="0.6" textAlign="right">
              <Icon as={MdCalendarToday} mr="1" />
              {format(new Date(job.inserted_at), "MMM dd")}
            </Text>
            <Link
              marginTop="auto"
              justifySelf="flex-end"
              href="https://opencollective.com/denverdevs"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button size="sm" rightIcon={<ExternalLinkIcon />}>
                View Job
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
      {isUserPost && router.pathname === "/jobs/dashboard" && (
        <Box
          background={highlightColor}
          paddingY="2"
          paddingX="6"
          borderBottomRadius="lg"
          borderTopRadius="none"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontWeight="bold" mr="2">
              Status:{" "}
              {job.approved ? (
                <Badge variant="subtle" colorScheme="green">
                  Approved
                </Badge>
              ) : (
                <Badge variant="subtle">In Review</Badge>
              )}
            </Text>
          </Box>
          <Button size="sm" onClick={() => setIsOpen(true)}>
            Delete Post
          </Button>
        </Box>
      )}
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Job Post
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can&apos;t undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => deleteJobPost(job.id)} ml={3}>
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
