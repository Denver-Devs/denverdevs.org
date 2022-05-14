import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Link } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { supabase } from "@/utils/lib/supabase";

import JobPostDescription from "./JobPostDescription";
import JobPostHeader from "./JobPostHeader";
import JobPostStats from "./JobPostStats";

export default function BrowseJobPage() {
  const router = useRouter();
  const { id } = router.query;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (id) {
        supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .then((response) => {
            setJob(response.body[0]);
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>
          {job?.title} | {job?.company} | Denver Devs
        </title>
        <meta name="description" content={job?.description} />
        <meta
          property="og:title"
          content={`${job?.title} | ${job?.company} | Denver Devs`}
        />
        <meta property="og:description" content={job?.description} />
        <meta property="og:image" content={job?.image} />
        <meta property="og:url" content={`https://denverdevs.org/jobs/${id}`} />
        <meta property="og:type" content="website" />
      </Head>
      <Box
        marginTop={{ base: "20", xl: "28" }}
        marginBottom={{ base: "6", xl: "20" }}
      >
        <Box marginBottom="8">
          <Link
            marginTop="auto"
            _hover={{ textDecoration: "none" }}
            href={`/jobs`}
          >
            <Button leftIcon={<ArrowBackIcon />} size="sm" variant="ghost">
              Back to All Jobs
            </Button>
          </Link>
        </Box>
        <Box marginBottom={{ base: 8, md: 20 }}>
          <JobPostHeader job={job} isLoading={loading} />
          <JobPostStats job={job} isLoading={loading} />
          <JobPostDescription job={job} isLoading={loading} />
        </Box>
      </Box>
    </>
  );
}
