import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config = {
  initialColorMode: "dark",
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "ComfortaaVariable",
  body: "InterVariable",
};

const theme = extendTheme({ config, colors, fonts }, withProse());

export default theme;
