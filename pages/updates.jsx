import { Badge, Box, Container, Heading, Stack } from "@chakra-ui/react";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import toDate from "date-fns/toDate";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Layout from "@/components/Layout";
import UpdateCard from "@/components/UpdateCard";

export async function getStaticProps() {
  var fs = require("fs");
  const files = fs.readdirSync("updates");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`updates/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  const postsByDate = posts.sort((a, b) => {
    // console.log(parseISO(a.frontmatter.date));
    const beforeDate = toDate(parseISO(a.frontmatter.date));
    const afterDate = toDate(parseISO(b.frontmatter.date));
    // console.log(beforeDate);
    format(new Date(a.frontmatter.date), "MMMM d, Y");
    return afterDate - beforeDate;
  });

  return (
    <>
      <Head>
        <title>Denver Devs - Updates</title>
      </Head>
      <Container marginTop={{ base: "20", xl: "28" }}>
        <Heading marginBottom="2" size="md">
          Updates
        </Heading>
        <Stack>
          {postsByDate.map(({ slug, frontmatter }) => (
            <UpdateCard
              key={slug}
              padding={{ base: "4", lg: "8" }}
              background="blackAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              borderRadius="lg"
              frontmatter={frontmatter}
              href={`/update/${slug}`}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Posts;
