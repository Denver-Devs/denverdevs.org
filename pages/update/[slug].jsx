import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Link } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import Layout from "@/components/Layout";

export async function getStaticPaths() {
  var fs = require("fs");
  const files = fs.readdirSync("updates");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  var fs = require("fs");
  const fileName = fs.readFileSync(`updates/${slug}.mdx`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Update({ frontmatter, content }) {
  return (
    <>
      <NextSeo title={frontmatter.title} description={frontmatter.snippet} />
      <Container maxWidth={"container.md"} marginTop={{ base: "10", xl: "20" }}>
        <NextLink href="/updates" passHref>
          <Link marginTop="auto" _hover={{ textDecoration: "none" }}>
            <Button leftIcon={<ArrowBackIcon />} size="sm" variant="ghost">
              Back to All Updates
            </Button>
          </Link>
        </NextLink>
        <Prose>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </Prose>
      </Container>
    </>
  );
}
