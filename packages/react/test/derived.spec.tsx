import "@testing-library/jest-dom";
import React, { forwardRef } from "react";
import { expectTypeOf } from "vitest";
import {
  classed,
  DerivedComponentType,
  deriveClassed,
  ComponentProps,
} from "../index";
import { DERIVED_COMPONENT_SYMBOL } from "../src/deriveClassed";
import { render, screen } from "./test.utils";

it("Should work with DerivedComponentType", () => {
  const BaseText = classed("span", {
    base: "t-1",
    variants: {
      variant: {
        label1: "l-1",
      },
    },
  });

  BaseText.displayName = "Base Text";

  type TextProps = React.ComponentProps<typeof BaseText>;

  const Text = forwardRef<HTMLSpanElement, TextProps>(function Text(
    { children, ...props },
    ref
  ) {
    return (
      <BaseText {...props} ref={ref}>
        Text component: {children}
      </BaseText>
    );
  }) as DerivedComponentType<typeof BaseText, TextProps>;

  Text.displayName = "Text Wrapper";

  const BaseLabel = classed(Text, {
    base: "t-2",
  });

  BaseLabel.displayName = "Base Label";

  const Label2 = classed(BaseLabel, {
    defaultVariants: {
      variant: "label1",
    },
  });

  render(<Label2 as="a" data-testid="label2" />); // This will not be an anchor tag due to as prop being skipped
  const labelElem = screen.getByTestId("label2");

  expect(labelElem).toHaveClass("l-1");

  expect(labelElem.tagName).not.toBe("A");
});

it("Should work with automatic derive", () => {
  const BaseText = classed("span", {
    base: "t-1",
    variants: {
      variant: {
        label1: "l-1",
      },
    },
  });

  const Text = deriveClassed<typeof BaseText>(({ children, ...props }, ref) => {
    return (
      <BaseText {...props} ref={ref}>
        Text component: {children}
        <span data-testid="rendered"></span>
      </BaseText>
    );
  });

  expect(Reflect.has(Text, DERIVED_COMPONENT_SYMBOL)).toBeTruthy();

  const BaseLabel = classed(Text, {
    base: "t-2",
  });

  BaseLabel.displayName = "Base Label";

  const Label = classed(BaseLabel, {
    defaultVariants: {
      variant: "label1",
    },
  });

  render(<Label as="a" data-testid="label2" />);
  const labelElem = screen.getByTestId("label2");
  expect(labelElem).toHaveClass("l-1");
  expect(labelElem.tagName).toBe("A");

  const renderedElem = screen.getByTestId("rendered");

  expect(renderedElem).toBeInTheDocument();

  /**
   * Type testing
   */

  type LabelProps = React.ComponentProps<typeof Label>;
  expectTypeOf(Label).parameter(0).toHaveProperty("variant");

  const p: LabelProps = {} as LabelProps;

  expectTypeOf(p["variant"]).toEqualTypeOf<"label1" | undefined>();
});

it("Should have TS support for custom AS prop override", () => {
  const Button = classed("span", {
    base: "t-1",
    variants: {
      variant: {
        label1: "l-1",
      },
    },
  });
  type ButtonType = typeof Button;
  type ButtonProps = ComponentProps<ButtonType>;

  const Anchor = deriveClassed<ButtonType, ButtonProps>(
    ({ children, ...props }, ref) => {
      return (
        <Button {...props} ref={ref}>
          {children}
        </Button>
      );
    }
  );

  //@ts-expect-error - href is not a valid prop
  render(<Anchor href="/" as="button" variant="label1" data-testid="button" />);

  const anchorElem = screen.getByTestId("button");
  expect(anchorElem).toHaveClass("l-1");
  expect(anchorElem.tagName).toBe("BUTTON");

  render(<Anchor href="/" as="a" variant="label1" data-testid="anchor" />);

  const anchorElem2 = screen.getByTestId("anchor");
  expect(anchorElem2).toHaveClass("l-1");
  expect(anchorElem2.tagName).toBe("A");
});
