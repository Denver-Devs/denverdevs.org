import { createIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

export const CircleIcon = createIcon({
  displayName: "CircleIcon",
  viewBox: "0 0 200 200",
  d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
});

export const FilterTagButton = ({ isSelected, handleSelect, name }) => {
  return (
    <Button
      borderColor={isSelected ? "gray.200" : undefined}
      leftIcon={<CircleIcon color={isSelected ? "green.300" : "gray.300"} />}
      onClick={() => handleSelect(name)}
      size="xs"
      variant="outline"
    >
      {name}
    </Button>
  );
};
