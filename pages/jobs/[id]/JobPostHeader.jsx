import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Link,
  Skeleton,
  Tag,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Logo from "@/components/Logo";

export default function JobPostHeader({ job, isLoading }) {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      marginBottom={8}
      padding={{ base: "5", xl: "16" }}
      bgGradient="linear(to-br, #2756A5, #7C1D22)"
      borderRadius="2xl"
      backgroundColor="blue.500"
    >
      <Box alignItems={"flex-end"} display={"flex"} marginBottom={4}>
        <Skeleton isLoaded={!isLoading}>
          <Logo path={job?.public_logo_url} />
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          <Heading
            marginLeft={2}
            color="white"
            textTransform={"uppercase"}
            opacity={"0.5"}
            size={{ base: "sm", md: "md" }}
          >
            {job?.company}
          </Heading>
        </Skeleton>
      </Box>
      <Skeleton isLoaded={!isLoading}>
        <Heading
          marginBottom={4}
          color={"white"}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          {job?.title}
        </Heading>
      </Skeleton>
      <Wrap marginBottom={4} spacing="2">
        {job?.tags?.length > 0 &&
          job.tags.map((tag) => (
            <WrapItem key={tag}>
              <Skeleton isLoaded={!isLoading}>
                <Tag size="md" variant="subtle">
                  {tag}
                </Tag>
              </Skeleton>
            </WrapItem>
          ))}
      </Wrap>
      <Skeleton isLoaded={!isLoading}>
        <Link
          _hover={{ textDecoration: "none" }}
          href={job?.job_url}
          isExternal
        >
          <Button rightIcon={<ExternalLinkIcon />} size="lg">
            View Job
          </Button>
        </Link>
      </Skeleton>
    </Box>
  );
}
