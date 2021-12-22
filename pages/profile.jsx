import Account from "@/components/Account";
import Auth from "@/components/Auth";
import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/lib/supabase/";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useUserContext();

  console.log("USER", user);

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return <div>{!user ? <Auth /> : <Account key={session.user.id} session={session} />} </div>;
}
