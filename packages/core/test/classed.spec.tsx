import "@testing-library/jest-dom";
import { describe } from "vitest";
import classed from "../src";

import { render, screen, userEvent } from "./test.utils";

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
});
