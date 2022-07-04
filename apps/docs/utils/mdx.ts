import fs from "fs/promises";
import path from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import rehypePrism from "rehype-prism-plus";
import type { Frontmatter } from "types/frontmatter";
import sharp from "sharp";
import unixify from "unixify";
import withTOC from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import rehypeSlug from "rehype-slug";

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = async (fromPath: string) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = await glob(unixify(`${PATH}/**/*.mdx`));

  return Promise.all(
    paths.map(async (filePath) => {
      const file = path.join(filePath);
      const source = await fs.readFile(file, "utf8");
      const stat = await fs.stat(file);
      const { data, content } = matter(source);

      return {
        ...(data as Frontmatter),
        publishedAt: data.publishedAt
          ? stringToDate(data.publishedAt).toISOString()
          : null,
        slug: path.basename(filePath).replace(".mdx", ""), // file name without extension
        wordCount: content.split(/\s+/g).length,
        readingTime: readingTime(content),
        modified: stat.mtimeMs,
        created: stat.birthtimeMs,
      } as Frontmatter;
    })
  );
};

export interface MDXResponse {
  frontmatter: Frontmatter;
  code: string;
}

export const getMdxBySlug = async (
  basePath: string,
  slug: string
): Promise<MDXResponse> => {
  const source = await fs.readFile(
    path.join(DATA_PATH, basePath, `${slug}.mdx`),
    "utf8"
  );

  const { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeSlug,
        withTOC,
        [withTocExport, { name: "toc" }],
      ];

      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      publishedAt: frontmatter.publishedAt
        ? stringToDate(frontmatter.publishedAt).toISOString()
        : null,
      slug,
      wordCount: code.split(/\s+/g).length,
      readingTime: readingTime(code),
    } as Frontmatter,
    code,
  };
};

export const getBlurDataURL = async (url: string) => {
  let source: string | Buffer;
  if (url.startsWith("http")) {
    source = Buffer.from(await (await fetch(url)).arrayBuffer());
  } else {
    source = path.join(ROOT_PATH, "public", url);
  }

  const image = await sharp(source)
    .resize(16, 9, {
      fit: "cover",
    })
    .jpeg()
    .toBuffer();

  return bufferToDataURL(image);
};

const bufferToDataURL = (buffer: Buffer) => {
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
};

const stringToDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/");
  return new Date([month, day, year].join("/"));
};

export const mdxCache = {
  list: async (): Promise<Frontmatter[] | undefined> => {
    try {
      const cache = await fs.readFile(path.join(DATA_PATH, "posts.db"), "utf8");
      return (JSON.parse(cache) as Frontmatter[]) ?? undefined;
    } catch (error) {
      return undefined;
    }
  },
  set: async (data: Frontmatter[]) => {
    return await fs.writeFile(
      path.join(DATA_PATH, "posts.db"),
      JSON.stringify(data)
    );
  },
};

export const findRelatedPosts = async (slug: string, limit = 3) => {
  const posts = (await mdxCache.list()) ?? (await getAllFrontmatter(""));
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return [];
  }

  const relatedPosts = posts
    .filter(
      (p) => p.slug !== slug && p.tags?.some((t) => post.tags?.includes(t))
    )
    .sort((a, b) => {
      const aTags = new Set(a.tags ?? []);
      const bTags = new Set(b.tags ?? []);
      const intersection: Set<any> = new Set(
        [...aTags].filter((x) => bTags.has(x))
      );
      return intersection.size;
    })
    .slice(0, limit);

  return relatedPosts;
};
