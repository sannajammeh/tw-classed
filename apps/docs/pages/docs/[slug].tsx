import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useMemo } from "react";
import { Frontmatter } from "types/frontmatter";
import { getAllFrontmatter, getMdxBySlug } from "utils/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { TbBrandTailwind } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { Text } from "components/ui/text";
import {
  DocsContent,
  DocsGrid,
  DocsSidebar,
  ListItem,
  SidebarList,
  SidebarSection,
} from "components/MDXLayout";
import { IconButton } from "components/ui";
import Link from "next/link";
import { NextSeo } from "next-seo";
import ThemeToggle from "components/theme-toggle";

interface Props {
  frontmatter: Frontmatter;
  code: string;
}

const DocsPage: NextPage<Props> = ({ frontmatter, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <NextSeo title={`${frontmatter.title} | Docs`} />
      <DocsGrid>
        <DocsSidebar>
          <SidebarSection className="flex items-center justify-between !my-0 px-5">
            <Link href="/" passHref>
              <Text
                as="a"
                className="flex items-center gap-1 uppercase font-medium italic"
              >
                <TbBrandTailwind size="2rem" />
                Classed
              </Text>
            </Link>
            <ThemeToggle />
          </SidebarSection>
          <SidebarSection>
            <Text className="mb-2 px-5" as="h1" size="large" weight="medium">
              Overview
            </Text>
            <nav>
              <SidebarList>
                <ListItem>
                  <Link href="/docs/installation" passHref>
                    <Text as="a">Getting started</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/docs/usage" passHref>
                    <Text as="a">Usage</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Text as="a">Variants</Text>
                </ListItem>
              </SidebarList>
            </nav>
          </SidebarSection>
        </DocsSidebar>
        <DocsContent>
          <Component />
        </DocsContent>
        <aside></aside>
      </DocsGrid>
    </>
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
