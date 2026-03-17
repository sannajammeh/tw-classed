import React from "react";
import { expectTypeOf } from "vitest";
import { classed, $$ClassedProps, $$ClassedVariants } from "../src/index";

test("It Should create a JSX Element", () => {
  const Button = classed("button", {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
  });

  const button = <Button size="sm" />;

  expectTypeOf(button).toMatchTypeOf<React.JSX.Element>();
});

test("Should support render prop for intrinsic elements", () => {
  const Button = classed("button", {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
      },
    },
  });

  // render prop should be available for intrinsic elements
  const element = <Button size="sm" render={<a href="/" />} />;

  expectTypeOf(element).toMatchTypeOf<React.JSX.Element>();
});

test("Should export $$ClassedProps and $$ClassedVariants symbols for declaration emit", () => {
  const Button = classed("button", {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
      },
    },
  });

  // Symbols must be value-exported so consumers can generate declaration files
  // without TS4023 "cannot be named" errors
  expectTypeOf($$ClassedProps).toBeSymbol();
  expectTypeOf($$ClassedVariants).toBeSymbol();

  // Classed components should have the symbol keys in their type
  expectTypeOf<(typeof Button)[typeof $$ClassedProps]>().toBeObject();
  expectTypeOf<(typeof Button)[typeof $$ClassedVariants]>().toBeObject();
});

test("Should properly type variant props", () => {
  const Button = classed("button", {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
      },
    },
  });

  // @ts-expect-error - Value of type 'number' is not assignable to type '"sm" | "md"'
  <Button size={1} />;

  // @ts-expect-error - Value of type 'xl' is not assignable to type '"sm" | "md"'
  <Button size="xl" />;
});
