import { Button, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

import TextPageWrapper from "@/components/TextPageWrapper";
import * as ga from "@/lib/ga";

export default function Contact() {
  const handleEmailClick = () => {
    ga.event({
      action: "Clicked Email Button",
    });
  };
  return (
    <TextPageWrapper headerText="Contact Us" title="Contact Us">
      <Text as="h2" marginBottom={2} fontSize="2xl" fontWeight="bold">
        Reach out via email:
      </Text>
      <Text>
        For general inquiries, help, or to report an issue on Discord you can
        email us any time at info[at]denverdevs.org.
      </Text>
      <Button
        as="a"
        my={4}
        aria-label="Email"
        href="mailto:info@denverdevs.org"
        leftIcon={<FaEnvelope fontSize="20px" />}
        onClick={handleEmailClick}
      >
        Email Us
      </Button>
      <Text
        as="h2"
        marginTop={8}
        marginBottom={2}
        fontSize="2xl"
        fontWeight="bold"
      >
        Contact us on Discord:
      </Text>
      <Text>
        The best way to reach out to us on Discord is via ModMail. You can do
        this by Direct Messaging ModMail in Discord after joining th Denver Devs
        server. ModMail is an open source bot built to facilitate communication
        between members of the server and the mod team, you can read more about
        it here:{" "}
        <a href="https://modmail.xyz" target="_blank" rel="noreferrer">
          https://modmail.xyz
        </a>
      </Text>
    </TextPageWrapper>
  );
}
