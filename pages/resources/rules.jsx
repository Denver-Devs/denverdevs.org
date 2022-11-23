import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import RuleListItem from "@/components/RuleListItem";
import TextPageWrapper from "@/components/TextPageWrapper";

export default function RulesAndFaq() {
  const rules = [
    `Follow the Denver Devs Code of Conduct`,
    `Follow the Discord Community Guidelines and Terms of Service.`,
    `Respect all members of this community, including staff and their instructions.`,
    `Do not harass, stalk, intimidate, or threaten any member of this community. We have a zero-tolerance policy for harassment.`,
    `Do not engage in or encourage toxic behavior: useless negativity, rudeness, insults, elitism, "well-actuallys", micro-aggressions, and the like.`,
    `Keep all channels "Safe For Work".`,
    `Do not spam. Spamming includes sharing the same post in multiple channels, direct messaging members about your company or product, and putting advertisements in the wrong places.`,
    `Respect channel topics, and keep conversations in the right channel.`,
  ];
  return (
    <TextPageWrapper
      headerText="Discord Server Rules"
      title="Discord Server Rules"
    >
      <Text my={["4", "8"]} fontSize="lg">
        We have a small set of rules to help us ensure our users are engaging in
        safe & welcoming ways. If you don&apos;t understand a rule or need to
        report an incident, please reach out in #community-meta or send a direct
        message to @ModMail!
      </Text>
      <List
        maxWidth="80ch"
        margin="auto"
        padding="6"
        borderWidth="1px"
        borderRadius="lg"
        spacing="6"
      >
        {rules.map((rule, index) => (
          <RuleListItem key={index} count={index + 1}>
            {rule}
          </RuleListItem>
        ))}
      </List>

      <Heading marginTop="8" marginBottom="2" size="md">
        Nickname & Avatar Policy:{" "}
      </Heading>
      <Text marginBottom="4">
        With the exception of people posting “hiring” posts to the job-board
        channel we’d like you to present yourself on our Discord server how you
        feel most comfortable via your Nickname, Avatar, and personal bio. You
        must avoid any content that is offensive or not safe for work (nudity,
        violence, certain contentious imagery or subjects) and you cannot
        imitate other users or Denver Devs staff. Our response to this will be
        dependent on the nature of the issue.
      </Text>
      <Box>
        <Heading marginBottom="2" size="sm">
          Some guidelines we encourage you to consider and may ask you to abide
          by:
        </Heading>
        <UnorderedList>
          <ListItem>
            Keep your Nickname friendly, respectful, easily readable, and easily
            mentionable (some symbols can be difficult to find and type).
          </ListItem>
          <ListItem>
            If you’re comfortable use your real name, and a photo of yourself! A
            lot of our users do.
          </ListItem>
          <ListItem>
            You can update your nickname and avatar at any time, but try to not
            confuse others with too many changes.
          </ListItem>
        </UnorderedList>
      </Box>

      <Heading marginTop="8" marginBottom="2" size="md">
        Infractions & resulting action:{" "}
      </Heading>
      <Text>
        Depending on the severity of the infraction, the admin team may respond
        with one (or multiple) of these actions:
      </Text>
      <UnorderedList spacing="2">
        <ListItem>A public or private text warning</ListItem>
        <ListItem>Forced updates to your Nickname</ListItem>
        <ListItem>A temporary mute (time determined by severity)</ListItem>
        <ListItem>A role removal & role lockout </ListItem>
        <ListItem>A temporary server ban</ListItem>
        <ListItem>A permanent server ban</ListItem>
      </UnorderedList>

      <Heading marginTop="8" marginBottom="2" size="md">
        Reporting Infractions:{" "}
      </Heading>
      <Text>
        If you see anyone engaging in behavior that goes against our rules, code
        of conduct, or Discords Community Guidelines & Terms of Service, the
        best thing you can do is direct message @ModMail. ModMail is an
        open-source discord bot that helps our staff - you can read more about
        it here: https://modmail.xyz/. We encourage using the ModMail bot before
        direct messaging an admin because the ModMail bot will go to _all_ of
        the staff. Use your best judgment on this, though.{" "}
      </Text>

      <Heading marginTop="8" marginBottom="2" size="md">
        Appealing Infractions:{" "}
      </Heading>
      <Text>
        While most decisions from the admin team are final, you may appeal
        infractions by direct messaging @ModBot or emailing info@denverdevs.org.{" "}
      </Text>
    </TextPageWrapper>
  );
}
