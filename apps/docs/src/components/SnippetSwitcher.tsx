"use client";

import { classed } from "@tw-classed/react";
import type React from "react";
import {
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  useState,
} from "react";
import { flushSync } from "react-dom";

type Props = {
  index: number;
  children: React.ReactNode;
};

const SnippetSwitcher = ({ index, children }: Props) => {
  const childs = useMemo(() => Children.toArray(children), [children]);

  return <div>{childs[index]}</div>;
};

export default SnippetSwitcher;

export function useSnippetSwitcher(
  children: React.ReactNode,
  { fadeIn = false } = {}
) {
  const childs = useMemo(() => Children.toArray(children), [children]);
  const [index, _setIndex] = useState(0);
  const setIndex: typeof _setIndex = (...args) => {
    // Flush this to make sure dom is updated ahead of time
    flushSync(() => {
      _setIndex(...args);
    });
  };

  const child = useMemo(() => {
    const child = childs[index];
    if (!isValidElement(child)) return child;

    if (!fadeIn) return child;

    const childClone = cloneElement(child, {
      ...(child.props as { className?: string }),
      className: `${
        // biome-ignore lint/suspicious/noExplicitAny: <Ignoring types here>
        (child.props as any).className || ""
      } fadeIn`,
    } as React.HTMLAttributes<HTMLElement>);
    return childClone;
  }, [index, childs, fadeIn]);

  return { index, setIndex, childs, child };
}

export const Snippet = classed("div", "bg-radix-slate1 p-3 rounded-lg");
