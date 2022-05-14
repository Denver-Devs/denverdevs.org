import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { FaDollarSign } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";

import {
  formatHourlyComp,
  formatSalaryComp,
} from "@/utils/helpers/formatCompensation";

import StatsCard from "./StatsCard";

export default function JobPostStats({ job, isLoading }) {
  return (
    <SimpleGrid
      marginBottom={8}
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
    >
      <Skeleton isLoaded={!isLoading}>
        <StatsCard
          title={"Salary Range"}
          stat={
            job?.compensation_type === "hourly"
              ? formatHourlyComp(job?.compensation_min, job?.compensation_max)
              : formatSalaryComp(job?.compensation_min, job?.compensation_max)
          }
          icon={<FaDollarSign size={"3em"} />}
        />
      </Skeleton>
      <Skeleton isLoaded={!isLoading}>
        <StatsCard
          title={"Location"}
          stat={
            job?.location.length > 0 && (
              <Text textTransform="capitalize">{job?.location.join(", ")}</Text>
            )
          }
          icon={<GoLocation size={"3em"} />}
        />
      </Skeleton>
      <Skeleton isLoaded={!isLoading}>
        <StatsCard
          title={"Posted"}
          stat={format(new Date(job?.inserted_at || null), "MMM dd")}
          icon={<MdCalendarToday size={"3em"} />}
        />
      </Skeleton>
    </SimpleGrid>
  );
}
