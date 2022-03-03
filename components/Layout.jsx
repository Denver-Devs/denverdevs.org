import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container, Fade, Flex } from "@chakra-ui/react";

const Layout = ({ children, route }) => {
  return (
    <>
      <Header />
      <Flex minHeight="101vh" flexDirection="column">
        <Fade in={true} key={route}>
          <Container as="main" maxW={"container.xl"} mt={{ base: "20", xl: "0" }}>
            {children}
          </Container>
        </Fade>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
