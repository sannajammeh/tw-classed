import React, { ReactElement, FC, ReactNode, ComponentProps } from 'react';
import { MdxFile, Heading, PageOpts } from 'nextra';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { NextSeoProps } from 'next-seo';
export { useMDXComponents } from '@mdx-js/react';
export { useTheme } from 'next-themes';

/**
 * An option to control how an item should be displayed in the sidebar:
 * - `normal`: the default behavior, item will be displayed
 * - `hidden`: the item will not be displayed in the sidebar entirely
 * - `children`: if the item is a folder, itself will be hidden but all its children will still be processed
 */
declare type Display = 'normal' | 'hidden' | 'children';
interface Item extends MdxFile {
    title: string;
    type: string;
    children?: Item[];
    display?: Display;
    withIndexPage?: boolean;
    theme?: PageTheme;
    isUnderCurrentDocsTree?: boolean;
}
interface PageItem extends MdxFile {
    title: string;
    type: string;
    href?: string;
    newWindow?: boolean;
    children?: PageItem[];
    firstChildRoute?: string;
    display?: Display;
    withIndexPage?: boolean;
    isUnderCurrentDocsTree?: boolean;
}
interface MenuItem extends MdxFile {
    title: string;
    type: 'menu';
    display?: Display;
    children?: PageItem[];
    items?: Record<string, {
        title: string;
        href?: string;
        newWindow?: boolean;
    }>;
}

declare type TOCProps = {
    headings: Heading[];
    filePath: string;
};

declare type NavBarProps = {
    flatDirectories: Item[];
    items: (PageItem | MenuItem)[];
};
declare function Navbar({ flatDirectories, items }: NavBarProps): ReactElement;

declare type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends FC ? T[P] : T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
interface DocsThemeConfig {
    banner: {
        dismissible: boolean;
        key: string;
        text?: ReactNode | FC;
    };
    chat: {
        icon: ReactNode | FC;
        link?: string;
    };
    components?: Record<string, FC>;
    darkMode: boolean;
    direction: 'ltr' | 'rtl';
    docsRepositoryBase: string;
    editLink: {
        component: FC<{
            children: ReactNode;
            className?: string;
            filePath?: string;
        }>;
        text: ReactNode | FC;
    };
    faviconGlyph?: string;
    feedback: {
        content?: ReactNode | FC;
        labels?: string;
    };
    footer: {
        component: ReactNode | FC<{
            menu: boolean;
        }>;
        text: ReactNode | FC;
    };
    getNextSeoProps?: () => NextSeoProps;
    gitTimestamp: ReactNode | FC<{
        timestamp: Date;
    }>;
    head: ReactNode | FC;
    i18n: {
        direction?: string;
        locale: string;
        text: string;
    }[];
    logo: ReactNode | FC;
    logoLink?: boolean | string;
    main?: FC<{
        children: ReactNode;
    }>;
    navbar: ReactNode | FC<NavBarProps>;
    navigation: boolean | {
        next: boolean;
        prev: boolean;
    };
    nextThemes: Pick<ThemeProviderProps, 'defaultTheme' | 'storageKey' | 'forcedTheme'>;
    notFound: {
        content: ReactNode | FC;
        labels: string;
    };
    primaryHue: number | {
        dark: number;
        light: number;
    };
    project: {
        icon: ReactNode | FC;
        link?: string;
    };
    search: {
        component: ReactNode | FC<{
            className?: string;
            directories: Item[];
        }>;
        emptyResult: ReactNode | FC;
        placeholder: string | (() => string);
    };
    serverSideError: {
        content: ReactNode | FC;
        labels: string;
    };
    sidebar: {
        defaultMenuCollapseLevel: number;
        titleComponent: ReactNode | FC<{
            title: string;
            type: string;
        }>;
    };
    toc: {
        component: ReactNode | FC<TOCProps>;
        extraContent?: ReactNode | FC;
        float: boolean;
        title: ReactNode | FC;
    };
}
declare type PageTheme = {
    breadcrumb: boolean;
    collapsed: boolean;
    footer: boolean;
    layout: 'default' | 'full' | 'raw';
    navbar: boolean;
    pagination: boolean;
    sidebar: boolean;
    timestamp: boolean;
    toc: boolean;
    typesetting: 'default' | 'article';
};

declare type Config = DocsThemeConfig & Pick<PageOpts, 'unstable_flexsearch' | 'newNextLinkBehavior' | 'title' | 'frontMatter'>;
declare const useConfig: () => Config;

declare function Bleed({ full, children }: {
    full: boolean;
    children: ReactNode;
}): ReactElement;

declare const TypeToEmoji: {
    default: string;
    error: string;
    info: JSX.Element;
    warning: string;
};
declare type CalloutType = keyof typeof TypeToEmoji;
declare type CalloutProps = {
    type?: CalloutType;
    emoji?: string | ReactElement;
    children: ReactNode;
};
declare function Callout({ children, type, emoji }: CalloutProps): ReactElement;

declare function Collapse({ children, className, open }: {
    children: React.ReactNode;
    className?: string;
    open: boolean;
}): ReactElement;

declare function NotFoundPage(): ReactElement | null;

declare function ServerSideErrorPage(): ReactElement | null;

declare type TabItem = {
    label: ReactElement;
    disabled?: boolean;
};
declare function Tabs({ items, selectedIndex, defaultIndex, onChange, children }: {
    items: ReactNode[] | ReadonlyArray<ReactNode> | TabItem[];
    selectedIndex?: number;
    defaultIndex?: number;
    onChange?: (index: number) => void;
    children: ReactNode;
}): ReactElement;
declare function Tab({ children, ...props }: ComponentProps<'div'>): ReactElement;

declare type ThemeSwitchProps = {
    lite?: boolean;
};
declare function ThemeSwitch({ lite }: ThemeSwitchProps): ReactElement;

declare function Layout(props: any): ReactElement;
declare type PartialDocsThemeConfig = RecursivePartial<DocsThemeConfig>;

export { Bleed, Callout, Collapse, PartialDocsThemeConfig as DocsThemeConfig, Navbar, NotFoundPage, ServerSideErrorPage, Tab, Tabs, ThemeSwitch, Layout as default, useConfig };
