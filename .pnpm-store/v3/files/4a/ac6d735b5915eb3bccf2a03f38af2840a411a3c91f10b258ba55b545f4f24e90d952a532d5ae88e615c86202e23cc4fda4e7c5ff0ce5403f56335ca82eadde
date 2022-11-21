import { L as LoaderOptions, R as ReadingTime, H as Heading } from './types-d1403d59.js';
import { ProcessorOptions } from '@mdx-js/mdx';
import 'mdast';
import 'rehype-pretty-code';
import 'gray-matter';

declare function compileMdx(source: string, loaderOptions?: Pick<LoaderOptions, 'unstable_staticImage' | 'unstable_flexsearch' | 'unstable_defaultShowCopyCode' | 'unstable_readingTime'> & {
    mdxOptions?: LoaderOptions['mdxOptions'] & Pick<ProcessorOptions, 'jsx' | 'outputFormat'>;
}, filePath?: string): Promise<{
    structurizedData: any;
    readingTime?: ReadingTime | undefined;
    headings: Heading[];
    hasJsxInH1?: boolean | undefined;
    result: string;
}>;

export { compileMdx };
