import { Box, ButtonGroup, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" width="100%" mt="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Heading as="h3" size="sm" fontFamily="body" opacity="0.7">
            Denver Devs
          </Heading>
          <ButtonGroup variant="ghost" opacity="0.7">
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" opacity="0.7">
          Built with love and Open Source
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
