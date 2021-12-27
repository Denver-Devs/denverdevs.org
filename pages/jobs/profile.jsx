import Account from "@/components/Account";
import Auth from "@/components/Auth";
import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/lib/supabase/";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useUserContext();

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Box marginTop={["24", "32"]}>{!session ? <Auth /> : <Account key={session.user.id} session={session} />} </Box>
  );
}
