// import "@fontsource/comfortaa";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";

import { ChakraProvider } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import { DefaultSeo } from "next-seo";
import React, { useEffect } from "react";

import Layout from "@/components/Layout";
import { UserStateProvider } from "@/context/UserContext";
import * as ga from "@/lib/ga";
import theme from "@/styles/theme";

import nextSeoConfig from "../next-seo-config";

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
    <PlausibleProvider domain="denverdevs.org" trackOutboundLinks="true">
      <ChakraProvider theme={theme}>
        <UserStateProvider>
          <Layout route={router.route}>
            <DefaultSeo {...nextSeoConfig} />
            <Component {...pageProps} />
          </Layout>
        </UserStateProvider>
      </ChakraProvider>
    </PlausibleProvider>
  );
}
