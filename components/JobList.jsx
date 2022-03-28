import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import {
  MdCalendarToday,
  MdEmojiPeople,
  MdLink,
  MdLocationOn,
  MdOpenInNew,
} from "react-icons/md";

import { useUserContext } from "@/context/UserContext";

import JobCard from "./JobCard";
import Logo from "./Logo";

const JobList = ({ jobs }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.200");
  const { user } = useUserContext();

  return (
    <Stack spacing="4">
      {jobs.length > 0 ? (
        jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              isUserPost={user?.id === job.user_id}
              {...job}
            />
          );
        })
      ) : (
        <Text>No jobs found </Text>
      )}
    </Stack>
  );
};

export default JobList;
