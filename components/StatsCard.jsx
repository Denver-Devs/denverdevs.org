import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function StatsCard(props) {
  const { title, stat, icon } = props;
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Stat
      height={"100%"}
      padding={{ base: "5" }}
      background={backgroundColor}
      borderWidth="1px"
      borderTopRadius="lg"
      borderBottomRadius={"lg"}
      transitionDuration="0.2s"
      transitionProperty="background-color"
    >
      <Flex justifyContent={"space-between"}>
        <Box>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          alignContent={"center"}
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
