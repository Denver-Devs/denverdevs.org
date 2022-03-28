import TextPageWrapper from "@/components/TextPageWrapper";
import { Heading, Text } from "@chakra-ui/react";

export default function RulesAndFaq() {
  return (
    <TextPageWrapper headerText="We Launched a Job Board!" title="We Launched a Job Board!">
      <Heading size="md" mt="8" mb="2">
        After years of &quot;what ifs&quot; and a few months of development: we&apos;ve finally launched a job board!
      </Heading>

      <Text pb="6">
        I&apos;ve been kicking around the idea of a job board app for a few years now, but never felt like I was in the
        right space to build it. Timing, cost, value — all of these were factors that got in the way. With the move to
        Discord, and shifting the Denver Devs website to Next.js, the task of building new features for the community
        just got easier.
      </Text>

      <Text pb="6">
        So with that, it&apos;s here, it&apos;s live, and best of all it&apos;s free and will stay free. You can
        navigate to it via the header. A few features of note: it uses magic link login, adding a job is super easy:
        just provide the link, and a few details and we&apos;ll review it, if it&apos;s approved, you&apos;ll see it in
        no time!
      </Text>

      <Text pb="6">
        The tech stack is fairly simple: React, Next.js, Supabase, and Chakra UI. I&apos;ve been using Chakra UI for a
        few months now, and really like it. It offloads some cognitive overhead when it comes to styling and
        consistency. We&apos;re also hosted on Netlify, so the site is blazing fast.
      </Text>

      <Text pb="6">
        The job board will be in a public &quot;beta&quot; for a bit as we get more users on, folks get more familiar
        with it, and we iron out any kinks that are likely to pop up. I&apos;m excited to see what the community has to
        say about it, and where it might go.
      </Text>

      <Text pb="6">
        Thanks! <br />
        Dan H.
      </Text>
    </TextPageWrapper>
  );
}
