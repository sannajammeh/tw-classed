import { NextConfig } from 'next';
import { Heading as Heading$1 } from 'mdast';
import { ProcessorOptions } from '@mdx-js/mdx';
import { Options } from 'rehype-pretty-code';
import { GrayMatterFile } from 'gray-matter';

declare class PageMapCache {
    cache: {
        items: PageMapItem[];
        fileMap: FileMap;
    } | null;
    set(data: {
        items: PageMapItem[];
        fileMap: FileMap;
    }): void;
    clear(): void;
    get(): {
        items: PageMapItem[];
        fileMap: FileMap;
    } | null;
}

declare const META_FILENAME = "_meta.json";
declare const MARKDOWN_EXTENSIONS: readonly ["md", "mdx"];

declare type MetaFilename = typeof META_FILENAME;
declare type MarkdownExtension = typeof MARKDOWN_EXTENSIONS[number];
interface LoaderOptions extends NextraConfig {
    pageImport?: boolean;
    locales: string[];
    defaultLocale: string;
    pageMapCache: PageMapCache;
    newNextLinkBehavior?: boolean;
}
interface Folder<FileType = PageMapItem> {
    kind: 'Folder';
    name: string;
    route: string;
    children: FileType[];
}
declare type MetaJsonFile = {
    kind: 'Meta';
    locale?: string;
    data: {
        [fileName: string]: Meta;
    };
};
declare type FrontMatter = GrayMatterFile<string>['data'];
declare type Meta = string | Record<string, any>;
declare type MdxFile = {
    kind: 'MdxPage';
    name: string;
    route: string;
    locale?: string;
    frontMatter?: FrontMatter;
};
declare type MetaJsonPath = `${string}/${MetaFilename}`;
declare type MdxPath = `${string}.${MarkdownExtension}`;
declare type FileMap = {
    [jsonPath: MetaJsonPath]: MetaJsonFile;
    [mdxPath: MdxPath]: MdxFile;
};
declare type PageMapItem = Folder | MdxFile | MetaJsonFile;
declare type Page = (MdxFile | Folder<Page>) & {
    meta?: Exclude<Meta, string>;
};
declare type Heading = Heading$1 & {
    value: string;
};
declare type PageOpts = {
    filePath: string;
    route: string;
    frontMatter: FrontMatter;
    pageMap: PageMapItem[];
    title: string;
    headings: Heading[];
    hasJsxInH1?: boolean;
    timestamp?: number;
    unstable_flexsearch?: Flexsearch;
    newNextLinkBehavior?: boolean;
    readingTime?: ReadingTime;
};
declare type ReadingTime = {
    text: string;
    minutes: number;
    time: number;
    words: number;
};
declare type Theme = string;
declare type Flexsearch = boolean | {
    codeblocks: boolean;
};
declare type NextraConfig = {
    theme: Theme;
    themeConfig?: string;
    unstable_defaultShowCopyCode?: boolean;
    unstable_flexsearch?: Flexsearch;
    unstable_staticImage?: boolean;
    unstable_readingTime?: boolean;
    mdxOptions?: Pick<ProcessorOptions, 'rehypePlugins' | 'remarkPlugins'> & {
        rehypePrettyCodeOptions?: Partial<Options>;
    };
};
declare type Nextra = (...args: [NextraConfig] | [theme: Theme, themeConfig: string]) => (nextConfig: NextConfig) => NextConfig;
declare const nextra: Nextra;

export { FileMap, Folder, FrontMatter, Heading, LoaderOptions, MdxFile, MdxPath, Meta, MetaJsonFile, MetaJsonPath, Nextra, NextraConfig, Page, PageMapItem, PageOpts, ReadingTime, nextra as default };
