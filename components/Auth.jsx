import { supabase } from "@/lib/supabase/";
import { Box, Button, FormControl, FormErrorMessage, Heading, Input, Text, useColorModeValue } from "@chakra-ui/react";
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
    <Box maxW="80ch" marginX="auto" bgGradient="linear(to-br, #2756A5, #7C1D22)" borderRadius="lg" padding="2">
      <Box bg={useColorModeValue("white", "gray.800")} padding="6" borderRadius="md">
        {response.length ? (
          <>
            <Heading>Magic Link Sent!</Heading>
            <Text mt="4" mb="6">
              Check your inbox for an email from Denver Devs or Supabase. Not seeing the email? Make sure to check your
              spam folder, otherwise reach out to us if you need help.
            </Text>
            <Button
              as="a"
              href="mailto:info@denverdevs.org"
              aria-label="Email"
              onClick={handleEmailClick}
              leftIcon={<FaEnvelope fontSize="20px" />}
            >
              Get Help
            </Button>
          </>
        ) : (
          <>
            <Heading>Looks like you&apos;re not signed in.</Heading>
            <Text mt="4" mb="6" pr="4">
              Want to post a job, manage your listings, or update your profile? All you need to do is enter your email
              below, and a magic link will be sent to you.
            </Text>
            <FormControl isInvalid={error}>
              <Input
                className="inputField"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Button
              leftIcon={<FaMagic />}
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              colorScheme="gray"
              variant="solid"
              disabled={loading}
              loadingText="Loading"
              isLoading={loading}
              mt="4"
            >
              Send magic link
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
