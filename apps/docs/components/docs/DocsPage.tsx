import ThemeToggle from "components/theme-toggle";
import { Text } from "components/ui";
import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import React, { useMemo } from "react";
import { TbBrandTailwind } from "react-icons/tb";
import { Frontmatter } from "types/frontmatter";
import {
  DocsGrid,
  DocsSidebar,
  SidebarContent,
  SidebarSection,
  SidebarList,
  ListItem,
  DocsContent,
} from "./MDXLayout";
import { DocsEntry, pages } from "./pages";

type Props = {
  frontmatter: Frontmatter;
  code: string;
  prev?: DocsEntry;
  next?: DocsEntry;
};

const DocsPage = ({ frontmatter, code, prev, next }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <DocsGrid>
      <DocsSidebar>
        <SidebarContent>
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
            <nav>
              {Object.entries(pages).map(([name, page]) => (
                <div key={name}>
                  <Text
                    className="mb-2 px-5"
                    as="p"
                    size="large"
                    weight="medium"
                  >
                    {name}
                  </Text>
                  <SidebarList className="mb-8">
                    {page.map((entry) => (
                      <ListItem key={entry.title} href={`/docs/${entry.slug}`}>
                        {entry.title}
                      </ListItem>
                    ))}
                  </SidebarList>
                </div>
              ))}
            </nav>
          </SidebarSection>
        </SidebarContent>
      </DocsSidebar>
      <DocsContent>
        <Text as="h1" className="!mb-0">
          {frontmatter.title}
        </Text>
        <Text as="p" className="!mt-0 !mb-16 !text-2xl" color="secondary">
          {frontmatter.description}
        </Text>
        <Component />
        <div className="flex items-center justify-between not-prose mt-16">
          {prev && (
            <div>
              <Text color="secondary">Previous</Text>
              <Link passHref href={`/docs/${prev.slug}`}>
                <Text as="a" size="xlarge" color="primary">
                  {prev.title}
                </Text>
              </Link>
            </div>
          )}
          {next && (
            <div>
              <Text color="secondary">Next</Text>
              <Link passHref href={`/docs/${next.slug}`}>
                <Text as="a" size="xlarge" color="primary">
                  {next.title}
                </Text>
              </Link>
            </div>
          )}
        </div>
      </DocsContent>
      <aside></aside>
    </DocsGrid>
  );
};

export default DocsPage;
