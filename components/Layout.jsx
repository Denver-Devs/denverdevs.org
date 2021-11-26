import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container, Fade, Flex } from "@chakra-ui/react";
import { UserStateProvider } from "../context/UserContext";

const Layout = ({ children, route }) => {
  return (
    <UserStateProvider>
      <Header />
      <Flex minHeight="101vh" flexDirection="column">
        <Fade in={true} key={route}>
          <Container as="main" maxW={"container.xl"} mt={{ base: "12", xl: "0" }}>
            {children}
          </Container>
        </Fade>
        <Footer />
      </Flex>
    </UserStateProvider>
  );
};

export default Layout;
