import { useUserContext } from "@/context/UserContext";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
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
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { loggedIn, user, login, logout } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    console.log("change!");
    const toggleMenuOnChange = () => {
      onToggle();
    };

    router.events.on("routeChangeStart", toggleMenuOnChange);

    return () => {
      router.events.off("routeChangeStart", toggleMenuOnChange);
    };
  }, [onToggle, router.events]);

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      minH={"60px"}
      display={{ base: "inherit", lg: "flex" }}
      alignItems={"center"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      position={"fixed"}
      top={0}
      zIndex={2}
      width="100%"
      fontFamily="body"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Flex flex={{ base: 0, lg: "auto" }} ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 3, lg: 1 }} justify={{ base: "center", lg: "start" }} alignItems="center">
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay display="flex" alignItems="center">
                  <Square
                    size="28px"
                    bg="#2756A5"
                    bgGradient="linear(to-br, #2756A5, #7C1D22)"
                    borderRadius="md"
                    mr="2"
                  >
                    <DDLogo color="white" />
                  </Square>
                  <Text
                    as="h1"
                    fontFamily={"body"}
                    fontWeight="bold"
                    color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
                  >
                    Denver Devs
                  </Text>
                </LinkOverlay>
              </NextLink>
            </LinkBox>
            <Flex ml="10" display={{ base: "none", lg: "flex" }}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack flex={{ base: 0, lg: 0 }} justify={"flex-end"} direction={"row"} spacing={4}>
            <Link
              href="https://opencollective.com/denverdevs"
              isExternal
              display={{ base: "none", lg: "inline-block" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="outline"
                colorScheme="gray"
                size="sm"
                leftIcon={<Icon as={MdFavorite} color="red.500" />}
              >
                Support us
              </Button>
            </Link>
            {/* Why do I have to put this in a box to hide? Not sure, something with NextLink */}
            <Box display={{ base: "none", lg: "inline-block" }}>
              <Link as={NextLink} href="https://discord.gg/denver-devs" _hover={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  colorScheme="gray"
                  size="sm"
                  leftIcon={<Icon as={FaDiscord} color="gray.500" />}
                >
                  Join us on Discord
                </Button>
              </Link>
            </Box>
            {colorMode === "light" ? (
              <IconButton
                aria-label="Change Theme"
                size="sm"
                variant="outline"
                icon={<MoonIcon />}
                onClick={toggleColorMode}
              />
            ) : (
              <IconButton
                aria-label="Change Theme"
                size="sm"
                variant="outline"
                icon={<SunIcon />}
                onClick={toggleColorMode}
              />
            )}
          </Stack>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
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

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                px="2"
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {navItem.tag && (
                  <Tag variant="outline" size="sm" colorScheme="purple" ml="2" mt="1">
                    {navItem.tag}
                  </Tag>
                )}{" "}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <LinkBox
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.700"), cursor: "pointer" }}
    >
      <NextLink href={href} passHref>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: useColorModeValue("gray.700", "white.700") }}
              fontWeight={500}
              fontSize="sm"
            >
              <LinkOverlay>{label}</LinkOverlay>
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </NextLink>
    </LinkBox>
  );
};

const MobileNav = (loggedIn, logout, login) => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <HStack spacing={4} borderTopWidth="1px" paddingTop="4">
        <Link href="https://opencollective.com/denverdevs" isExternal _hover={{ textDecoration: "none" }} size="sm">
          <Button variant="outline" colorScheme="gray" leftIcon={<Icon as={MdFavorite} color="red.500" />}>
            Support
          </Button>
        </Link>
        <Link as={NextLink} href="https://discord.gg/denver-devs" _hover={{ textDecoration: "none" }} size="sm">
          <Button variant="outline" colorScheme="gray" leftIcon={<Icon as={FaDiscord} color="gray.500" />}>
            Join us on Discord
          </Button>
        </Link>
      </HStack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, tag }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
          {tag && (
            <Tag variant="outline" size="sm" colorScheme="purple" ml="2" mt="1">
              {tag}
            </Tag>
          )}{" "}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link as={NextLink} key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // {
  //   label: "Jobs",
  //   tag: "Beta",
  //   children: [
  //     {
  //       label: "Browse jobs",
  //       href: "/jobs",
  //     },
  //     {
  //       label: "Post a job",
  //       href: "/post-job",
  //     },
  //     {
  //       label: "Job board rules",
  //       href: "/job-board-rules",
  //     },
  //   ],
  // },
  // {
  //   label: "Events",
  //   children: [
  //     {
  //       label: "Meetups",
  //       href: "/jobs",
  //     },
  //     {
  //       label: "Conferences",
  //       href: "/post-job",
  //     },
  //     {
  //       label: "AMAs",
  //       href: "/job-board-rules",
  //     },
  //   ],
  // },
  {
    label: "Rules & Resources",
    children: [
      {
        label: "Discord Rules",
        href: "/resources/rules",
      },
      {
        label: "Code of Conduct",
        href: "/resources/code-of-conduct",
      },
    ],
  },
  // {
  //   label: "About",
  //   children: [
  //     {
  //       label: "About Us",
  //       href: "/post-job",
  //     },
  //     {
  //       label: "Contact",
  //       href: "/post-job",
  //     },
  //   ],
  // },
];
