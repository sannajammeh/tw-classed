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

export { Heading as H, LoaderOptions as L, Page as P, ReadingTime as R };
