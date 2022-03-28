import { Circle, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

const RuleListItem = ({ count, children }) => {
  return (
    <LinkBox
      as="ListItem"
      sx={{ scrollMarginBlockStart: "120px" }}
      alignItems={"flex-start"}
      display="flex"
      fontSize="lg"
      borderColor={"whiteAlpha.300"}
      borderBottom="1px dashed"
      _last={{ borderBottom: "none", pb: "0" }}
      id={`rule-${count}`}
      paddingBottom="4"
    >
      <Circle
        marginRight="4"
        marginLeft={["-38px", "-40px"]}
        color="white"
        bgGradient="linear(to-br, #2756A5, #7C1D22)"
        size={["30px", "32px"]}
      >
        <Text fontSize={["lg", "xl"]} fontWeight="extrabold">
          {count}
        </Text>
      </Circle>

      <LinkOverlay href={`#rule-${count}`}>{children}</LinkOverlay>
    </LinkBox>
  );
};

export default RuleListItem;
