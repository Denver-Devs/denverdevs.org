import { SimpleGrid, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { FaDollarSign } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";

import StatsCard from "@/components/StatsCard";
import {
  formatHourlyComp,
  formatSalaryComp,
} from "@/utils/helpers/formatCompensation";

export default function JobPostStats({ job }) {
  return (
    <SimpleGrid
      marginBottom={8}
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
    >
      <StatsCard
        title={"Salary Range"}
        stat={
          job?.compensation_type === "hourly"
            ? formatHourlyComp(job?.compensation_min, job?.compensation_max)
            : formatSalaryComp(job?.compensation_min, job?.compensation_max)
        }
        icon={<FaDollarSign size={"3em"} />}
      />
      <StatsCard
        title={"Location"}
        stat={
          job?.location.length > 0 && (
            <Text textTransform="capitalize">{job?.location.join(", ")}</Text>
          )
        }
        icon={<GoLocation size={"3em"} />}
      />
      <StatsCard
        title={"Posted"}
        stat={format(new Date(job?.inserted_at || null), "MMM dd")}
        icon={<MdCalendarToday size={"3em"} />}
      />
    </SimpleGrid>
  );
}
