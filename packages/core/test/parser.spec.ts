import {
  getVariantSelector,
  mapPropsToVariantClass,
  parseClassNames,
} from "../src/parser";
import { describe, expect, it } from "vitest";
import { TW_VARS } from "../src/constants";

describe("Classed Parser", () => {
  it("Should parse a single empty className", () => {
    const result = parseClassNames([]);

    expect(result.className).toBe("");
  });

  it("Should parse a single className", () => {
    const result = parseClassNames(["test", "test 2"]);

    expect(result.className).toBe("test test 2");
  });

  it("Should parse variants", () => {
    const result = parseClassNames([
      "test",
      {
        variants: {
          variant: {
            test: "test",
          },
        },
      },
    ]);

    expect(result.variants).toEqual({
      variant: {
        test: "test",
      },
    });
  });

  it("Should parse variant config className prop", () => {
    const result = parseClassNames([
      {
        className: "test",
        variants: {
          variant: {
            test: "test",
          },
        },
      },
    ]);

    expect(result.className).toBe("test");
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

  it("Should merge function variants", () => {
    const fn = () => "test";

    Reflect.set(fn, TW_VARS, {
      className: "test",
      variants: {
        size: {
          large: "large",
        },
      },
      defaultVariants: {
        size: "large",
      },
    });

    const result = parseClassNames([fn as any]);

    expect(result.variants.size.large).toBe("large");
    expect(result.defaultVariants.size).toBe("large");
    expect(result.className).toBe("test");
  });
});

describe("mapPropsToVariantClass()", () => {
  it("Should map props correctly", () => {
    const config = {
      variants: {
        size: {
          large: "large",
          small: "small",
        },
      },
      defaultVariants: {
        size: "large",
      },
    };
    const result = mapPropsToVariantClass(config as any);

    expect(result).toBe("large");

    const result2 = mapPropsToVariantClass(config as any, { size: "small" });

    expect(result2).toBe("small");
  });

  it("Should handle undefined variant selector", () => {
    const config = {
      variants: {
        size: {
          large: "large",
          small: "small",
        },
      },
    };
    const result = mapPropsToVariantClass(config as any, { size: "test" });
    expect(result).toBe("");

    const result2 = mapPropsToVariantClass(config as any, {});
    expect(result2).toBe("");

    const fn = new Function();

    fn.prototype.useMe = () => "test";

    const result3 = mapPropsToVariantClass(config as any, fn as any);

    expect(result3).toBe("");
  });
});
