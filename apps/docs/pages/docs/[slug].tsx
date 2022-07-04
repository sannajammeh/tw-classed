import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Frontmatter } from "types/frontmatter";
import { getAllFrontmatter, getMdxBySlug } from "utils/mdx";
import { NextSeo } from "next-seo";
import { DocsEntry, getPrevAndNext } from "components/docs/pages";
import DocsPage from "components/docs/DocsPage";

interface Props {
  frontmatter: Frontmatter;
  code: string;
  prev?: DocsEntry;
  next?: DocsEntry;
}

const Docs: NextPage<Props> = ({ frontmatter, code, prev, next }) => {
  return (
    <>
      <NextSeo title={`${frontmatter.title} | Tailwind Classed Docs`} />
      <DocsPage {...{ frontmatter, code, prev, next }} />
    </>
  );
};

export default Docs;

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllFrontmatter("docs");

  return {
    paths: docs.map((doc) => ({
      params: {
        slug: doc.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const { frontmatter, code } = await getMdxBySlug("docs", slug as string);
  const { prev, next } = getPrevAndNext(slug! as string);

  return {
    props: {
      frontmatter,
      code,
      prev,
      next,
    },
  };
};
