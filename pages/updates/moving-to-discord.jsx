import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function RulesAndFaq() {
  return (
    <>
      <Head>
        <title>Updates: Moving to Discord | Denver Devs</title>
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
            Denver Devs has moved to Discord.
          </Heading>
          <Spacer />
        </Flex>
        <Box pt="4" px="4" marginX="auto" maxWidth="90ch">
          <article>
            <Heading size="md" mt="8" mb="2">
              Why?
            </Heading>

            <Text pb="6">
              1) Slack is reasonably not developing community-focused features because they are a business tool. Discord
              has been pivoting to building for communities and has been doing an excellent job with it. Moderation
              tools and training, community discovery, and more will help us create a safer and more engaging space.
            </Text>

            <Text pb="6">
              2) Discord has a great set of free features for communities, namely: complete chat history. Unfortunately,
              ephemerality isn't as valuable as I once thought. New users join us, only to be greeted by channels of
              nothing. One of the most requested features I hear from new users is upgrading our Slack so that they can
              see what's been happing. Welcoming someone with basically zero context and zero ability to gain that
              context is not an enjoyable experience and dramatically impacts our retention. We also have an extensive
              collection of smart people here who have given excellent advice over the years, and it's a disservice to
              everyone to lose that.{" "}
            </Text>

            <Text pb="6">
              3) Engagement in this community has been declining steadily over the last year-plus. The way we work is
              changing; managing our mental resources has changed. Slack's pace and message limit are not conducive to
              many, even most, conversations.
            </Text>

            <Text pb="6">
              There are more points to make, but that covers the core reasoning. I wholeheartedly believe this move will
              help new users and existing users alike, especially by giving us the history and context we're missing out
              on and providing more clarity around where to look & what to do. In addition, many larger communities
              exist on Discord (a lot of them developer-focused) and have already vetted it as a fantastic community
              chat tool.
            </Text>

            <Heading size="md" mt="8" mb="2">
              What will we lose?
            </Heading>

            <Text pb="6">
              Change will always come with compromises and losses in addition to improvements. We'll lose some of the
              structure and comfort we've established here over five years.{" "}
            </Text>

            <Text pb="6">
              We'll lose members in the transition, possibly many. Some will not want to install Discord for daily use
              or can't because of work machine restrictions. I respect that decision and its limitation. For those of
              you who don't know, though: Discord has a great web client; if you'd like to check it out before
              installing.{" "}
            </Text>

            <Text pb="6">
              We'll also lose our extensive (and delightfully absurd) emoji collection. Discord limits us to 250 if we
              have a fully boosted server. Worry not; I'll archive the current emojis in a GitHub repo for nostalgia's
              sake and to help you bring joy to other Slack groups.
            </Text>

            <Heading size="md" mt="8" mb="2">
              What will happen to our Slack?{" "}
            </Heading>

            <Text pb="6">
              It will still be around, but I'll put it into a "maintenance" mode. Invites won't be processed, we'll
              remove channels to prevent fragmentation, and we'll lock down permissions heavily. The admin team will
              remain available, but most of our focus will be on Discord. Anyone who would like to stay in Slack and use
              it, given those changes, will be more than welcome.
            </Text>

            <Text pb="6">
              I'm excited to nudge Denver Devs into its next chapter, and I'm so very thankful you've all been a part of
              it. Feel free to react to this post, comment in the threads, or dd-community. Also, reach out to me
              directly if you'd like or to another admin to express any thoughts or concerns you may have.{" "}
            </Text>
          </article>
        </Box>
      </Box>
    </>
  );
}
