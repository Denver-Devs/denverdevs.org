import { Heading, Link } from "@chakra-ui/react";
import React from "react";

const AnchoredHeader = ({ anchorId, children, ...props }) => {
  return (
    <Heading
      sx={{ scrollMarginBlockStart: "120px" }}
      id={anchorId}
      {...props}
      _hover={{ "&>a": { display: "inline-block" } }}
    >
      {children}
      <Link display="none" marginLeft="2" color="gray" href={`#${anchorId}`}>
        #
      </Link>
    </Heading>
  );
};

export default AnchoredHeader;
