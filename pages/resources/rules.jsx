import TextPageWrapper from "@/components/TextPageWrapper";
import { Circle, Heading, Link, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextLink } from "next/link";
export default function RulesAndFaq() {
  return (
    <TextPageWrapper headerText="Discord Sever Rules" title="Discord Server Rules">
      <Text fontSize="lg" mb="8" mt="8">
        We have a small set of rules to help us ensure our users are engaging in safe & welcoming ways. If you
        don&apos;t understand a rule or need to report an incident, please reach out in #community-meta or send a direct
        message to @ModMail!
      </Text>
      <List spacing="6" maxWidth="80ch" borderWidth="1px" padding="6" margin="auto" borderRadius="lg">
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              1
            </Text>
          </Circle>
          Follow the&nbsp;
          <Link to="/resources/code-of-conduct" as={NextLink}>
            Denver Devs Code of Conduct
          </Link>
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              2
            </Text>
          </Circle>
          Follow the Discord Community Guidelines and Terms of Service.
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              3
            </Text>
          </Circle>
          Respect all members of this community, including staff and their instructions.{" "}
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              4
            </Text>
          </Circle>
          Do not harass, stalk, intimidate, or threaten any member of this community. We have a zero-tolerance policy
          for harassment.
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              5
            </Text>
          </Circle>
          Do not engage in or encourage toxic behavior: useless negativity, rudeness, insults, elitism,
          &quot;well-actuallys,&quot; micro-aggressions, and the like.
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              6
            </Text>
          </Circle>
          Keep all channels &quot;Safe For Work.&quot;
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              7
            </Text>
          </Circle>
          Do not spam. Spamming includes sharing the same post in multiple channels, direct messaging members about your
          company or product, and putting advertisements in the wrong places.
        </ListItem>
        <ListItem display="flex" alignItems="center" fontSize="lg">
          <Circle size="40px" bgGradient="linear(to-br, #5A88D8, #7C1D22)" mr="4" color="white">
            <Text fontWeight="extrabold" fontSize="2xl">
              8
            </Text>
          </Circle>
          Respect channel topics, and keep conversations in the right channel.
        </ListItem>
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
