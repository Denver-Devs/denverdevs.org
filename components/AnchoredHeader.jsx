import { Heading, Link } from "@chakra-ui/react";
import React from "react";

const AnchoredHeader = ({ anchorId, children, ...props }) => {
  return (
    <Heading
      id={anchorId}
      sx={{ scrollMarginBlockStart: "120px" }}
      {...props}
      _hover={{ "&>a": { display: "inline-block" } }}
    >
      {children}
      <Link href={`#${anchorId}`} ml="2" color="gray" display="none">
        #
      </Link>
    </Heading>
  );
};

export default AnchoredHeader;
