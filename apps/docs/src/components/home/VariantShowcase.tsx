"use client";

import { classed } from "@tw-classed/react";
import type React from "react";
import { useRef } from "react";
import { Snippet, useSnippetSwitcher } from "@/components/SnippetSwitcher";
import { Text } from "@/components/ui";
import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/ScrollArea";

type Props = {
  children: React.ReactNode;
};

export const Features = classed("section", "gap-3 grid grid-cols-1 mt-4");

export const Feature = classed(
  "button",
  "rounded-lg p-3 border-2 border-transparent text-left space-y-1 transition-all duration-300",
  "hover:bg-radix-slate4 hover:-translate-y-1",
  {
    variants: {
      active: {
        true: "border-radix-violet8 !bg-transparent",
      },
    },
  }
);

export const FeatureTitle = classed(Text, {
  defaultProps: {
    size: "large",
    weight: "medium",
  },
});

export const FeatureDescription = classed(Text, {
  defaultProps: {
    color: "secondary",
  },
});
const searchArray = ["variants:", "compoundVariants:", "defaultVariants:"];

const VariantShowcase = ({ children }: Props) => {
  const {
    index: active,
    setIndex: setActive,
    child,
  } = useSnippetSwitcher(children);
  const ref = useRef<HTMLDivElement>(null);

  const handleActive = (active: number) => {
    // Flush sync to make sure the ref is updated
    setActive(active);

    const searchString = searchArray[active];
    // Find ref's dom node that has the search string
    if (!ref.current) return;
    const main = ref.current;

    const [elem] = Array.prototype.slice
      .call(main.getElementsByTagName("span"))
      .filter((el: HTMLElement) =>
        el.textContent?.includes(searchString)
      ) as HTMLElement[];

    scrollTo(elem, main, 0);
  };

  return (
    <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
      <div>
        <span className="bg-radix-violet3 text-radix-violet11 px-1 font-medium rounded-sm text-lg">
          Variants
        </span>
        <Text variant="title">
          Turbocharge your development speed with variants
        </Text>
        <Features>
          <Feature onClick={() => handleActive(0)} active={active === 0}>
            <Text size="large" weight="medium">
              Variants
            </Text>
            <Text color="secondary">
              Variants allow you to create multiple versions of the same
              component
            </Text>
          </Feature>
          <Feature onClick={() => handleActive(1)} active={active === 1}>
            <Text size="large" weight="medium">
              Compound variants
            </Text>
            <Text color="secondary">
              Automatically toggle classes when a combination of variants are
              active
            </Text>
          </Feature>
          <Feature onClick={() => handleActive(2)} active={active === 2}>
            <Text size="large" weight="medium">
              Default variants
            </Text>
            <Text color="secondary">
              Set default variants for your components to reduce boilerplate
            </Text>
          </Feature>
        </Features>
      </div>
      {/* <Snippet ref={ref} className="md:mt-16 md:max-h-[70vh] md:overflow-auto">
        {child}
      </Snippet> */}
      <ScrollArea className="md:mt-16 md:max-h-[70vh] p-3 rounded-lg">
        <ScrollAreaViewport ref={ref}>{child}</ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </div>
  );
};

export default VariantShowcase;

function scrollTo(elem: HTMLElement, reference: HTMLElement, offset: number) {
  const elementPosition = elem.offsetTop;
  reference.scrollTo({
    top: elementPosition - 20,
    behavior: "smooth",
  });
}
