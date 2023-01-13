import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import React from "react";
import { FaDiscord, FaQuestionCircle, FaRocket } from "react-icons/fa";
import { SiChakraui, SiNetlify, SiNextdotjs } from "react-icons/si";

import * as ga from "@/lib/ga";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleInviteGA = () => {
    ga.event({
      action: "Clicked Invite Button",
    });
  };

  return (
    <>
      <NextSeo title={"Home"} />
      <Box
        marginTop={{ base: "20", xl: "16" }}
        color="white"
        textColor={"#8C3B34"}
        textAlign={"center"}
        backgroundImage={{
          base: "url(https://www.denvertechsocial.club/BGTop.png)",
          md: " url(https://imagedelivery.net/LOdHOgtILVr2v9JtAHI-VA/3d0ae5ba-46ca-4d89-ed4a-784e0c771200/public)",
        }}
        backgroundSize={"cover"}
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        borderRadius="2xl"
        backgroundColor="#FFD554"
        paddingX={{ base: "1", xl: "2" }}
        paddingY={{ base: "1", xl: "2" }}
      >
        <Box
          border="2px solid #8C3B34"
          borderRadius="xl"
          paddingX="2"
          paddingY="6"
        >
          <Text
            maxWidth={{ base: "280px", lg: "500px" }}
            margin="auto"
            marginBottom="2"
            fontWeight="semibold"
            lineHeight="1.2"
          >
            We launched another space for the tech community of Denver!
          </Text>
          {/* <Text marginBottom="2" fontSize="lg" fontWeight="bold">
          Denver Tech Social Club
        </Text> */}
          <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth={{ base: "320px", lg: "500px" }}
            marginBottom="7"
            marginX={"auto"}
            paddingX="2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 583 118"
              width="100%"
            >
              <title>Denver Tech Social Club</title>
              <g fill="#8C3B34" filter="url(#a)">
                <path d="M48.126 2.091c6.393 0 11.994 1.066 16.803 3.197 4.81 2.07 8.797 4.87 11.963 8.401 3.166 3.47 5.54 7.488 7.123 12.054a41.848 41.848 0 0 1 2.374 13.973c0 5.357-.974 10.654-2.922 15.89-1.948 5.235-4.84 9.923-8.675 14.063-3.836 4.2-8.615 7.58-14.338 10.136-5.722 2.557-12.389 3.836-19.999 3.836-6.94 0-12.907-.822-17.899-2.466-4.931-1.644-8.98-3.744-12.145-6.301-3.227-2.557-5.571-5.418-7.032-8.584-1.522-3.105-2.283-6.119-2.283-9.04 0-1.95.335-3.776 1.004-5.48.61-1.766 1.522-3.288 2.74-4.566 1.218-1.279 2.71-2.283 4.475-3.014 1.765-.791 3.774-1.187 6.027-1.187 1.887 0 3.5.548 4.84 1.644 1.278 1.035 1.918 2.709 1.918 5.023 0 1.156-.427 2.374-1.279 3.652a74.727 74.727 0 0 1-2.74 3.836 51.571 51.571 0 0 0-2.83 3.835c-.853 1.218-1.279 2.435-1.279 3.653 0 2.01.609 3.805 1.827 5.388 1.217 1.583 2.8 2.892 4.748 3.927 1.948 1.096 4.17 1.918 6.667 2.466a33.4 33.4 0 0 0 7.762.913c5.784 0 10.776-1.218 14.977-3.653 4.2-2.374 7.64-5.48 10.319-9.315 2.74-3.835 4.748-8.127 6.027-12.876 1.34-4.81 2.009-9.62 2.009-14.429 0-3.835-.396-7.519-1.187-11.05-.792-3.53-1.979-6.697-3.562-9.497-1.522-2.8-3.44-5.083-5.753-6.85-2.252-1.825-4.84-2.89-7.762-3.195-1.34 0-2.374.639-3.105 1.917-.67 1.218-1.187 2.892-1.553 5.023-.304 2.07-.487 4.505-.547 7.306-.061 2.8-.092 5.783-.092 8.95 0 2.13.061 4.444.183 6.94.182 2.496.426 4.992.73 7.488.305 2.435.67 4.779 1.096 7.032.487 2.252 1.005 4.23 1.553 5.935a3.28 3.28 0 0 0 1.004 1.553c.548.365 1.066.73 1.553 1.096.487.365.913.76 1.278 1.187.426.365.64.852.64 1.461 0 1.096-.335 1.979-1.005 2.648-.67.67-1.553 1.005-2.648 1.005H25.844c-.974 0-1.735-.274-2.283-.822-.548-.609-.822-1.4-.822-2.374 0-1.462.791-3.197 2.374-5.206.853-1.095 1.614-2.496 2.283-4.2.67-1.766 1.218-3.684 1.644-5.754.487-2.13.852-4.353 1.096-6.666.243-2.374.365-4.78.365-7.214a60.33 60.33 0 0 0-.365-6.667c-.183-2.252-.487-4.353-.913-6.3-.426-2.01-.974-3.867-1.644-5.571-.609-1.705-1.37-3.136-2.283-4.293-.792-.913-1.674-1.582-2.648-2.009a7.446 7.446 0 0 0-3.014-.639c-1.948 0-3.653.7-5.114 2.1-1.522 1.34-2.283 3.319-2.283 5.936 0 .974.243 1.766.73 2.375.488.548 1.127 1.035 1.918 1.46.73.366 1.522.731 2.375 1.097.852.304 1.674.73 2.465 1.278.73.487 1.34 1.157 1.827 2.01.487.79.73 1.856.73 3.196 0 1.46-.274 2.74-.822 3.835a8.372 8.372 0 0 1-2.191 2.648 9.5 9.5 0 0 1-3.105 1.644 12.96 12.96 0 0 1-3.744.548 13.79 13.79 0 0 1-4.384-.73c-1.522-.488-2.861-1.218-4.018-2.192a11.758 11.758 0 0 1-2.922-3.744C.366 28.239 0 26.474 0 24.465c0-2.922.609-5.723 1.826-8.402 1.157-2.74 2.923-5.144 5.297-7.214 2.313-2.07 5.205-3.714 8.675-4.931C19.268 2.639 23.319 2 27.945 2l20.182.091ZM138.194 52.135c-2.131 4.566-4.901 8.189-8.31 10.867-3.349 2.618-7.61 3.927-12.785 3.927-3.348 0-6.545-.517-9.589-1.552-3.044-1.035-5.722-2.557-8.036-4.566-2.313-2.01-4.17-4.475-5.57-7.397-1.34-2.983-2.01-6.362-2.01-10.137 0-3.775.67-7.123 2.01-10.045 1.4-2.983 3.257-5.48 5.57-7.489 2.314-2.009 4.992-3.53 8.036-4.566 3.044-1.035 6.241-1.552 9.589-1.552 3.044 0 5.692.335 7.945 1.004 2.252.61 4.109 1.462 5.57 2.557 1.462 1.096 2.557 2.375 3.288 3.836a10.27 10.27 0 0 1 1.096 4.657c0 2.983-1.766 6.18-5.297 9.589-3.47 3.348-8.919 6.94-16.346 10.776a15.322 15.322 0 0 0 4.383 2.922c1.644.67 3.47 1.005 5.479 1.005 2.01 0 4.11-.487 6.302-1.461 2.252-1.035 4.079-2.74 5.479-5.114.182-.366.487-.548.913-.548.609 0 1.218.365 1.826 1.095.67.67.822 1.4.457 2.192Zm-27.67-3.379c3.957-2.74 6.697-5.418 8.219-8.036 1.583-2.618 2.374-5.023 2.374-7.214 0-1.34-.243-2.557-.73-3.653-.427-1.096-1.005-2.04-1.736-2.831a6.905 6.905 0 0 0-2.374-1.826c-.852-.488-1.735-.731-2.648-.731-2.496 0-4.323 1.035-5.479 3.105-1.157 2.07-1.736 4.566-1.736 7.488 0 2.253.335 4.597 1.005 7.032a22.958 22.958 0 0 0 3.105 6.666ZM141.32 57.797c2.07-1.948 3.653-4.536 4.748-7.762 1.096-3.288 1.644-6.575 1.644-9.863 0-2.922-.456-5.51-1.37-7.762-.852-2.253-2.252-3.744-4.2-4.475-1.522-.609-2.283-1.583-2.283-2.922 0-1.522.791-2.283 2.374-2.283 3.774 0 7.062-.213 9.863-.64 2.8-.486 5.54-1.126 8.218-1.917.853-.183 1.553-.274 2.101-.274 2.07 0 3.105 1.035 3.105 3.105 0 .609-.092 1.278-.274 2.009a5.196 5.196 0 0 0-.274.913l-.183.913c1.644-1.948 3.744-3.592 6.301-4.931 2.557-1.4 5.48-2.1 8.767-2.1 3.227 0 5.845.395 7.854 1.187 2.07.791 3.683 1.887 4.84 3.287a10.47 10.47 0 0 1 2.465 4.658c.487 1.704.731 3.53.731 5.479 0 2.253-.244 4.536-.731 6.849-.487 2.313-.73 4.566-.73 6.758 0 1.765.274 3.47.822 5.114.608 1.643 1.735 3.196 3.378 4.657 1.766 1.461 2.649 3.135 2.649 5.023 0 .974-.305 1.765-.913 2.374-.548.548-1.309.822-2.283.822h-23.744c-.974 0-1.765-.274-2.374-.822-.548-.609-.822-1.43-.822-2.466 0-1.704.852-3.318 2.557-4.84 1.035-.974 1.948-2.13 2.74-3.47a27.1 27.1 0 0 0 2.009-4.475 26.522 26.522 0 0 0 1.187-4.93c.304-1.706.456-3.38.456-5.024 0-1.643-.152-3.226-.456-4.748-.305-1.522-.792-2.862-1.461-4.018-.67-1.157-1.522-2.07-2.557-2.74-1.035-.67-2.253-1.005-3.653-1.005-2.314 0-4.353 1.218-6.119 3.653-1.704 2.375-2.861 5.57-3.47 9.589-.487 4.2-.396 7.671.274 10.41.731 2.68 1.979 4.871 3.744 6.576 1.705 1.583 2.557 3.287 2.557 5.114 0 .974-.304 1.765-.913 2.374-.548.548-1.278.822-2.192.822h-23.834c-.974 0-1.736-.274-2.283-.822-.548-.609-.822-1.4-.822-2.374 0-1.766.852-3.44 2.557-5.023ZM227.594 26.109c-.669-.305-1.187-.7-1.552-1.188a3.223 3.223 0 0 1-.548-1.826c0-.609.183-1.157.548-1.644.365-.548.913-.913 1.644-1.096 1.4-.304 3.105-.608 5.114-.913a34.662 34.662 0 0 1 6.027-.548c2.191 0 4.109.305 5.753.914 1.644.608 2.466 1.735 2.466 3.378 0 1.157-.487 2.527-1.462 4.11l-21.095 35.98c-.852 1.522-1.765 2.527-2.739 3.014-.913.487-1.735.73-2.466.73-1.278 0-2.466-.882-3.561-2.648-1.035-1.826-2.07-4.11-3.105-6.849a139.243 139.243 0 0 1-3.014-8.95 125.442 125.442 0 0 0-3.105-9.223c-1.035-2.922-2.161-5.449-3.379-7.58-1.217-2.191-2.526-3.53-3.926-4.017-1.705-.67-2.649-1.644-2.831-2.923-.305-1.522.334-2.283 1.917-2.283 3.775 0 7.002-.213 9.68-.64a65.772 65.772 0 0 0 7.945-1.917 8.666 8.666 0 0 1 2.101-.274c2.678 0 3.926 1.705 3.744 5.114a5.12 5.12 0 0 0-.092 1.005v1.096c0 1.643.061 3.683.183 6.118.183 2.374.457 4.688.822 6.94.365 2.192.852 4.08 1.461 5.662.609 1.522 1.37 2.283 2.283 2.283a1.7 1.7 0 0 0 1.096-.365 66.382 66.382 0 0 0 3.014-7.488c.852-2.557 1.278-4.901 1.278-7.032 0-1.644-.335-3.074-1.004-4.292-.609-1.218-1.675-2.1-3.197-2.648ZM292.922 52.135c-2.131 4.566-4.901 8.189-8.31 10.867-3.348 2.618-7.61 3.927-12.785 3.927-3.348 0-6.545-.517-9.589-1.552-3.044-1.035-5.722-2.557-8.036-4.566-2.313-2.01-4.17-4.475-5.57-7.397-1.34-2.983-2.009-6.362-2.009-10.137 0-3.775.669-7.123 2.009-10.045 1.4-2.983 3.257-5.48 5.57-7.489 2.314-2.009 4.992-3.53 8.036-4.566 3.044-1.035 6.241-1.552 9.589-1.552 3.044 0 5.692.335 7.945 1.004 2.253.61 4.109 1.462 5.571 2.557 1.461 1.096 2.557 2.375 3.287 3.836a10.27 10.27 0 0 1 1.096 4.657c0 2.983-1.766 6.18-5.297 9.589-3.47 3.348-8.919 6.94-16.346 10.776a15.336 15.336 0 0 0 4.383 2.922c1.644.67 3.47 1.005 5.48 1.005 2.009 0 4.109-.487 6.301-1.461 2.252-1.035 4.079-2.74 5.479-5.114.183-.366.487-.548.913-.548.609 0 1.218.365 1.827 1.095.669.67.821 1.4.456 2.192Zm-27.67-3.379c3.957-2.74 6.697-5.418 8.219-8.036 1.583-2.618 2.374-5.023 2.374-7.214 0-1.34-.243-2.557-.73-3.653-.427-1.096-1.005-2.04-1.735-2.831a6.918 6.918 0 0 0-2.375-1.826c-.852-.488-1.735-.731-2.648-.731-2.496 0-4.323 1.035-5.479 3.105-1.157 2.07-1.735 4.566-1.735 7.488 0 2.253.334 4.597 1.004 7.032a22.958 22.958 0 0 0 3.105 6.666ZM316.686 43.916c-.182 6.332 1.279 10.928 4.384 13.79 1.643 1.643 2.465 3.348 2.465 5.114 0 .974-.304 1.765-.913 2.374-.548.548-1.278.822-2.192.822h-23.834c-.974 0-1.735-.274-2.283-.822-.548-.609-.822-1.4-.822-2.374 0-1.766.852-3.44 2.557-5.023 2.07-1.948 3.653-4.536 4.748-7.762 1.096-3.288 1.644-6.575 1.644-9.863 0-2.922-.456-5.51-1.37-7.762-.852-2.253-2.252-3.744-4.2-4.475-1.522-.609-2.283-1.583-2.283-2.922 0-1.522.791-2.283 2.374-2.283 3.775 0 7.062-.213 9.863-.64 2.8-.486 5.54-1.126 8.219-1.917.852-.183 1.552-.274 2.1-.274 2.07 0 3.105 1.035 3.105 3.105 0 .609-.092 1.278-.274 2.009a87.951 87.951 0 0 0-.822 3.379l-.731 3.105a52.18 52.18 0 0 1 3.197-4.293 26.874 26.874 0 0 1 3.835-3.652c1.339-1.035 2.709-1.857 4.11-2.466 1.461-.67 2.891-1.005 4.292-1.005 1.4 0 2.617.214 3.652.64 1.035.426 1.888.974 2.557 1.643a5.993 5.993 0 0 1 1.462 2.375c.304.913.456 1.826.456 2.74 0 .974-.182 1.948-.548 2.922a7.538 7.538 0 0 1-1.461 2.648c-.67.73-1.491 1.34-2.466 1.827-.913.426-1.978.639-3.196.639-2.07 0-4.018-.274-5.844-.822-1.766-.609-3.41-.913-4.932-.913a5.23 5.23 0 0 0-2.191.456c-.67.244-1.309.761-1.918 1.553-.609.73-1.157 1.765-1.644 3.105-.426 1.278-.791 2.952-1.096 5.022Z" />
              </g>
              <g fill="#8C3B34" filter="url(#b)">
                <path d="M398.912 1.857c4.018 0 7.975-.183 11.871-.548C414.68.944 418.607.517 422.564.03c.974-.121 1.796.122 2.465.731a4.374 4.374 0 0 1 1.462 2.283l3.287 13.607c.061.122.091.274.091.456 0 .67-.365 1.188-1.095 1.553a6.114 6.114 0 0 1-2.375.456 4.38 4.38 0 0 1-1.552-.273c-.487-.183-.853-.427-1.096-.731a51.526 51.526 0 0 0-1.918-2.648 31.973 31.973 0 0 0-2.648-3.197 18.811 18.811 0 0 0-3.288-2.922 9.986 9.986 0 0 0-3.744-1.735c-.852.061-1.613.64-2.283 1.735-.609 1.096-1.126 2.557-1.552 4.384-.426 1.765-.761 3.835-1.005 6.21a98.083 98.083 0 0 0-.274 7.488c0 2.8.122 5.662.366 8.584a88.151 88.151 0 0 0 1.095 8.31c.487 2.679 1.096 5.144 1.827 7.397.791 2.192 1.674 3.988 2.648 5.388 1.461 2.192 2.192 4.018 2.192 5.48 0 .973-.305 1.765-.913 2.374-.548.547-1.309.821-2.283.821h-23.744c-.974 0-1.765-.274-2.374-.822-.548-.608-.822-1.4-.822-2.374 0-1.4.791-3.166 2.374-5.296.974-1.279 1.796-2.953 2.466-5.023.67-2.07 1.218-4.353 1.644-6.85a62.711 62.711 0 0 0 1.004-7.853c.244-2.8.366-5.57.366-8.31 0-3.105-.122-6.058-.366-8.858-.243-2.8-.609-5.236-1.096-7.306-.791-1.948-2.07-3.348-3.835-4.2-1.766-.914-3.683-1.37-5.753-1.37-1.401 0-2.801.213-4.201.639a12.437 12.437 0 0 0-3.653 1.644 8.742 8.742 0 0 0-2.648 2.74c-.67 1.034-1.005 2.222-1.005 3.56 0 .975.244 1.766.731 2.375.487.548 1.096 1.035 1.826 1.461.731.366 1.522.73 2.375 1.096a8.61 8.61 0 0 1 2.465 1.279c.731.487 1.34 1.156 1.827 2.009.487.791.73 1.857.73 3.196 0 1.461-.274 2.74-.822 3.835a8.376 8.376 0 0 1-2.191 2.649c-.853.73-1.888 1.278-3.105 1.644a12.066 12.066 0 0 1-3.653.547c-1.522 0-3.014-.243-4.475-.73-1.522-.487-2.861-1.218-4.018-2.192a11.758 11.758 0 0 1-2.922-3.744C358.365 28.005 358 26.24 358 24.23c0-2.922.609-5.722 1.826-8.401 1.157-2.74 2.923-5.145 5.297-7.214 2.313-2.07 5.205-3.714 8.675-4.932 3.532-1.278 7.611-1.917 12.237-1.917l12.877.09ZM470.188 51.9c-2.131 4.567-4.901 8.19-8.311 10.868-3.348 2.618-7.61 3.927-12.784 3.927-3.349 0-6.545-.518-9.589-1.553-3.044-1.035-5.723-2.557-8.036-4.566-2.314-2.009-4.171-4.475-5.571-7.397-1.339-2.983-2.009-6.362-2.009-10.137 0-3.774.67-7.123 2.009-10.045 1.4-2.983 3.257-5.479 5.571-7.488 2.313-2.01 4.992-3.531 8.036-4.566 3.044-1.035 6.24-1.553 9.589-1.553 3.044 0 5.692.335 7.944 1.005 2.253.609 4.11 1.461 5.571 2.557 1.461 1.096 2.557 2.374 3.288 3.835a10.282 10.282 0 0 1 1.095 4.658c0 2.983-1.765 6.18-5.296 9.588-3.47 3.349-8.919 6.94-16.347 10.776a15.34 15.34 0 0 0 4.384 2.923c1.644.67 3.47 1.004 5.479 1.004s4.109-.487 6.301-1.461c2.253-1.035 4.079-2.74 5.479-5.114.183-.365.487-.548.914-.548.608 0 1.217.365 1.826 1.096.67.67.822 1.4.457 2.192Zm-27.671-3.378c3.958-2.74 6.697-5.419 8.219-8.036 1.583-2.618 2.375-5.023 2.375-7.215 0-1.34-.244-2.557-.731-3.653-.426-1.095-1.004-2.04-1.735-2.83a6.915 6.915 0 0 0-2.374-1.827c-.853-.487-1.735-.73-2.649-.73-2.496 0-4.322 1.034-5.479 3.104-1.157 2.07-1.735 4.566-1.735 7.489 0 2.252.335 4.596 1.004 7.031a22.96 22.96 0 0 0 3.105 6.667ZM519.143 51.81c-2.009 4.565-4.718 8.188-8.127 10.866-3.349 2.68-7.61 4.019-12.785 4.019-3.348 0-6.545-.518-9.589-1.553-3.044-1.035-5.723-2.557-8.036-4.566-2.313-2.009-4.17-4.475-5.571-7.397-1.339-2.983-2.009-6.362-2.009-10.137 0-3.774.67-7.123 2.009-10.045 1.401-2.983 3.258-5.479 5.571-7.488 2.313-2.01 4.992-3.531 8.036-4.566 3.044-1.035 6.241-1.553 9.589-1.553 3.044 0 5.692.366 7.945 1.096 2.252.67 4.14 1.583 5.662 2.74 1.522 1.096 2.648 2.344 3.379 3.744.791 1.4 1.187 2.77 1.187 4.11 0 1.4-.244 2.648-.731 3.744a8.454 8.454 0 0 1-1.918 2.648 7.834 7.834 0 0 1-2.739 1.644 8.517 8.517 0 0 1-3.014.548c-1.765 0-3.379-.579-4.84-1.735-1.4-1.157-2.161-2.953-2.283-5.388a18.441 18.441 0 0 0-.456-3.197c-.183-1.095-.518-2.04-1.005-2.83a4.688 4.688 0 0 0-1.918-2.01c-.791-.487-1.856-.73-3.196-.73-2.192 0-3.835 1.035-4.931 3.105-1.096 2.07-1.644 4.566-1.644 7.488 0 2.314.335 4.749 1.005 7.306a27.458 27.458 0 0 0 3.104 6.94 18.118 18.118 0 0 0 5.206 5.114c2.07 1.34 4.474 2.01 7.214 2.01 2.07 0 4.201-.488 6.393-1.462 2.252-.974 4.048-2.648 5.387-5.023.183-.304.488-.456.914-.456.669 0 1.309.274 1.917.822.609.548.701 1.278.274 2.191ZM522.358 57.38c1.096-1.279 2.04-2.922 2.831-4.931.852-2.01 1.553-4.232 2.101-6.667a62.884 62.884 0 0 0 1.187-7.762c.304-2.74.456-5.449.456-8.128 0-2.374-.121-4.657-.365-6.849-.244-2.191-.609-4.17-1.096-5.936-.426-1.826-1.004-3.409-1.735-4.748-.67-1.34-1.461-2.314-2.374-2.923-1.522-.913-2.283-1.948-2.283-3.104 0-.67.213-1.218.639-1.644.426-.487 1.004-.7 1.735-.64 3.775 0 7.062-.243 9.863-.73 2.8-.487 5.54-1.096 8.219-1.826.426-.122.791-.214 1.095-.274.366-.061.701-.092 1.005-.092 1.278 0 2.161.457 2.648 1.37.548.913.639 2.192.274 3.836a141.724 141.724 0 0 0-2.192 11.963 130.698 130.698 0 0 0-1.095 11.597c.73-1.339 1.674-2.617 2.831-3.835a18.456 18.456 0 0 1 3.926-3.288 19.843 19.843 0 0 1 5.023-2.283c1.887-.608 3.896-.913 6.027-.913 3.227 0 5.845.396 7.854 1.187 2.07.792 3.683 1.888 4.84 3.288a10.47 10.47 0 0 1 2.465 4.657c.487 1.705.731 3.531.731 5.48 0 2.252-.244 4.535-.731 6.848-.487 2.314-.73 4.566-.73 6.758 0 1.766.274 3.47.822 5.114.609 1.644 1.765 3.196 3.47 4.657.791.67 1.4 1.462 1.826 2.375.487.913.731 1.796.731 2.648 0 .974-.304 1.766-.913 2.375-.548.547-1.309.821-2.283.821h-23.744c-.974 0-1.765-.274-2.374-.822-.548-.608-.822-1.43-.822-2.465 0-1.705.852-3.318 2.557-4.84 1.035-.974 1.948-2.131 2.74-3.47a27.103 27.103 0 0 0 2.009-4.475 26.523 26.523 0 0 0 1.187-4.931c.304-1.705.457-3.38.457-5.023 0-1.644-.153-3.227-.457-4.749-.304-1.522-.792-2.861-1.461-4.018-.67-1.157-1.522-2.07-2.557-2.74-1.035-.67-2.253-1.004-3.653-1.004-1.096 0-2.222.304-3.379.913-1.096.61-2.1 1.461-3.013 2.557-.914 1.035-1.675 2.314-2.284 3.836-.608 1.46-.974 3.074-1.095 4.84.182 4.018.639 7.549 1.369 10.593.731 3.044 1.766 5.449 3.105 7.214 1.522 2.07 2.283 3.866 2.283 5.388 0 .974-.304 1.766-.913 2.375-.548.547-1.278.821-2.192.821h-23.834c-.974 0-1.735-.274-2.283-.822-.548-.608-.822-1.4-.822-2.374 0-1.644.791-3.379 2.374-5.205Z" />
              </g>
              <path
                fill="#8C3B34"
                d="M200.072 93.696a22.748 22.748 0 0 0-3.597-1.595c-1.199-.42-2.328-.63-3.388-.63-1.31 0-2.342.266-3.095.798-.753.532-1.129 1.33-1.129 2.393 0 .727.279 1.385.837 1.973.585.56 1.324 1.063 2.216 1.51.92.448 1.868.854 2.844 1.218.893.336 1.771.742 2.635 1.217a9.115 9.115 0 0 1 2.384 1.721c.697.672 1.255 1.525 1.673 2.561.419 1.007.628 2.252.628 3.736a8.317 8.317 0 0 1-1.213 4.365c-.809 1.343-1.994 2.435-3.555 3.274-1.562.812-3.486 1.217-5.772 1.217-1.171 0-2.37-.112-3.597-.335a20.774 20.774 0 0 1-3.555-1.092 19.264 19.264 0 0 1-3.388-1.889l2.677-4.743a16.315 16.315 0 0 0 2.342 1.427c.864.392 1.729.7 2.593.924.864.224 1.659.335 2.384.335.725 0 1.45-.097 2.175-.293.753-.224 1.366-.588 1.84-1.092.502-.503.753-1.203.753-2.098 0-.616-.209-1.176-.627-1.679-.391-.504-.934-.966-1.631-1.386a12.701 12.701 0 0 0-2.217-1.091 42.398 42.398 0 0 1-2.928-1.259 16.426 16.426 0 0 1-2.844-1.721 8.654 8.654 0 0 1-2.133-2.56c-.53-1.036-.795-2.295-.795-3.778 0-1.791.391-3.345 1.171-4.66.809-1.315 1.938-2.35 3.388-3.106 1.45-.784 3.123-1.217 5.019-1.301 2.482 0 4.489.294 6.023.881 1.561.588 2.956 1.287 4.182 2.099l-2.3 4.66ZM205.635 107.716c0-1.875.432-3.554 1.297-5.037.892-1.483 2.133-2.644 3.722-3.484 1.589-.867 3.416-1.301 5.479-1.301 2.091 0 3.904.434 5.437 1.301 1.534.84 2.705 2.001 3.514 3.484.836 1.483 1.254 3.162 1.254 5.037s-.418 3.568-1.254 5.079c-.809 1.483-1.98 2.658-3.514 3.526-1.533.867-3.374 1.301-5.521 1.301-2.007 0-3.806-.392-5.395-1.175a8.84 8.84 0 0 1-3.681-3.4c-.892-1.483-1.338-3.26-1.338-5.331Zm5.897.042c0 .951.196 1.819.586 2.602.39.756.92 1.358 1.589 1.805a3.968 3.968 0 0 0 2.259.672c.92 0 1.715-.224 2.384-.672a4.42 4.42 0 0 0 1.547-1.805c.363-.783.544-1.651.544-2.602 0-.979-.181-1.847-.544-2.602a4.42 4.42 0 0 0-1.547-1.805c-.669-.448-1.464-.672-2.384-.672-.837 0-1.59.224-2.259.672a4.737 4.737 0 0 0-1.589 1.805c-.39.755-.586 1.623-.586 2.602ZM246.468 115.481c-.809.644-1.826 1.162-3.053 1.554a11.42 11.42 0 0 1-3.555.587c-2.092 0-3.918-.378-5.479-1.133-1.534-.784-2.733-1.889-3.597-3.316-.837-1.455-1.255-3.204-1.255-5.247 0-2.043.46-3.778 1.38-5.205.92-1.455 2.119-2.561 3.597-3.316a10.407 10.407 0 0 1 4.726-1.133c1.645 0 3.067.224 4.266.671 1.227.448 2.273 1.036 3.137 1.763l-2.844 3.778c-.39-.308-.934-.616-1.631-.924-.669-.335-1.464-.503-2.384-.503-.809 0-1.547.21-2.217.629a4.503 4.503 0 0 0-1.589 1.721c-.39.728-.586 1.567-.586 2.519 0 .895.21 1.721.628 2.476.418.756.99 1.358 1.715 1.805.753.42 1.631.63 2.635.63.641 0 1.226-.084 1.756-.252a4.387 4.387 0 0 0 1.422-.797l2.928 3.693ZM250.965 98.775h5.855v18.344h-5.855V98.775Zm-.126-6.506c0-.867.335-1.58 1.004-2.14.697-.56 1.436-.84 2.217-.84.781 0 1.492.28 2.133.84.669.56 1.004 1.273 1.004 2.14 0 .868-.335 1.581-1.004 2.14-.641.533-1.352.798-2.133.798-.781 0-1.52-.265-2.217-.797-.669-.56-1.004-1.273-1.004-2.14ZM270.546 117.622c-1.701 0-3.248-.336-4.642-1.007-1.367-.7-2.454-1.763-3.263-3.19-.808-1.427-1.213-3.246-1.213-5.457 0-2.071.419-3.862 1.255-5.373.837-1.511 1.938-2.672 3.304-3.484 1.367-.84 2.817-1.26 4.35-1.26 1.813 0 3.179.309 4.099.924.948.588 1.729 1.246 2.342 1.973l-.251.714.544-2.687h5.437v18.344h-5.855v-3.988l.46 1.259c-.056 0-.223.168-.502.504-.279.308-.697.685-1.255 1.133-.53.42-1.199.784-2.007 1.092-.781.335-1.715.503-2.803.503Zm1.673-4.785c.697 0 1.325-.098 1.882-.294a4.646 4.646 0 0 0 1.464-.923 5.94 5.94 0 0 0 1.088-1.553v-4.492a3.943 3.943 0 0 0-1.004-1.553 4.286 4.286 0 0 0-1.589-1.007c-.614-.252-1.297-.378-2.05-.378-.836 0-1.617.224-2.342.672a4.614 4.614 0 0 0-1.673 1.763c-.418.755-.627 1.623-.627 2.602 0 .979.223 1.861.669 2.645a5.069 5.069 0 0 0 1.756 1.846 4.665 4.665 0 0 0 2.426.672ZM288.542 84h5.855v33.119h-5.855V84ZM338.078 114.558c-.335.28-.962.658-1.882 1.133-.893.476-1.994.896-3.305 1.26-1.31.363-2.76.531-4.349.503-2.426-.056-4.601-.489-6.525-1.301-1.896-.839-3.513-1.973-4.852-3.4a15.044 15.044 0 0 1-3.011-4.911c-.697-1.847-1.046-3.82-1.046-5.919 0-2.35.349-4.505 1.046-6.464.725-1.959 1.743-3.652 3.053-5.079a13.957 13.957 0 0 1 4.768-3.316c1.841-.783 3.876-1.175 6.107-1.175 2.063 0 3.889.28 5.479.84 1.589.56 2.886 1.16 3.889 1.804l-2.384 5.75c-.697-.53-1.631-1.076-2.802-1.636-1.143-.588-2.468-.882-3.973-.882a7.972 7.972 0 0 0-3.388.756 8.797 8.797 0 0 0-2.844 2.057c-.809.895-1.45 1.945-1.924 3.148-.474 1.175-.711 2.462-.711 3.862 0 1.483.209 2.84.627 4.071.446 1.232 1.074 2.295 1.882 3.19a8.41 8.41 0 0 0 2.886 2.015c1.144.476 2.426.714 3.848.714 1.645 0 3.053-.266 4.224-.798 1.172-.531 2.064-1.091 2.677-1.679l2.51 5.457ZM343.191 84h5.856v33.119h-5.856V84ZM360.974 118c-1.645 0-3.025-.504-4.14-1.511-1.116-1.036-1.701-2.365-1.757-3.988V98.775h5.856v11.544c.055.811.265 1.469.627 1.972.362.476.976.714 1.84.714.865 0 1.604-.294 2.217-.882.641-.587 1.129-1.385 1.464-2.392.362-1.036.544-2.197.544-3.484v-7.472h5.855v18.344h-5.312l-.46-3.359.084.378a7.916 7.916 0 0 1-1.589 2.015c-.642.588-1.409 1.035-2.301 1.343-.864.336-1.84.504-2.928.504ZM391.506 117.622c-1.534 0-2.83-.252-3.89-.755a9.833 9.833 0 0 1-2.718-2.057l.46-1.259v3.568h-5.856V84h5.814v17.923-1.888c.725-.616 1.687-1.134 2.886-1.553 1.199-.42 2.565-.63 4.098-.63 1.59 0 3.04.378 4.35 1.133 1.311.756 2.356 1.861 3.137 3.316.809 1.427 1.213 3.176 1.213 5.247 0 2.071-.446 3.862-1.338 5.373-.865 1.511-2.022 2.672-3.472 3.484a9.44 9.44 0 0 1-4.684 1.217Zm-1.297-4.953c.865 0 1.659-.224 2.384-.671a4.97 4.97 0 0 0 1.799-1.847c.446-.784.669-1.665.669-2.645 0-.979-.223-1.847-.669-2.602a4.728 4.728 0 0 0-1.799-1.763 4.447 4.447 0 0 0-2.384-.672 6 6 0 0 0-2.133.378 4.637 4.637 0 0 0-1.673 1.007c-.446.42-.794.938-1.045 1.553v4.492a6.129 6.129 0 0 0 1.171 1.553 5.48 5.48 0 0 0 1.631.923c.613.196 1.296.294 2.049.294Z"
              />
              <defs>
                <filter
                  id="a"
                  width="341.982"
                  height="86.641"
                  x="0"
                  y="2"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.631373 0 0 0 0 0.027451 0 0 0 1 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_12"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_12"
                    result="shape"
                  />
                </filter>
                <filter
                  id="b"
                  width="224.356"
                  height="71.695"
                  x="358"
                  y="0"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.631373 0 0 0 0 0.027451 0 0 0 1 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_12"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_12"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Flex>

          <Button
            as="a"
            textColor="white"
            borderRadius={"3xl"}
            _hover={{ bg: "#173BC6", cursor: "pointer" }}
            _active={{ bg: "#173BC6" }}
            backgroundColor="#3559e3"
            href="https://denvertechsocial.club"
          >
            Check it out
          </Button>
        </Box>
      </Box>
      <Box
        marginTop={{ base: "4", xl: "4" }}
        padding={{ base: "5", xl: "16" }}
        color="white"
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        borderRadius="2xl"
        backgroundColor="blue.500"
      >
        <Flex flexWrap="wrap" flexDirection={{ base: "column", xl: "row" }}>
          <Stack flex="auto" maxWidth="container.md" spacing="6">
            <Heading as="h2" fontSize={{ base: "32px", xl: "64px" }} size="lg">
              Connecting the developer community of Denver
            </Heading>
            <Box maxWidth="66ch" marginTop="8">
              <Text fontSize={{ base: "md", lg: "xl" }}>
                Denver Devs is an online Discord community for software
                engineers &#38; developers in the Denver
                <Text as="sup" color="whiteAlpha.700">
                  *
                </Text>{" "}
                area. We&apos;ve been around since 2015, and we&apos;re always
                excited to see new faces. We have a job board to help folks get
                hired &#38; other channels about all kinds of things to help you
                make connections, ranging from various coding languages,
                hobbies, career growth, and much more.
              </Text>
              <Text
                paddingTop={{ base: "0", xl: "2" }}
                color="whiteAlpha.700"
                fontSize="md"
              >
                * and surrounding areas, or remote!
              </Text>
            </Box>
            <Spacer />
            <Box display={{ base: "none", xl: "block" }} marginTop="auto">
              <Heading marginBottom="2" color="whiteAlpha.600" size="xs">
                Built with:
              </Heading>
              <HStack>
                <Box>
                  <Icon as={SiNextdotjs} boxSize="24px" opacity="0.7" />
                </Box>
                <Box>
                  <Icon as={SiChakraui} boxSize="24px" opacity="0.7" />
                </Box>

                <Box>
                  <Icon as={SiNetlify} boxSize="24px" opacity="0.7" />
                </Box>
              </HStack>
            </Box>
          </Stack>
          <Grid
            flex="1"
            gridGap={6}
            gridAutoFlow={{ base: "row", lg: "column", xl: "row" }}
            marginTop={{ base: "4", xl: "0" }}
            marginLeft={{ base: "0", xl: "10" }}
          >
            <Box
              padding={{ base: "4", lg: "8" }}
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
              // background="blackAlpha.50"
            >
              <Heading marginBottom="2" size="md">
                Join us on Discord
              </Heading>
              <Text marginBottom="3">
                Discord is where we all chat and hang out. All you need to do is
                grab an invite, so what are you waiting for?
              </Text>
              <Link
                _hover={{ textDecoration: "none" }}
                href="https://discord.gg/denver-devs"
                isExternal
              >
                <Button
                  borderColor="whiteAlpha.400"
                  _hover={{ backgroundColor: "blackAlpha.600" }}
                  backgroundColor="whiteAlpha.200"
                  leftIcon={<FaDiscord />}
                  onClick={() => handleInviteGA()}
                  variant="outline"
                >
                  Get an invite
                </Button>
              </Link>
            </Box>
            <Box
              padding={{ base: "4", lg: "8" }}
              background="blackAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
            >
              <Heading marginBottom="2" size="md">
                We launched a Job Board!
              </Heading>
              <Text marginBottom="3">
                Check out our brand new free Job Board app (in beta).
              </Text>
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                href="/jobs/"
              >
                <Button
                  borderColor="whiteAlpha.400"
                  _hover={{
                    backgroundColor: "blackAlpha.600",
                    borderColor: "blackAlpha.700",
                  }}
                  backgroundColor="whiteAlpha.200"
                  leftIcon={<FaRocket />}
                  variant="outline"
                >
                  Job Board Launch
                </Button>
              </Link>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}
