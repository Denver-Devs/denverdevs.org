import { supabase } from "@/lib/supabase/";
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TextPageHeader from "./TextPageHeader";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setImageUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("users")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setImageUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("users").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box mt="20" maxWidth="80ch" margin="auto">
      <TextPageHeader text="Update your profile" />
      <Stack spacing="6" mt="4" paddingY="4">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="text" value={session.user.email} disabled />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="username">Name</FormLabel>
          <Input id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="website">Company or personal Website</FormLabel>
          <Input id="website" type="website" value={website || ""} onChange={(e) => setWebsite(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="website">How are you affiliated with the company you&apos;re posting for?</FormLabel>
          <Input id="website" type="website" value={website || ""} onChange={(e) => setWebsite(e.target.value)} />
        </FormControl>

        <Button onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>
          {loading ? "Loading ..." : "Update"}
        </Button>

        <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
      </Stack>
    </Box>
  );
}
