import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import toDate from "date-fns/toDate";
import NextLink from "next/link";
import React from "react";

const UpdateCard = ({ frontmatter, href }) => {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Stack>
      <Box
        maxWidth="2xl"
        mx="auto"
        px={8}
        py={4}
        background={backgroundColor}
        borderWidth="1px"
        rounded="lg"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {format(parseISO(frontmatter.date), "MMMM d, Y")}
          </chakra.span>
          <Box
            px={3}
            py={1}
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            background="gray.600"
            rounded="md"
          >
            {frontmatter.category}
          </Box>
        </Flex>

        <Box marginTop={2}>
          <NextLink href={href} passHref>
            <Link
              color="gray.700"
              fontSize="2xl"
              fontWeight="700"
              _hover={{
                color: "gray.600",
                _dark: {
                  color: "gray.200",
                },
                textDecor: "underline",
              }}
              _dark={{
                color: "white",
              }}
            >
              {frontmatter.title}
            </Link>
          </NextLink>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

        <Flex alignItems="center" justifyContent="space-between" marginTop={4}>
          <NextLink href={href} passHref>
            <Link
              color="brand.600"
              _hover={{
                textDecor: "underline",
              }}
              _dark={{
                color: "brand.400",
              }}
            >
              Read more
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Stack>
  );
};

export default UpdateCard;
