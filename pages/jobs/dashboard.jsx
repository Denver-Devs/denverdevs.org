import Account from "@/components/Account";
import Auth from "@/components/Auth";
import JobList from "@/components/JobList";
import TextPageHeader from "@/components/TextPageHeader";
import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/lib/supabase/";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useUserContext();
  const [userEntries, setUserEntries] = useState({ data: [] });

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (user) {
      supabase.from("posts").select("*").eq("user_id", user.id).then(setUserEntries);
    }
  }, [user]);

  return (
    <Box marginTop={["24", "32"]}>
      {!session ? (
        <Auth />
      ) : (
        <Box marginTop={{ base: "20", xl: "28" }} marginBottom={{ base: "6", xl: "20" }}>
          <Box my="10">
            <TextPageHeader text="Your Dashboard" />
            <Flex direction={{ base: "column", md: "row" }} mx={{ base: "2", xl: "8" }} mt="4">
              <Box flex="auto" mr={{ base: "0", md: "10" }}>
                <Heading as="h3" fontSize="xl" my="4">
                  Your job posts
                </Heading>
                <JobList jobs={userEntries.data} />
              </Box>
              <Box flex="auto" maxW={{ base: "100%", lg: "400px" }} mb={{ base: "10", lg: "0" }} ml="8">
                <Heading as="h3" fontSize="xl" my="4">
                  Your Profile
                </Heading>
                <Account key={session.user.id} session={session} />
              </Box>
            </Flex>
          </Box>
        </Box>
      )}{" "}
    </Box>
  );
}
