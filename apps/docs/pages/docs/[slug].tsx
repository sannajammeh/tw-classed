import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useMemo } from "react";
import { Frontmatter } from "types/frontmatter";
import { getAllFrontmatter, getMdxBySlug } from "utils/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import classed from "tw-classed";
import { TbBrandTailwind } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { Text } from "components/ui/text";

interface Props {
  frontmatter: Frontmatter;
  code: string;
}

const Grid = classed("div", "grid grid-cols-[250px,1fr,_250px] min-h-screen");

const Sidebar = classed("aside", "border-r p-5");

const DocsPage: NextPage<Props> = ({ frontmatter, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Grid>
      <Sidebar>
        <section className="flex items-center justify-between">
          <TbBrandTailwind size="2rem" />
          <FiSun size="1.25rem" />
        </section>
        <section>
          <Text>Hello</Text>
        </section>
      </Sidebar>
      <main className="mx-auto mt-16 prose dark:prose-invert w-full">
        <Component />
      </main>
      <aside></aside>
    </Grid>
  );
};

export default DocsPage;

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

  return {
    props: {
      frontmatter,
      code,
    },
  };
};
