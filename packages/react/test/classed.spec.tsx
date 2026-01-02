import "@testing-library/jest-dom";
import React from "react";
import { describe, expectTypeOf } from "vitest";
import { classed } from "../src/index";
import { render, screen } from "./test.utils";
import { $$ClassedVariants } from "@tw-classed/core";

describe("Classed", () => {
  it("Should render dom element", () => {
    const Button = classed("button");

    render(<Button data-testid="btn" />);

    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });

  it("Should render dom element with class", () => {
    const Button = classed("button");

    render(<Button className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("test");
  });

  it("Should render dom element with classed classNames", () => {
    const Button = classed("button", "bg-blue-500");

    render(<Button data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500");
  });

  it("Should render dom element with classed classNames and class", () => {
    const Button = classed("button", "bg-blue-500");

    render(<Button className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500 test");
  });

  it("Should render correct dom element", () => {
    const Anchor = classed("a");

    render(<Anchor href="#" data-testid="anchor" />);

    expect(screen.getByTestId("anchor")).toHaveAttribute("href", "#");
    expect(screen.getByTestId("anchor")).toBeInstanceOf(HTMLAnchorElement);
  });

  it("Should render correct props to DOM", () => {
    const Button = classed("button");

    render(<Button data-testid="btn" disabled data-cy="test" />);

    expect(screen.getByTestId("btn")).toBeDisabled();
    expect(screen.getByTestId("btn")).toHaveAttribute("data-cy", "test");
  });
});

describe("Classed with Variants", () => {
  it("Should render dom element with classed classNames and class", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
        },
      },
    });

    render(<Button color="blue" className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
  });

  it("Should not render any variant if no variant is passed", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
        },
      },
    });

    render(<Button className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).not.toHaveClass("bg-blue-100");
  });

  it("Should render dom element with correct default variant", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
        },
      },

      defaultVariants: {
        color: "blue",
      },
    });

    render(<Button data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
  });

  it("Should prefer props over defaultVariants", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },

      defaultVariants: {
        color: "red",
      },
    });

    render(<Button color="blue" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
    expect(screen.getByTestId("btn")).not.toHaveClass("bg-red-100");
  });

  it("Should accept boolean variant", () => {
    const Button = classed("button", {
      variants: {
        bordered: {
          true: "border-2 border-gray-500",
        },
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
    });

    render(<Button color="red" bordered data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("border-2 border-gray-500");
  });

  it("Should handle numerical variants", () => {
    const Button = classed("button", {
      variants: {
        size: {
          1: "text-xs",
          2: "text-sm",
          3: "text-base",
          "4": "text-lg",
        },
      },
    });

    const Button2 = classed("button", {
      variants: {
        size: {
          1: "text-xs",
          2: "text-sm",
          3: "text-base",
        },
      },

      defaultVariants: {
        size: "3",
      },
    });

    render(<Button size={"4"} data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("text-lg");

    render(<Button2 data-testid="btn2" />);
    expect(screen.getByTestId("btn2")).toHaveClass("text-base");
  });

  it("Should render dom element with data-attribute for variant", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
      dataAttributes: ["color"],
    });

    render(<Button color="blue" className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-color", "blue");
  });

  it("Should render dom element with data-attribute for variant using default", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
      defaultVariants: {
        color: "red",
      },
      dataAttributes: ["color"],
    });

    render(<Button className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-red-100");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-color", "red");
  });

  it("Should render dom element wit mutliple data-attribute for variant", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
        size: {
          large: "text-lg",
          small: "text-sm",
        },
      },
      defaultVariants: {
        color: "red",
      },
      dataAttributes: ["color", "size"],
    });

    render(<Button size="large" className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-red-100");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-color", "red");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-size", "large");
  });

  it("Should NOT render dom element with data-attribute when unmatched", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
      dataAttributes: ["color"],
    });

    render(<Button className="test" data-testid="btn" />);

    expect(screen.getByTestId("btn")).not.toHaveClass("bg-blue-100");
    expect(screen.getByTestId("btn")).not.toHaveAttribute("data-color", "blue");
  });

  it("Should contain correct types for data-attribute when variants are present", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
      // @ts-expect-error - Variants dont match
      dataAttributes: ["", "sdsds"],
    });

    const Button2 = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
      dataAttributes: ["color"],
    });

    type Button2Extract = (typeof Button2)[$$ClassedVariants];

    expectTypeOf<Button2Extract["dataAttributes"]>().toMatchTypeOf<"color"[]>();

    const Button3 = classed(Button2, {
      variants: {
        size: {
          large: "text-lg",
        },
      },
      dataAttributes: ["size"],
    });

    type Button3Extract = (typeof Button3)[$$ClassedVariants];

    // @ts-expect-error
    expectTypeOf<Button3Extract["dataAttributes"]>().toMatchTypeOf<"color"[]>();

    expectTypeOf<Button3Extract["dataAttributes"]>().toMatchTypeOf<"size"[]>();
  });

  it("Should render default props on component", () => {
    const Button = classed("button", {
      defaultProps: {
        disabled: true,
      },
    });

    render(<Button data-testid="btn" />);

    expect(screen.getByTestId("btn")).toBeDisabled();
  });
});

