import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { supabase } from "@/utils/lib/supabase";

import JobPostDescription from "./JobPostDescription";
import JobPostHeader from "./JobPostHeader";
import JobPostStats from "./JobPostStats";

function BrowseJobPage({ job }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {job?.title} | {job?.company} | Denver Devs
        </title>
        <meta
          name="description"
          content={`Looking for a job in Denver? ${job?.company} is hiring! Check out their job posting for a ${job?.title} on Denver Devs.`}
        />
        <meta
          property="og:title"
          content={`${job?.title} | ${job?.company} | Denver Devs`}
        />
        <meta
          property="og:description"
          content={`Looking for a job in Denver? ${job?.company} is hiring! Check out their job posting for a ${job?.title} on Denver Devs.`}
        />
        <meta property="og:image" content={job?.image} />
        <meta property="og:url" content={`https://denverdevs.org/jobs/${id}`} />
        <meta property="og:type" content="website" />
      </Head>
      <Box
        marginTop={{ base: "20", xl: "28" }}
        marginBottom={{ base: "6", xl: "20" }}
      >
        <Box marginBottom="8">
          <NextLink href="/jobs" passHref>
            <Link marginTop="auto" _hover={{ textDecoration: "none" }}>
              <Button leftIcon={<ArrowBackIcon />} size="sm" variant="ghost">
                Back to All Jobs
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box marginBottom={{ base: 8, md: 20 }}>
          <JobPostHeader job={job} />
          <JobPostStats job={job} />
          <JobPostDescription job={job} />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await supabase.from("posts").select("*").eq("id", params.id);
  const job = res.body[0];

  return {
    props: {
      job,
    },
  };
}

export async function getStaticPaths() {
  const res = await supabase.from("posts").select("*");
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: {
      id: `${post.id}`,
    },
  }));

  return { paths, fallback: false };
}

export default BrowseJobPage;
