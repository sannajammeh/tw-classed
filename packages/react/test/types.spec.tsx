import React, { forwardRef } from "react";
import { assertType, expectTypeOf } from "vitest";
import { classed } from "../index";
import {
  ClassedComponentType,
  DerivedComponentType,
  VariantProps,
} from "../src/types";

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

  expectTypeOf(button).toMatchTypeOf<JSX.Element>();
});

test("DerivedComponentType -> Should successfully infer the type of the component", () => {
  const InnerButton = classed("button", {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
      },
    },
  });

  interface ButtonProps extends React.ComponentProps<typeof InnerButton> {
    icon?: React.ReactNode;
  }

  type Variants = VariantProps<typeof InnerButton>;

  const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ icon, ...rest }, ref) => {
      return (
        <InnerButton ref={ref} {...rest}>
          {icon}
        </InnerButton>
      );
    }
  ) as DerivedComponentType<typeof InnerButton, ButtonProps>;

  const button = <Button as="a" href="/" size="sm" />;

  expectTypeOf(button).toMatchTypeOf<JSX.Element>();

  assertType<ClassedComponentType<typeof InnerButton, ButtonProps>>(Button);

  // @ts-expect-error - Value of type 'number' is not assignable to type '"sm" | "md"'
  assertType(<Button size={1} />);

  // @ts-expect-error - Value of type 'xl' is not assignable to type '"sm" | "md"'
  assertType(<Button size="xl" />);

  assertType<true>(
    expectTypeOf<Variants["size"]>().toEqualTypeOf<
      React.ComponentProps<typeof Button>["size"]
    >()
  );
});
