import { Box, Button, Text } from "@chakra-ui/react";

import TextPageWrapper from "@/components/TextPageWrapper";
import * as ga from "@/lib/ga";

export default function Analytics() {
  return (
    <>
      <Text as="h2" marginBottom={2} fontSize="2xl" fontWeight="bold">
        Website Analytics via Plausible.io
      </Text>
      <Box width="100%">
        <Box
          as="iframe"
          width="100%"
          minHeight={"1700px"}
          frameBorder="0"
          loading="lazy"
          plausible-embed
          scrolling="no"
          src="https://plausible.io/share/denverdevs.org?auth=n2enwoEiWRRl_L6stKoLF&embed=true&theme=system&background=transparent"
          // style="width: 1px; min-width: 100%; height: 1600px;"
        ></Box>
        <div>
          Stats powered by{" "}
          <a
            target="_blank"
            // style="color: #4F46E5; text-decoration: underline;"
            href="https://plausible.io"
            rel="noreferrer"
          >
            Plausible Analytics
          </a>
        </div>
        <script async src="https://plausible.io/js/embed.host.js"></script>
      </Box>
    </>
  );
}
