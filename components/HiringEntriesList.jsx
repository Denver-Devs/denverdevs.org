import { useUserContext } from "@/context/UserContext";
import {
  Box,
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
import { MdCalendarToday, MdEmojiPeople, MdLink, MdLocationOn, MdOpenInNew } from "react-icons/md";
import Logo from "./Logo";

const HiringEntriesList = ({ hiringEntries }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.200");
  const { user } = useUserContext();

  return (
    <Stack spacing="4">
      {hiringEntries.length > 0 ? (
        hiringEntries
          .map((hiringEntry) => {
            const isPostedByThisUser = user?.id === hiringEntry.user_id;
            return (
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
                <Flex alignItems="flex-start" position="relative">
                  <Box position="absolute" right="0">
                    <Text fontSize="sm" fontWeight="light" opacity="0.7">
                      <Icon as={MdCalendarToday} mr="1" />
                      {format(new Date(hiringEntry.inserted_at), "MMM dd")}
                    </Text>
                  </Box>
                  <Box minW={{ base: "32px", md: "75px" }} borderRadius="lg" marginRight={{ base: "4", md: "6" }}>
                    {/* Problem: TODO: this rerenders and gets the URL each time. Need to download the image on build */}
                    <Logo path={hiringEntry.public_logo_url} />
                  </Box>
                  <Box>
                    <Text as="h4" fontFamily="body" fontSize="lg" noOfLines={1} fontWeight="extrabold">
                      <LinkOverlay href={hiringEntry.job_url} target="_blank">
                        {hiringEntry.title}
                        <Icon as={MdOpenInNew} ml="1" mb="-0.5" />
                      </LinkOverlay>
                    </Text>
                    <HStack marginTop={1} marginBottom={4} gap="0">
                      <Text fontSize="sm" fontWeight="light" opacity="0.7">
                        <Icon as={MdEmojiPeople} mr="1" />
                        {hiringEntry.company}
                      </Text>
                      <Text fontSize="sm" fontWeight="light" opacity="0.7" textTransform="capitalize">
                        <Icon as={MdLocationOn} mr="1" />
                        {hiringEntry.location.length > 0 && hiringEntry.location.join(", ")}
                      </Text>
                    </HStack>
                    <Box>
                      {hiringEntry.tags.length > 0 &&
                        hiringEntry.tags.map((tag) => (
                          <Tag variant="subtle" key={tag} mr="2" colorScheme="gray">
                            {tag}
                          </Tag>
                        ))}
                      {isPostedByThisUser && (
                        <Tag variant="subtle" mr="2" colorScheme="green">
                          My Listing
                        </Tag>
                      )}
                      {!hiringEntry.approved && (
                        <Tag variant="subtle" mr="2" colorScheme="red">
                          In Review
                        </Tag>
                      )}
                    </Box>
                  </Box>
                </Flex>
              </LinkBox>
            );
          })
          .sort((a, b) => (a.inserted_at > b.inserted_at ? 1 : -1))
      ) : (
        <Text>No jobs found </Text>
      )}
    </Stack>
  );
};

export default HiringEntriesList;
