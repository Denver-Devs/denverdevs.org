import { Box, Divider, Flex, Heading, Link, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";

export default function RulesAndFaq() {
  return (
    <>
      <Head>
        <title>Code of Conduct | Denver Devs</title>
      </Head>
      <Box marginTop={{ base: "20", xl: "28" }} marginBottom={{ base: "6", xl: "20" }} maxWidth="80ch" margin="auto">
        <Flex
          borderRadius="2xl"
          backgroundColor="blue.500"
          padding={{ base: "4", xl: "8" }}
          paddingBottom={{ base: "4", xl: "6" }}
          bgGradient="linear(to-br, #2756A5, #CC6B61)"
          color="white"
          width="100%"
          flexDir={{ base: "column", md: "row" }}
        >
          <Heading as="h2" fontSize={{ base: "22px", xl: "32px" }}>
            Code of Conduct
          </Heading>
          <Spacer />
          {/* <Button
            display={{ base: "none", md: "block" }}
            variant="outline"
            backgroundColor="whiteAlpha.200"
            borderColor="whiteAlpha.400"
            _hover={{ backgroundColor: "blackAlpha.600", borderColor: "blackAlpha.700" }}
          >
            Questions? Contact us
          </Button> */}
        </Flex>
        <Box pt="8" marginX="auto" px="4">
          <article>
            <Heading as="h3" mb="2">
              Overview
            </Heading>
            <Text pb="6">
              Denver Devs is dedicated to providing a harassment-free experience for everyone, regardless of gender
              identity or expression, sexual orientation, disability, physical appearance, body size, race, age,
              religion or nonreligion. We do not tolerate harassment of participants in any form. Harassment includes
              offensive comments &amp; communication related to age, gender, sexual orientation, disability, physical
              appearance, body size, race, religion, sexual images, deliberate intimidation, stalking, sustained
              disruption of discussions or other events, and unwelcome sexual attention. If a participant engages in
              behavior that violates this code of conduct, the organizers may take any action they deem appropriate,
              including warning the offender or expulsion from the group.
            </Text>
            <Heading as="h3" mt="6" mb="2">
              Open Source Citizenship
            </Heading>
            <Text pb="6">
              A supplemental goal of this Code of Conduct is to increase open source citizenship by encouraging
              participants to recognize and strengthen the relationships between our actions and their effects on our
              community.
            </Text>
            <Text pb="6">
              Communities mirror the societies in which they exist and positive action is essential to counteract the
              many forms of inequality and abuses of power that exist in society.
            </Text>
            <Text pb="6">
              If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and
              encourages all participants to contribute to the fullest extent, we want to know.
            </Text>
            <Heading as="h3" mt="6" mb="2">
              Expected Behavior
            </Heading>
            <Text pb="4">The following behaviors are expected and requested of all community members:</Text>
            <UnorderedList spacing="2">
              <ListItem>
                Participate in an authentic and active way. In doing so, you contribute to the health and longevity of
                this community.
              </ListItem>
              <ListItem>Exercise consideration and respect in your speech and actions.</ListItem>
              <ListItem>Attempt collaboration before conflict.</ListItem>
              <ListItem>Refrain from demeaning, discriminatory, or harassing behavior and speech.</ListItem>
              <ListItem>
                Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a
                dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem
                inconsequential.
              </ListItem>
              <ListItem>
                Remember that community event venues may be shared with members of the public; please be respectful to
                all patrons of these locations.
              </ListItem>
            </UnorderedList>
            <Heading as="h3" mt="6" mb="2">
              Unacceptable Behavior
            </Heading>
            <Text pb="2">
              The following behaviors are considered harassment and are unacceptable within our community:
            </Text>
            <UnorderedList spacing="2">
              <ListItem>Violence, threats of violence or violent language directed against another person.</ListItem>
              <ListItem>
                Sexist, racist, homophobic, transphobic, ableist or otherwise discriminatory jokes and language.
              </ListItem>
              <ListItem>Posting or displaying sexually explicit or violent material.</ListItem>
              <ListItem>
                Posting or threatening to post other people’s personally identifying information (&quot;doxing&quot;).
              </ListItem>
              <ListItem>
                Personal insults, particularly those related to gender, sexual orientation, race, age,
                religion/nonreligion, or disability.
              </ListItem>
              <ListItem>Inappropriate photography or recording.</ListItem>
              <ListItem>Unwelcome sexual attention. This includes, sexualized comments or jokes.</ListItem>
              <ListItem>Deliberate intimidation, stalking or following (online or in person).</ListItem>
              <ListItem>Advocating for, or encouraging, any of the above behavior.</ListItem>
              <ListItem>
                Sustained disruption of on-topic channels. Disruption is only okay in #topic-random because anarchy.
              </ListItem>
            </UnorderedList>
            <Heading as="h3" mt="6" mb="2">
              Consequences of Unacceptable Behavior
            </Heading>
            <Text pb="6">
              Unacceptable behavior from any community member, including sponsors and those with decision-making
              authority, will not be tolerated.
            </Text>
            <Text pb="6">Anyone asked to stop unacceptable behavior is expected to comply immediately.</Text>
            <Text pb="6">
              If a community member engages in unacceptable behavior, the community organizers may take any action they
              deem appropriate, up to and including a temporary ban or permanent expulsion from the community without
              warning (and without refund in the case of a paid event).
            </Text>
            <Heading as="h3" mt="6" mb="2">
              Reporting Guidelines
            </Heading>
            <Text pb="6">
              If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a Denver
              Devs admin as soon as possible. <Link href="mailto:info@denverdevs.org">info@denverdevs.org</Link>.
            </Text>
            <Heading as="h3" mt="6" mb="2">
              Addressing Grievances
            </Heading>
            <Text pb="6">
              If you feel you have been falsely or unfairly accused of violating this Code of Conduct, you should notify
              Denver Devs admins with a concise description of your grievance. Your grievance will be handled in
              accordance with our existing governing policies.
            </Text>
            <Divider my="4" />
            <Heading as="h3" mt="6" mb="2" size="md">
              Scope
            </Heading>
            <Text pb="6">
              We expect all community participants (contributors, paid or otherwise; sponsors; and other guests) to
              abide by this Code of Conduct in all community venues–online and in-person–as well as in all one-on-one
              communications pertaining to community business.
            </Text>
            <Text pb="6">
              This code of conduct and its related procedures also applies to unacceptable behavior occurring outside
              the scope of community activities when such behavior has the potential to adversely affect the safety and
              well-being of community members.
            </Text>
            <Heading as="h3" mt="6" mb="2" size="md">
              Contact info
            </Heading>
            <Text pb="6">
              <Link href="mailto:info@denverdevs.org">info@denverdevs.org</Link>
            </Text>
            <Heading as="h3" mt="6" mb="2" size="md">
              License and attribution
            </Heading>
            <Text pb="6">
              This Code of Conduct is distributed under a{" "}
              <Link href="http://creativecommons.org/licenses/by-sa/3.0/" rel="nofollow">
                Creative Commons Attribution-ShareAlike license
              </Link>
              .
            </Text>
            <Text pb="6">
              Portions of text derived from the{" "}
              <Link href="https://www.djangoproject.com/conduct/" rel="nofollow">
                Django Code of Conduct
              </Link>{" "}
              and the{" "}
              <Link href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy" rel="nofollow">
                Geek Feminism Anti-Harassment Policy
              </Link>
              .
            </Text>
            <Text pb="6">
              Retrieved on November 22, 2016 from{" "}
              <Link href="http://citizencodeofconduct.org/" rel="nofollow">
                http://citizencodeofconduct.org/
              </Link>
            </Text>
          </article>
        </Box>
      </Box>
    </>
  );
}