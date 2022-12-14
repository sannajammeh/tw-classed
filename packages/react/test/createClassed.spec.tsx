import { describe, expect, it } from "vitest";
import { createClassed } from "../src/classed";
import { render, screen } from "./test.utils";
import React from "react";

describe("CreateClassed", () => {
  it("should work", () => {
    const { classed } = createClassed();

    expect(classed).toBeDefined();

    const Comp = classed("div", {
      base: "bg-red-500",
      variants: {
        color: {
          red: "bg-red-500",
          blue: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "red",
      },
    });

    expect(Comp).toBeDefined();

    render(<Comp data-testid="a" />);

    expect(screen.getByTestId("a")).toHaveClass("bg-red-500");

    render(<Comp data-testid="b" color="blue" />);
    expect(screen.getByTestId("b")).toHaveClass("bg-blue-500");
  });

  it("should work with proxy", () => {
    const { classed } = createClassed();

    const Comp = classed.div({
      base: "bg-red-500",
      variants: {
        color: {
          red: "bg-red-500",
          blue: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "red",
      },
    });

    expect(Comp).toBeDefined();

    render(<Comp data-testid="a" />);

    expect(screen.getByTestId("a")).toHaveClass("bg-red-500");

    render(<Comp data-testid="b" color="blue" />);
    expect(screen.getByTestId("b")).toHaveClass("bg-blue-500");
  });
});

describe("createClassed with config", () => {
  it("Should accept a custom merger", () => {
    const merger = (...args: string[]) => args.join("$_TEST_$"); // Test symbol to see if merger is works
    const { classed } = createClassed({ merger });

    const Comp = classed("div", {
      base: "bg-red-500",
      variants: {
        color: {
          red: "bg-red-500",
          blue: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "red",
      },
    });

    expect(Comp).toBeDefined();

    render(<Comp data-testid="a" />);

    const className = screen.getByTestId("a").className;

    expect(className).toContain("$_TEST_$");

    const classNameSplit = className.split("$_TEST_$");

    expect(classNameSplit).toHaveLength(3);
    expect(classNameSplit).toContain("bg-red-500");
  });

  it("Should accept an advanced merger", () => {
    const merger = (...args: string[]) => {
      const cache = new Map<string, string>();
      const result = args.reduce((acc, arg) => {
        if (cache.has(arg)) {
          return acc;
        }

        cache.set(arg, arg);

        return acc + " " + arg;
      }, "");

      return result.trim();
    };

    const { classed } = createClassed({ merger });

    const Comp = classed("div", {
      base: "bg-red-500",
      variants: {
        color: {
          red: "bg-red-500",
          blue: "bg-blue-500",
        },
      },

      defaultVariants: {
        color: "red",
      },
    });

    expect(Comp).toBeDefined();

    render(<Comp data-testid="a" />);

    const className = screen.getByTestId("a").className;

    expect(className).toContain("bg-red-500");

    // Should only have one bg-red-500
    expect(className.split("bg-red-500")).toHaveLength(2);
  });

  it("Should work with merger removing newlines", () => {
    const myMerger = (...args: string[]) => {
      const classes = args.filter(Boolean).join(" ");

      return classes.replace(/\s{2,}/g, " ");
    };

    const { classed } = createClassed({
      merger: myMerger,
    });

    const Comp = classed("div", {
      base: "bg-red-500",
      variants: {
        color: {
          red: `
            bg-red-500
            text-red-900
            test1
            test2
          `,
          blue: "bg-blue-500",
        },
      },
    });

    expect(Comp).toBeDefined();

    render(<Comp color="red" data-testid="a" />);

    const className = screen.getByTestId("a").className;

    expect(className).toContain("bg-red-500");

    expect(className).not.contain("\n");
  });
});
