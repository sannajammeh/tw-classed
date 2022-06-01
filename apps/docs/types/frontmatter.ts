export type Frontmatter = {
  title: string;
  description?: string;
  by?: string;
  publishedAt?: string;
  relatedIds?: string[];
  type?: "changelog" | string;
  readingTime?: { text: string; minutes: number; time: number; words: number };
  poster?: string;
  slug: string;
  mainImage: string;
  modified: number;
  created: number;
  tags?: string[];
  docsCategory?: string | string[];
};
