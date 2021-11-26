import Layout from "@/components/Layout";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
// import "@fontsource/comfortaa";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";
// import "@fontsource/work-sans";

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout route={router.route}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
