import { supabase } from "@/lib/supabase/";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaMagic } from "react-icons/fa";

export default function Auth({ redirectPath }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(
        { email },
        {
          redirectTo: redirectPath,
        }
      );
      if (error) throw error;
      setResponse("We've sent an email to you with a link to log in.");
    } catch (error) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailClick = () => {
    ga.event({
      action: "Clicked Email Button - Auth Page",
    });
  };

  return (
    <Box
      maxWidth="80ch"
      padding="2"
      bgGradient="linear(to-br, #2756A5, #7C1D22)"
      borderRadius="lg"
      marginX="auto"
    >
      <Box
        padding="6"
        background={useColorModeValue("white", "gray.800")}
        borderRadius="md"
      >
        {response.length ? (
          <>
            <Heading>Magic Link Sent!</Heading>
            <Text marginTop="4" marginBottom="6">
              Check your inbox for an email from Denver Devs or Supabase. Not
              seeing the email? Make sure to check your spam folder, otherwise
              reach out to us if you need help.
            </Text>
            <Button
              as="a"
              aria-label="Email"
              href="mailto:info@denverdevs.org"
              leftIcon={<FaEnvelope fontSize="20px" />}
              onClick={handleEmailClick}
            >
              Get Help
            </Button>
          </>
        ) : (
          <>
            <Heading>Looks like you&apos;re not signed in.</Heading>
            <Text marginTop="4" marginBottom="6" paddingRight="4">
              Want to post a job or manage your listings? All you need to do is
              enter your email below and a magic link will be sent to you.
            </Text>
            <FormControl isInvalid={error}>
              <Input
                className="inputField"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
                value={email}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Button
              marginTop="4"
              colorScheme="gray"
              disabled={loading}
              isLoading={loading}
              leftIcon={<FaMagic />}
              loadingText="Loading"
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              variant="solid"
            >
              Send magic link
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