describe("Composition", () => {
  it("Should merge class of other classed component", () => {
    const Button = classed("button", "bg-blue-100");
    const Anchor = classed(Button, "bg-red-100");

    render(<Anchor data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100 bg-red-100");
  });

  it("Should merge class of other classed component with variants", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
    });
    const Anchor = classed(Button, "bg-red-100");

    render(<Anchor color="blue" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100 bg-red-100");
  });

  it("Should include variants of other classed component", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
    });

    const Anchor = classed("a", Button);

    render(<Anchor color="blue" data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
  });

  it("Should correctly support boolean variants", () => {
    const BasicButton = classed("button", {
      variants: { loading: { true: "animate-pulse" } },
    });

    const ButtonContent = classed("div", {
      variants: { loading: { false: "invisible" } },
    });

    const Button = ({
      loading,
      children,
      ...props
    }: React.ComponentProps<typeof BasicButton>) => (
      <BasicButton loading={loading} {...props}>
        <ButtonContent
          data-testid={(props as any)["data-innertestid"]}
          loading={loading}
        >
          {children}
        </ButtonContent>
        {/* => Type 'boolean | "true" | undefined' is not assignable to type 'boolean | "false" | undefined'. */}
      </BasicButton>
    );

    render(
      <Button data-testid="a1" data-innertestid="a2" loading={false}>
        Click me
      </Button>
    );
    expect(screen.getByTestId("a1")).not.toHaveClass("animate-pulse");
    expect(screen.getByTestId("a2")).toHaveClass("invisible");

    render(
      <Button data-testid="b1" data-innertestid="b2" loading={true}>
        Click me
      </Button>
    );
    expect(screen.getByTestId("b1")).toHaveClass("animate-pulse");
    expect(screen.getByTestId("b2")).not.toHaveClass("invisible");
  });

  it("Should correctly render data-attributes when composed", () => {
    const Button = classed("button", {
      variants: { loading: { true: "animate-pulse" } },
      dataAttributes: ["loading"],
    });

    const Button2 = classed(Button, {
      variants: { color: { blue: "bg-blue-100" } },
      dataAttributes: ["color"],
    });

    render(<Button2 color="blue" data-testid="btn" loading />);

    expect(screen.getByTestId("btn")).toHaveClass("animate-pulse bg-blue-100");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-color", "blue");
    expect(screen.getByTestId("btn")).toHaveAttribute("data-loading");

    const Button3 = classed.button(Button);

    render(<Button3 color="blue" data-testid="btn3" loading />);

    expect(screen.getByTestId("btn3")).toHaveClass("animate-pulse");
    expect(screen.getByTestId("btn3")).toHaveAttribute("data-loading");
  });
});

describe("DisplayName", () => {
  it("Should set displayName", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
    });

    expect(Button.displayName).toBe("TwComponent(button)");
  });

  it("Should set displayName for composed components", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
          red: "bg-red-100",
        },
      },
    });

    const Anchor = classed(Button, "bg-red-100");

    expect(Anchor.displayName).toBe("TwComponent(button)");
  });

  it("Should set displayName for non-classed comps", () => {
    const MyComponent = ({ className }: { className: string }) => (
      <div className={className} />
    );

    const Button = classed(MyComponent, {
      base: "bg-blue-100",
    });

    expect(Button.displayName).toBe("MyComponent");
  });

  it("Should reuse displayName when set on parent", () => {
    const MyComponent = ({ className }: { className: string }) => (
      <div className={className} />
    );

    MyComponent.displayName = "X";

    const Button = classed(MyComponent, {
      base: "bg-blue-100",
    });

    expect(Button.displayName).toBe("X");
  });
});

describe("classed() - tsconfig: exactOptionalPropertyTypes:true", () => {
  it("Should allow for undefined to be implicitly passed", () => {
    const Button = classed("button", {
      variants: {
        color: {
          blue: "bg-blue-100",
        },
      },
    });

    render(<Button color={undefined} data-testid="btn" />);

    expect(screen.getByTestId("btn")).not.toHaveClass("bg-blue-100");
  });
});
