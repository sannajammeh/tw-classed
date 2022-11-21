import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";
/**
 * SkipNavLink
 *
 * Renders a link that remains hidden until focused to skip to the main content.
 *
 * @see Docs https://reach.tech/skip-nav#skipnavlink
 */
declare const SkipNavLink: Polymorphic.ForwardRefComponent<"a", SkipNavLinkProps>;
/**
 * @see Docs https://reach.tech/skip-nav#skipnavlink-props
 */
interface SkipNavLinkProps {
    /**
     * Allows you to change the text for your preferred phrase or localization.
     *
     * @see Docs https://reach.tech/skip-nav#skipnavlink-children
     */
    children?: React.ReactNode;
    /**
     * An alternative ID for `SkipNavContent`. If used, the same value must be
     * provided to the `id` prop in `SkipNavContent`.
     *
     * @see Docs https://reach.tech/skip-nav#skipnavlink-contentid
     */
    contentId?: string;
}
/**
 * SkipNavContent
 *
 * Renders a div as the target for the link.
 *
 * @see Docs https://reach.tech/skip-nav#skipnavcontent
 */
declare const SkipNavContent: Polymorphic.ForwardRefComponent<"div", SkipNavContentProps>;
/**
 * @see Docs https://reach.tech/skip-nav#skipnavcontent-props
 */
interface SkipNavContentProps {
    /**
     * You can place the `SkipNavContent` element as a sibling to your main
     * content or as a wrapper.
     *
     * Keep in mind it renders a `div`, so it may mess with your CSS depending on
     * where it’s placed.
     *
     * @example
     *   <SkipNavContent />
     *   <YourMainContent />
     *   // vs.
     *   <SkipNavContent>
     *     <YourMainContent/>
     *   </SkipNavContent>
     *
     * @see Docs https://reach.tech/skip-nav#skipnavcontent-children
     */
    children?: React.ReactNode;
    /**
     * An alternative ID. If used, the same value must be provided to the
     * `contentId` prop in `SkipNavLink`.
     *
     * @see Docs https://reach.tech/skip-nav#skipnavcontent-id
     */
    id?: string;
}
export type { SkipNavContentProps, SkipNavLinkProps };
export { SkipNavLink, SkipNavContent };
