import "@testing-library/jest-dom";
import { classed } from "../src";
import { render, screen } from "@solidjs/testing-library";
import { expect, it } from "vitest";

it("Should function like classed when to proxy path exists", () => {
	const Button = classed("button", {
		base: "bg-blue-100",
		variants: {
			color: {
				red: "bg-red-100",
				blue: "bg-blue-100",
			},
		},
	});

	render(() => <Button data-testid="a" color="blue" />);

	expect(screen.getByTestId("a")).toHaveClass("bg-blue-100");
});

it("Should proxy path to classed method", () => {
	const Button = classed.button({
		base: "bg-blue-100",
		variants: {
			color: {
				red: "bg-red-100",
				blue: "bg-blue-100",
			},
		},
	});

	render(() => <Button data-testid="a" color="blue" />);

	expect(screen.getByTestId("a").tagName).toBe("BUTTON");

	expect(screen.getByTestId("a")).toHaveClass("bg-blue-100");
});
