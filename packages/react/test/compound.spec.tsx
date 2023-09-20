import "@testing-library/jest-dom";
import React from "react";
import { classed } from "../src";
import { render, screen } from "./test.utils";

it("Should apply compound variants", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    compoundVariants: [
      {
        size: "lg",
        color: "blue",
        className: "text-blue-100 font-bold",
      },
    ],
  });

  render(<Button data-testid="a" color="blue" size="lg" />);
  expect(screen.getByTestId("a")).toHaveClass("text-blue-100");

  render(<Button data-testid="b" color="red" size="lg" />);
  expect(screen.getByTestId("b")).toHaveClass("bg-red-100 text-lg");
  expect(screen.getByTestId("b")).not.toHaveClass("text-blue-100 font-bold");
});

it("Should apply compound variants using defaultVariants", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    defaultVariants: {
      color: "blue",
      size: "lg",
    },

    compoundVariants: [
      {
        size: "lg",
        color: "blue",
        className: "text-blue-100 font-bold",
      },
    ],
  });

  render(<Button data-testid="a" />);
  expect(screen.getByTestId("a")).toHaveClass("text-blue-100");

  render(<Button data-testid="b" color="red" />);
  expect(screen.getByTestId("b")).toHaveClass("bg-red-100 text-lg");
  expect(screen.getByTestId("b")).not.toHaveClass("text-blue-100 font-bold");
});

it("Should apply compound variants using defaultVariants and props", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    defaultVariants: {
      color: "blue",
    },

    compoundVariants: [
      {
        size: "lg",
        color: "blue",
        className: "text-blue-100 font-bold",
      },
    ],
  });

  render(<Button data-testid="a" size="lg" />);
  expect(screen.getByTestId("a")).toHaveClass("text-blue-100 font-bold");
});

it("Should work with array compound variants", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    compoundVariants: [
      {
        size: ["sm", "lg"],
        color: "blue",
        className: "MATCH",
      },
    ],
  });

  render(<Button data-testid="a" color="blue" size="sm" />);
  expect(screen.getByTestId("a")).toHaveClass("MATCH");

  render(<Button data-testid="b" color="blue" size="lg" />);
  expect(screen.getByTestId("b")).toHaveClass("MATCH");
});

it("Should work with array compound variants using defaultVariants", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    defaultVariants: {
      size: "sm",
      color: "blue",
    },

    compoundVariants: [
      {
        size: ["sm", "lg"],
        color: "blue",
        className: "MATCH",
      },
    ],
  });

  render(<Button data-testid="a" />);
  expect(screen.getByTestId("a")).toHaveClass("MATCH");
});

it("Should work with array compound variants using defaultVariants and props", () => {
  const Button = classed("button", {
    base: "bg-blue-100",
    variants: {
      color: {
        red: "bg-red-100",
        blue: "bg-blue-100",
      },
      size: {
        sm: "text-sm",
        lg: "text-lg",
      },
    },

    defaultVariants: {
      size: "sm",
    },

    compoundVariants: [
      {
        size: ["sm", "lg"],
        color: "blue",
        className: "MATCH",
      },
    ],
  });

  render(<Button data-testid="a" color="blue" size="lg" />);
  expect(screen.getByTestId("a")).toHaveClass("MATCH");

  render(<Button data-testid="b" color="blue" />);
  expect(screen.getByTestId("b")).toHaveClass("MATCH");
});
