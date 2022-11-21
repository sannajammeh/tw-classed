import { expect, it } from "vitest";
import { classed } from "../src/classed";

it("Should apply compound variants", () => {
  const button = classed("button", {
    base: "bg-blue-500",
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      color: {
        red: "text-red-500",
        blue: "text-blue-500",
        green: "text-green-500",
      },
    },
    compoundVariants: [
      {
        size: "lg",
        color: "red",
        className: "bg-red-500",
      },
    ],
  });

  expect(button({ size: "lg", color: "red" })).toContain("bg-red-500");

  expect(button({ size: "lg", color: "blue" })).not.toContain("bg-red-500");
});

it("Should apply compound variants with default variants", () => {
  const button = classed("button", {
    base: "bg-blue-500",
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      color: {
        red: "text-red-500",
        blue: "text-blue-500",
        green: "text-green-500",
      },
    },
    defaultVariants: {
      size: "lg",
      color: "red",
    },
    compoundVariants: [
      {
        size: "lg",
        color: "red",
        className: "bg-red-500",
      },
    ],
  });

  expect(button()).toContain("bg-red-500");

  expect(button({ size: "lg", color: "blue" })).not.toContain("bg-red-500");
});

it("Should apply compound variants with default variants and custom variants", () => {
  const button = classed("button", {
    base: "bg-blue-500",
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      color: {
        red: "text-red-500",
        blue: "text-blue-500",
        green: "text-green-500",
      },
    },
    defaultVariants: {
      size: "lg",
      color: "red",
    },
    compoundVariants: [
      {
        size: "lg",
        color: "red",
        className: "bg-red-500",
      },
      {
        size: "sm",
        color: "blue",
        className: "bg-blue-500",
      },
    ],
  });

  expect(button({ size: "md" })).not.toContain("bg-red-500");

  expect(button({ size: "sm", color: "blue" })).toContain("bg-blue-500");
});
