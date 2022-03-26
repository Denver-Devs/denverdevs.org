import TextPageWrapper from "@/components/TextPageWrapper";
import { Heading, Text } from "@chakra-ui/react";

export default function RulesAndFaq() {
  return (
    <TextPageWrapper headerText="Moving to Discord" title="Moving to Discord">
      <Heading marginTop="8" marginBottom="2" size="md">
        Why?
      </Heading>

      <Text paddingBottom="6">
        1) Slack is reasonably not developing community-focused features because
        they are a business tool. Discord has been pivoting to building for
        communities and has been doing an excellent job with it. Moderation
        tools and training, community discovery, and more will help us create a
        safer and more engaging space.
      </Text>

      <Text paddingBottom="6">
        2) Discord has a great set of free features for communities, namely:
        complete chat history. Unfortunately, ephemerality isn&apos;t as
        valuable as I once thought. New users join us, only to be greeted by
        channels of nothing. One of the most requested features I hear from new
        users is upgrading our Slack so that they can see what&apos;s been
        happing. Welcoming someone with basically zero context and zero ability
        to gain that context is not an enjoyable experience and dramatically
        impacts our retention. We also have an extensive collection of smart
        people here who have given excellent advice over the years, and
        it&apos;s a disservice to everyone to lose that.{" "}
      </Text>

      <Text paddingBottom="6">
        3) Engagement in this community has been declining steadily over the
        last year-plus. The way we work is changing; managing our mental
        resources has changed. Slack&apos;s pace and message limit are not
        conducive to many, even most, conversations.
      </Text>

      <Text paddingBottom="6">
        There are more points to make, but that covers the core reasoning. I
        wholeheartedly believe this move will help new users and existing users
        alike, especially by giving us the history and context we&apos;re
        missing out on and providing more clarity around where to look & what to
        do. In addition, many larger communities exist on Discord (a lot of them
        developer-focused) and have already vetted it as a fantastic community
        chat tool.
      </Text>

      <Heading marginTop="8" marginBottom="2" size="md">
        What will we lose?
      </Heading>

      <Text paddingBottom="6">
        Change will always come with compromises and losses in addition to
        improvements. We&apos;ll lose some of the structure and comfort
        we&apos;ve established here over five years.{" "}
      </Text>

      <Text paddingBottom="6">
        We&apos;ll lose members in the transition, possibly many. Some will not
        want to install Discord for daily use or can&apos;t because of work
        machine restrictions. I respect that decision and its limitation. For
        those of you who don&apos;t know, though: Discord has a great web
        client; if you&apos;d like to check it out before installing.{" "}
      </Text>

      <Text paddingBottom="6">
        We&apos;ll also lose our extensive (and delightfully absurd) emoji
        collection. Discord limits us to 250 if we have a fully boosted server.
        Worry not; I&apos;ll archive the current emojis in a GitHub repo for
        nostalgia&apos;s sake and to help you bring joy to other Slack groups.
      </Text>

      <Heading marginTop="8" marginBottom="2" size="md">
        What will happen to our Slack?{" "}
      </Heading>

      <Text paddingBottom="6">
        It will still be around, but I&apos;ll put it into a
        &quo;maintenance&quo; mode. Invites won&apos;t be processed, we&apos;ll
        remove channels to prevent fragmentation, and we&apos;ll lock down
        permissions heavily. The admin team will remain available, but most of
        our focus will be on Discord. Anyone who would like to stay in Slack and
        use it, given those changes, will be more than welcome.
      </Text>

      <Text paddingBottom="6">
        I&apos;m excited to nudge Denver Devs into its next chapter, and
        I&apos;m so very thankful you&apos;ve all been a part of it. Feel free
        to react to this post, comment in the threads, or dd-community. Also,
        reach out to me directly if you&apos;d like or to another admin to
        express any thoughts or concerns you may have.{" "}
      </Text>
    </TextPageWrapper>
  );
}
