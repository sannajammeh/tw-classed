export interface DocsEntry {
  slug: string;
  title: string;
}

interface DocsPages {
  [key: string]: DocsEntry[];
}

export const pages: DocsPages = {
  Overview: [
    {
      slug: "introduction",
      title: "Introduction",
    },
    {
      slug: "typescript",
      title: "TypeScript",
    },
  ],
  "Getting Started": [
    {
      slug: "installation",
      title: "Installation",
    },
    {
      slug: "variants",
      title: "Variants",
    },
  ],
};

export const getPrevAndNext = (slug: string) => {
  const flattened = Object.values(pages).flat();
  console.log(
    "🚀 ~ file: pages.ts ~ line 35 ~ getPrevAndNext ~ flattened",
    flattened
  );

  const index = flattened.findIndex((page) => page.slug === slug);
  const prev = flattened[index - 1] ?? null;
  const next = flattened[index + 1] ?? null;
  return { prev, next };
};
