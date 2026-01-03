import { describe, expect, it } from "vitest";
import { createClassed } from "../src";

const stringIncludes = (str: string, str2: string) => {
	return str2.split(" ").every((s) => str.includes(s));
};

describe("createClassed", () => {
	it("should work", () => {
		const { classed } = createClassed();

		const button = classed(
			"bg-red-500",
			"hover:bg-red-600",
			"focus:outline-none",
		);

		expect(button()).toBe("bg-red-500 hover:bg-red-600 focus:outline-none");
	});

	it("should work with variants", () => {
		const { classed } = createClassed();

		const button = classed(
			"bg-red-500",
			"hover:bg-red-600",
			"focus:outline-none",
			{
				variants: {
					size: {
						sm: "text-sm",
						md: "text-md",
						lg: "text-lg",
					},
				},
			},
		);

		expect(button({ size: "sm" })).toBe(
			"bg-red-500 hover:bg-red-600 focus:outline-none text-sm",
		);
	});
});

describe("createClassed with config", () => {
	it("Should work with custom merger", () => {
		const { classed } = createClassed({
			merger: (...args: string[]) =>
				args
					.map((a) => a.trim())
					.join(" ")
					.trim(),
		});

		const button = classed(
			"bg-red-500",
			"hover:bg-red-600",
			"focus:outline-none",
		);

		expect(button()).toBe("bg-red-500 hover:bg-red-600 focus:outline-none");
	});

	it("Should work with merger removing duplicates", () => {
		const myMerger = (...args: string[]) => {
			const splitArgs = args.map((a) => a.split(" ")).flat();
			const set = new Set(splitArgs);
			return [...set].join(" ");
		};
		const { classed } = createClassed({
			merger: myMerger,
		});

		const button = classed(
			"bg-red-500 text-sm",
			"hover:bg-red-600",
			"focus:outline-none",
			"bg-red-500",
			{
				variants: {
					size: {
						sm: "text-sm",
						md: "text-md",
						lg: "text-lg",
					},
				},
			},
		);

		const classes = button({ size: "sm" });

		expect(
			stringIncludes(
				classes,
				"bg-red-500 hover:bg-red-600 focus:outline-none text-sm",
			),
		).toBe(true);

		expect(Array.from(classes.matchAll(/text-sm/g)).length).toBe(1);
	});

	it("Should work with a merger that removes newline syntax", () => {
		const myMerger = (...args: string[]) => {
			const classes = args.filter(Boolean).join(" ");

			return classes.replace(/\s{2,}/g, " ");
		};

		const { classed } = createClassed({
			merger: myMerger,
		});

		const button = classed(
			`
      bg-red-500
      text-sm
      hover:bg-red-600
      focus:outline-none
      bg-red-500
    `,
			`
      text-sm
    `,
			"testing",
		);

		const classes = button();

		expect(
			stringIncludes(
				classes,
				"bg-red-500 text-sm hover:bg-red-600 focus:outline-none testing",
			),
		).toBe(true);

		expect(classes).not.toContain("\n");
	});
});
