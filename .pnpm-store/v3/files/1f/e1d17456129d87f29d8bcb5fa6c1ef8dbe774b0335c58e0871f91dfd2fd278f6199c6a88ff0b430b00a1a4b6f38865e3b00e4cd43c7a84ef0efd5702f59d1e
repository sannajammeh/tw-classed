import { classedParser } from "../src/parser";
import { describe, expect, it } from "vitest";

describe("Classed Parser", () => {
  it("Should parse a single empty className", () => {
    const result = classedParser([]);

    expect(result).toBe("");
  });

  it("Should parse a single className", () => {
    const result = classedParser(["test", "test 2"]);

    expect(result).toBe("test test 2");
  });
});
