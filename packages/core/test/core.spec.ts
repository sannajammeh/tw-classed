import { it } from "vitest";
import classed from "../src/classed";

it("Should work", () => {
  // test
  const test = classed("bg-blue", {
    variants: {
      size: {
        small: "bg-red",
        large: "bg-green",
      },
    },
  });

  const test2 = classed("text-xl", test, {
    variants: {
      color: {
        red: "text-red",
      },
    },
  });

  const res1 = test({
    size: "small",
  });

  const res2 = test2({
    size: "small",
  });

  console.log({ res1, res2 });
});
