import { parseClassNames } from "../src/parser";
import { describe, expect, it } from "vitest";

describe("Classed Parser", () => {
  it("Should parse a single empty className", () => {
    const result = parseClassNames([]);

    expect(result.className).toBe("");
  });

  it("Should parse a single className", () => {
    const result = parseClassNames(["test", "test 2"]);

    expect(result.className).toBe("test test 2");
  });

  it("Should merge default variants", () => {
    const result = parseClassNames([
      {
        defaultVariants: {
          size: "large",
        },
      },
      {
        defaultVariants: {
          size: "small",
        },
      },
    ]);

    expect(result.defaultVariants.size).toBe("small");
  });
});
