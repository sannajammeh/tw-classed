/// <reference types="react" />
import { JsonLdProps } from './jsonld';
declare type Creator = {
    '@type': 'Person' | 'Organisation';
    name: string;
};
interface ImageJsonLd {
    contentUrl?: string;
    creator?: Creator;
    creditText?: string;
    copyrightNotice?: string;
    license?: string;
    acquireLicensePage?: string;
}
export interface ImageJsonLdProps extends JsonLdProps {
    images: ImageJsonLd[];
}
declare function ImageJsonLd({ keyOverride, images, ...rest }: ImageJsonLdProps): JSX.Element;
export default ImageJsonLd;
