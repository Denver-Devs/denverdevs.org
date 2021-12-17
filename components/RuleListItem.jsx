import { Circle, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

const RuleListItem = ({ count, children }) => {
  return (
    <LinkBox
      as="ListItem"
      display="flex"
      alignItems="center"
      fontSize="lg"
      id={`rule-${count}`}
      sx={{ scrollMarginBlockStart: "120px" }}
    >
      <Circle size="40px" bgGradient="linear(to-br, #2756A5, #7C1D22)" mr="4" color="white">
        <Text fontWeight="extrabold" fontSize="2xl">
          {count}
        </Text>
      </Circle>

      <LinkOverlay href="#rule-2">{children}</LinkOverlay>
    </LinkBox>
  );
};

export default RuleListItem;
