import Layout from "@/components/Layout";
import { UserStateProvider } from "@/context/UserContext";
import * as ga from "@/lib/ga";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
// import "@fontsource/comfortaa";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";
import React, { useEffect } from "react";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ChakraProvider theme={theme}>
      <UserStateProvider>
        <Layout route={router.route}>
          <Component {...pageProps} />
        </Layout>
      </UserStateProvider>
    </ChakraProvider>
  );
}
