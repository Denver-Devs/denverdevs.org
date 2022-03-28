import {
  Box,
  ButtonGroup,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      maxWidth="7xl"
      marginTop="auto"
      mx="auto"
      px={{ base: "4", md: "8" }}
      py="12"
      role="contentinfo"
    >
      <Stack>
        <Stack
          align="center"
          justify="space-between"
          direction="row"
          spacing="4"
        >
          <Heading as="h3" fontFamily="body" opacity="0.7" size="sm">
            Denver Devs
          </Heading>
          <ButtonGroup opacity="0.7" variant="ghost">
            <IconButton
              as="a"
              aria-label="Email"
              href="mailto:info@denverdevs.org"
              icon={<FaEnvelope fontSize="20px" />}
            />
            <IconButton
              as="a"
              aria-label="GitHub"
              href="https://github.com/Denver-Devs"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              aria-label="Twitter"
              href="https://twitter.com/denverdevs"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" opacity="0.7">
          <Link href="https://www.netlify.com" target="_blank">
            <Icon as={SiNetlify} marginRight="1" />
            This site is powered by Netlify
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
