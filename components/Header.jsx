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
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {
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
      background={useColorModeValue("white", "gray.800")}
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
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay alignItems="center" display="flex">
                  <Square
                    marginRight="2"
                    background="#2756A5"
                    bgGradient="linear(to-br, #2756A5, #7C1D22)"
                    borderRadius="md"
                    size="28px"
                  >
                    <DDLogo color="white" />
                  </Square>
                  <Text
                    as="h1"
                    color={useColorModeValue(
                      "blackAlpha.800",
                      "whiteAlpha.800"
                    )}
                    fontFamily={"body"}
                    fontWeight="bold"
                  >
                    Denver Devs
                  </Text>
                </LinkOverlay>
              </NextLink>
            </LinkBox>
            <Flex display={{ base: "none", lg: "flex" }} marginLeft="10">
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            justify={"flex-end"}
            direction={"row"}
            flex={{ base: 0, lg: 0 }}
            spacing={4}
          >
            <Link
              display={{ base: "none", lg: "inline-block" }}
              _hover={{ textDecoration: "none" }}
              href="https://opencollective.com/denverdevs"
              isExternal
            >
              <Button
                colorScheme="gray"
                leftIcon={<Icon as={MdFavorite} color="red.500" />}
                size="sm"
                variant="outline"
              >
                Support us
              </Button>
            </Link>
            {/* Why do I have to put this in a box to hide? Not sure, something with NextLink */}
            <Box display={{ base: "none", lg: "inline-block" }}>
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                href="https://discord.gg/denver-devs"
              >
                <Button
                  colorScheme="gray"
                  leftIcon={<Icon as={FaDiscord} color="gray.500" />}
                  size="sm"
                  variant="outline"
                >
                  Join us on Discord
                </Button>
              </Link>
            </Box>
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
      <Collapse animateOpacity in={isOpen}>
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
    <Stack alignItems="center" direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover id="main-menu" placement={"bottom-start"} trigger={"hover"}>
            <PopoverTrigger>
              <Link
                px="2"
                color={linkColor}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                href={navItem.href ?? "#"}
              >
                {navItem.label}
                {navItem.tag && (
                  <Tag
                    marginTop="1"
                    marginLeft="2"
                    colorScheme="purple"
                    size="sm"
                    variant="outline"
                  >
                    {navItem.tag}
                  </Tag>
                )}{" "}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                minWidth={"sm"}
                padding={4}
                background={popoverContentBgColor}
                border={0}
                boxShadow={"xl"}
                rounded={"xl"}
              >
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
    <LinkBox display={"block"} role={"group"}>
      <NextLink href={href} passHref>
        <Box
          as="a"
          display={"block"}
          padding={2}
          _hover={{
            bg: useColorModeValue("gray.50", "gray.700"),
            cursor: "pointer",
          }}
          rounded={"md"}
        >
          <Text
            as="a"
            fontSize="sm"
            fontWeight={500}
            _groupHover={{ color: useColorModeValue("gray.700", "white.700") }}
            transition={"all .3s ease"}
          >
            <LinkOverlay>{label}</LinkOverlay>
          </Text>
        </Box>
      </NextLink>
    </LinkBox>
  );
};

const MobileNav = (loggedIn, logout, login) => {
  return (
    <Stack
      display={{ md: "none" }}
      padding={4}
      background={useColorModeValue("white", "gray.800")}
    >
      {MOBILE_NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <HStack paddingTop="4" borderTopWidth="1px" spacing={4}>
        <Link
          _hover={{ textDecoration: "none" }}
          href="https://opencollective.com/denverdevs"
          isExternal
          size="sm"
        >
          <Button
            colorScheme="gray"
            leftIcon={<Icon as={MdFavorite} color="red.500" />}
            variant="outline"
          >
            Support
          </Button>
        </Link>
        <Link
          as={NextLink}
          _hover={{ textDecoration: "none" }}
          href="https://discord.gg/denver-devs"
          size="sm"
        >
          <Button
            colorScheme="gray"
            leftIcon={<Icon as={FaDiscord} color="gray.500" />}
            variant="outline"
          >
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
    <Stack onClick={children && onToggle} spacing={4}>
      <Flex
        as={Link}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={2}
        _hover={{
          textDecoration: "none",
        }}
        href={href ?? "#"}
      >
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          fontWeight={600}
        >
          {label}
          {tag && (
            <Tag
              marginTop="1"
              marginLeft="2"
              colorScheme="purple"
              size="sm"
              variant="outline"
            >
              {tag}
            </Tag>
          )}{" "}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            width={6}
            height={6}
            transform={isOpen ? "rotate(180deg)" : ""}
            transition={"all .25s ease-in-out"}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{ marginTop: "0!important" }}>
        <Stack
          align={"start"}
          marginTop={2}
          paddingLeft={4}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          borderLeft={1}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} as={NextLink} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MOBILE_NAV_ITEMS = [
  {
    label: "Jobs",
    tag: "Beta",
    children: [
      {
        label: "Browse jobs",
        href: "/jobs/",
      },
      {
        label: "Post a job",
        href: "/jobs/post-job",
      },
      {
        label: "Your Dashboard",
        href: "/jobs/dashboard",
      },
    ],
  },
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
        label: "Job Channel Rules",
        href: "/resources/job-board-rules",
      },
      {
        label: "Code of Conduct",
        href: "/resources/code-of-conduct",
      },
      {
        label: "Contact Us",
        href: "/resources/contact",
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

const NAV_ITEMS = [
  {
    label: "Jobs",
    href: "/jobs/",
    tag: "Beta",
    children: [
      {
        label: "Browse jobs",
        href: "/jobs/",
      },
      {
        label: "Post a job",
        href: "/jobs/post-job",
      },
      {
        label: "Your Dashboard",
        href: "/jobs/dashboard",
      },
    ],
  },
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
        label: "Job Channel Rules",
        href: "/resources/job-board-rules",
      },
      {
        label: "Code of Conduct",
        href: "/resources/code-of-conduct",
      },
      {
        label: "Contact Us",
        href: "/resources/contact",
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
