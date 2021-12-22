import Account from "@/components/Account";
import Auth from "@/components/Auth";
import { supabase } from "@/lib/supabase/";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return <div>{!session ? <Auth /> : <Account key={session.user.id} session={session} />} </div>;
}
