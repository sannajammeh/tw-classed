import { describe, it } from "vitest";
import { getVariantConfig, classed } from "../src/index";

describe("getVariantConfig()", () => {
  it("should return the variant config", () => {
    const vars = {
      base: "base",
      variants: {
        color: {
          primary: "red",
        },
      },
      defaultVariants: {
        color: "primary",
      },
    } as const;

    const Button = classed.button(vars);

    const config = getVariantConfig(Button);

    expect(config.variants).toMatchObject(vars.variants);

    const { base: _, ...withoutBase } = vars;

    expect(config).toMatchObject(withoutBase);
  });
});
