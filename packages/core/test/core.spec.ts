import { describe, expect, it } from "vitest";
import { classed } from "../src/classed";

const classIncludes = (className: string, classes: string[]) => {
  return classes.every((c) => className.includes(c));
};

describe("Core functionality", () => {
  it("Should return a class string", () => {
    expect(classed("foo", "bar")()).toBe("foo bar");
  });

  it("Should return a class string by configuration object", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    expect(button({ size: "sm" })).toBe("bg-blue-100 text-sm");
  });

  it("Should allow for multiple variants", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
        variant: {
          primary: "text-white",
          secondary: "text-black",
        },
      },
    });

    expect(button({ size: "sm", variant: "primary" })).toBe(
      "bg-blue-100 text-sm text-white"
    );
  });

  it("Should allow for boolean variants", () => {
    const button = classed("bg-blue-100", {
      variants: {
        disabled: {
          true: "opacity-50",
        },
      },
    });

    expect(button({ disabled: true })).toBe("bg-blue-100 opacity-50");
  });

  it("Should apply default variants", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
      defaultVariants: {
        size: "md",
      },
    });

    expect(button()).toBe("bg-blue-100 text-md");
  });
});

describe("Composition", () => {
  it("Should allow for multiple variant objects", () => {
    const button = classed(
      "bg-blue-100",
      {
        variants: {
          size: {
            sm: "text-sm",
            md: "text-md",
          },
        },
      },
      {
        variants: {
          variant: {
            primary: "text-white",
            secondary: "text-black",
          },
        },
      }
    );

    expect(button({ size: "sm", variant: "primary" })).toBe(
      "bg-blue-100 text-sm text-white"
    );
  });

  it("Should merge two classed functions together", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    const button2 = classed(button, "bg-red-100");

    expect(
      classIncludes(button2({ size: "sm" }), [
        "bg-blue-100",
        "text-sm",
        "bg-red-100",
      ])
    ).toBe(true);
  });

  it("Should merge two classed functions together with variants", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    const button2 = classed(button, {
      variants: {
        variant: {
          primary: "text-white",
          secondary: "text-black",
        },
      },
    });

    expect(
      classIncludes(button2({ size: "sm", variant: "primary" }), [
        "bg-blue-100",
        "text-sm",
        "text-white",
      ])
    ).toBe(true);
  });

  it("Should merge base classes with N classed functions or classNames", () => {
    const button = classed("bg-blue-100", {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    const button2 = classed({
      variants: {
        variant: {
          primary: "text-white",
          secondary: "text-black",
        },
      },
    });

    const button3 = classed("bg-red-100", button, button2);

    expect(
      classIncludes(button3({ size: "sm", variant: "primary" }), [
        "bg-blue-100",
        "text-sm",
        "text-white",
        "bg-red-100",
      ])
    ).toBe(true);
  });

  it("Should parse base from variant config object", () => {
    const button = classed({
      base: "bg-blue-100",
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    expect(button({ size: "sm" })).toBe("bg-blue-100 text-sm");
  });
});
