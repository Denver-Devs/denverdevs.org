import { Container, Fade, Flex } from "@chakra-ui/react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children, route }) => {
  return (
    <>
      <Header />
      <Flex flexDirection="column" minHeight="101vh">
        <Fade key={route} in={true}>
          <Container
            as="main"
            maxWidth={"container.xl"}
            marginTop={{ base: "20", xl: "0" }}
          >
            {children}
          </Container>
        </Fade>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
