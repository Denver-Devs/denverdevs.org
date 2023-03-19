import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Square,
  Stack,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

export default function WithSubnavigation() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {
    const collapseMenuIfOpen = () => {
      onClose();
    };

    router.events.on("routeChangeStart", collapseMenuIfOpen);
  }, [onClose, router.events]);

  return (
    <Box
      sx={{
        backdropFilter: "blur(10px)",
      }}
      position={"fixed"}
      zIndex={2}
      top={0}
      alignItems={"center"}
      display={{ base: "inherit", lg: "flex" }}
      width="100%"
      minHeight={"60px"}
      px={{ base: 4 }}
      py={{ base: 2 }}
      color={useColorModeValue("gray.600", "white")}
      fontFamily="body"
      background={useColorModeValue("whiteAlpha.700", "rgba(26, 32, 44, 0.7)")}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      borderBottom={1}
    >
      <Container maxWidth="container.xl">
        <Flex alignItems="center">
          <Flex
            flex={{ base: 0, lg: "auto" }}
            display={{ base: "flex", lg: "none" }}
            marginLeft={{ base: -2 }}
          >
            <IconButton
              aria-label={"Toggle Navigation"}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              onClick={onToggle}
              variant={"ghost"}
            />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={{ base: "center", lg: "start" }}
            flex={{ base: 3, lg: 1 }}
          >
            <Square
              marginRight="2"
              background="#2756A5"
              bgGradient="linear(to-br, #2756A5, #7C1D22)"
              borderRadius="md"
              size="28px"
            >
              <DDLogo color="white" />
            </Square>
            <Link
              as="h1"
              color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              fontFamily={"body"}
              fontWeight="bold"
              href="/"
            >
              Denver Devs
            </Link>
          </Flex>

          <Stack
            justify={"flex-end"}
            direction={"row"}
            flex={{ base: 0, lg: 0 }}
            spacing={4}
          >
            {colorMode === "light" ? (
              <IconButton
                aria-label="Change Theme"
                icon={<MoonIcon />}
                onClick={toggleColorMode}
                size="sm"
                variant="outline"
              />
            ) : (
              <IconButton
                aria-label="Change Theme"
                icon={<SunIcon />}
                onClick={toggleColorMode}
                size="sm"
                variant="outline"
              />
            )}
          </Stack>
        </Flex>
      </Container>
      <Collapse animateOpacity in={isOpen}></Collapse>
    </Box>
  );
}

const DDLogo = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.42 118.19">
      <path
        fill="currentColor"
        className="cls-1"
        d="m79 60.59 1.42-1.44L79 57.7c-2.31-2.4-4.8-5.85-4.8-7.17V35.18c0-11.44-2.83-19.63-8.85-25.81C60.16 4 51.78.76 41.85.13L39.68 0v21.37l1.81.23c3.72.46 6.58 1.61 7.66 3.09 1.78 2.4 2.66 5.92 2.66 10.46V50.5c0 2.76 2.7 6.34 4.57 8.48-1.8 1.94-4.57 5.49-4.57 8.71v15.16q0 7.5-2.76 10.82c-1.15 1.38-4 2.46-7.56 2.92l-1.81.23v21.37l2.24-.19c9.8-.83 18-4 23-8.91 6.18-6 9.34-15.49 9.34-28 0-.09-.07-10.12 0-13.31.01-1.63 2.84-5.25 4.74-7.19ZM34.55 21.39V0H0v118.19h34.55V97.02H22.64V21.39h11.91z"
      />
    </svg>
  </Icon>
);
