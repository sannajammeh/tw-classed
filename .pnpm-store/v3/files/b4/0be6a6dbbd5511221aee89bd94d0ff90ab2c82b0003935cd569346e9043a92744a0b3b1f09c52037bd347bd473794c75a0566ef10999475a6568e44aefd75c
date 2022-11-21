/// <reference types="react" />
import { JsonLdProps } from './jsonld';
import { ArticleAuthor } from 'src/types';
export interface ArticleJsonLdProps extends JsonLdProps {
    type?: 'Article' | 'BlogPosting' | 'NewsArticle' | 'Blog';
    url: string;
    title: string;
    images: ReadonlyArray<string>;
    datePublished: string;
    dateModified?: string;
    authorName: string | string[] | ArticleAuthor | ArticleAuthor[];
    description: string;
    publisherName?: string;
    publisherLogo?: string;
    isAccessibleForFree?: boolean;
}
declare function ArticleJsonLd({ type, keyOverride, url, title, images, datePublished, dateModified, authorName, publisherName, publisherLogo, description, isAccessibleForFree, ...rest }: ArticleJsonLdProps): JSX.Element;
export default ArticleJsonLd;
