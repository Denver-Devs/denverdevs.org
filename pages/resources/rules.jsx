import RuleListItem from "@/components/RuleListItem";
import TextPageWrapper from "@/components/TextPageWrapper";
import { Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";

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
    <TextPageWrapper headerText="Discord Sever Rules" title="Discord Server Rules">
      <Text fontSize="lg" my={["4", "8"]}>
        We have a small set of rules to help us ensure our users are engaging in safe & welcoming ways. If you
        don&apos;t understand a rule or need to report an incident, please reach out in #community-meta or send a direct
        message to @ModMail!
      </Text>
      <List spacing="6" maxWidth="80ch" borderWidth="1px" padding="6" margin="auto" borderRadius="lg">
        {rules.map((rule, index) => (
          <RuleListItem key={index} count={index + 1}>
            {rule}
          </RuleListItem>
        ))}
      </List>

      <Heading size="md" mt="8" mb="2">
        Nickname & Avatar Policy:{" "}
      </Heading>
      <Text>
        Set the values in your profile to something professional and mature while still operating safely concerning
        personal information. Ideally, you&apos;d set your Nickname to be your name or the shortened version of it. In
        addition, your profile photo should be of yourself or your company&apos;s logo. You do not have to follow these
        guidelines, though. We only ask that your profile values (Nickname, profile, bio) are safe for work and not
        offensive.
      </Text>

      <Heading size="md" mt="8" mb="2">
        Infractions & resulting action:{" "}
      </Heading>
      <Text>
        Depending on the severity of the infraction, the admin team may respond with one (or multiple) of these actions:
      </Text>
      <UnorderedList spacing="2">
        <ListItem>A public or private text warning</ListItem>
        <ListItem>Forced updates to your Nickname</ListItem>
        <ListItem>A temporary mute (time determined by severity)</ListItem>
        <ListItem>A role removal & role lockout </ListItem>
        <ListItem>A temporary server ban</ListItem>
        <ListItem>A permanent server ban</ListItem>
      </UnorderedList>

      <Heading size="md" mt="8" mb="2">
        Reporting Infractions:{" "}
      </Heading>
      <Text>
        If you see anyone engaging in behavior that goes against our rules, code of conduct, or Discords Community
        Guidelines & Terms of Service, the best thing you can do is direct message @ModMail. ModMail is an open-source
        discord bot that helps our staff - you can read more about it here: https://modmail.xyz/. We encourage using the
        ModMail bot before direct messaging an admin because the ModMail bot will go to _all_ of the staff. Use your
        best judgment on this, though.{" "}
      </Text>

      <Heading size="md" mt="8" mb="2">
        Appealing Infractions:{" "}
      </Heading>
      <Text>
        While most decisions from the admin team are final, you may appeal infractions by direct messaging @ModBot or
        emailing info@denverdevs.org.{" "}
      </Text>
    </TextPageWrapper>
  );
}
