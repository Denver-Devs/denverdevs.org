import { Circle, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

const RuleListItem = ({ count, children }) => {
  return (
    <LinkBox
      as="ListItem"
      display="flex"
      alignItems={"flex-start"}
      fontSize="lg"
      id={`rule-${count}`}
      sx={{ scrollMarginBlockStart: "120px" }}
      borderBottom="1px dashed"
      pb="4"
      borderColor={"whiteAlpha.300"}
      _last={{ borderBottom: "none", pb: "0" }}
    >
      <Circle
        size={["30px", "32px"]}
        ml={["-38px", "-40px"]}
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        mr="4"
        color="white"
      >
        <Text fontWeight="extrabold" fontSize={["lg", "xl"]}>
          {count}
        </Text>
      </Circle>

      <LinkOverlay href={`#rule-${count}`}>{children}</LinkOverlay>
    </LinkBox>
  );
};

export default RuleListItem;
