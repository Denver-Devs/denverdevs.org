import AnchoredHeader from "@/components/AnchoredHeader";
import RuleListItem from "@/components/RuleListItem";
import TextPageWrapper from "@/components/TextPageWrapper";
import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function JobBoardRules() {
  const rules = [
    `You must be directly responsible for hiring or recruiting the position you are posting for, or you must work at the company you are posting for. No third party postings, or "sharing to share".`,
    `Do not post more than once per week. For example: if you posted on Friday, wait til the following Friday to post again. Do not bump posts either.`,
    `Provide as much information as possible: company name, job title, job description, requirements, etc.`,
    `Adhere to Colorado laws regarding job posting. You must provide a salary either in the text you enter in the chat, or in the actual job link itself.`,
    `Thread any questions or comments about the job posting on the post itself. Please keep comments within the thread relevant and respectful.`,
    `Use professional information on your profile: your real name, and a photo of yourself or an associated company logo`,
  ];
  return (
    <TextPageWrapper headerText="Job Channel Rules" title="Job Channel Rules">
      <Text marginTop="8" marginBottom="8" fontSize="lg">
        Our job board channel is one of the few channels with some stricter
        rules. These are in place to help keep it orderly and useful for others.
        Please do your best to respect these rules, and if you have any
        questions about them ping a mod!
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
      <Text my="4">
        Note: all other rules for any communications in Denver Devs also apply
        to any job post.
      </Text>

      <AnchoredHeader
        size="md"
        mt="8"
        mb="2"
        anchorId="infractions-and-resulting-action"
      >
        Infractions & resulting action:
      </AnchoredHeader>
      <Text>
        Depending on the severity of the infraction, the admin team may respond
        with one (or multiple) of these actions:
      </Text>
      <UnorderedList spacing="2">
        <ListItem>A public or private text warning</ListItem>
        <ListItem>A temporary mute (time determined by severity)</ListItem>
        <ListItem>A role removal & role lockout</ListItem>
        <ListItem>A temporary server ban</ListItem>
        <ListItem>A permanent server ban</ListItem>
      </UnorderedList>

      <AnchoredHeader size="md" mt="8" mb="2" anchorId="reporting-infractions">
        Reporting Infractions:{" "}
      </AnchoredHeader>
      <Text>
        If you see anyone engaging in behavior that goes against these specific
        rules, our overall rules rules, code of conduct, or Discords Community
        Guidelines & Terms of Service, the best thing you can do is direct
        message @ModMail. ModMail is an open-source discord bot that helps our
        staff - you can read more about it here: https://modmail.xyz/. We
        encourage using the ModMail bot before direct messaging an admin because
        the ModMail bot will go to _all_ of the staff. Use your best judgment on
        this, though.{" "}
      </Text>

      <AnchoredHeader size="md" mt="8" mb="2" anchorId="appealing-infractions">
        Appealing Infractions:{" "}
      </AnchoredHeader>
      <Text>
        While most decisions from the admin team are final, you may appeal
        infractions by direct messaging @ModBot or emailing info@denverdevs.org.{" "}
      </Text>
    </TextPageWrapper>
  );
}
