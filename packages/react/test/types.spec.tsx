import React from "react";
import { expectTypeOf } from "vitest";
import { classed } from "../src/index";

test("It Should create a JSX Element", () => {
	const Button = classed("button", {
		variants: {
			size: {
				sm: "text-sm",
				md: "text-md",
				lg: "text-lg",
			},
		},
	});

	const button = <Button size="sm" />;

	expectTypeOf(button).toMatchTypeOf<JSX.Element>();
});

test("Should support render prop for intrinsic elements", () => {
	const Button = classed("button", {
		variants: {
			size: {
				sm: "text-sm",
				md: "text-md",
			},
		},
	});

	// render prop should be available for intrinsic elements
	const element = <Button size="sm" render={<a href="/" />} />;

	expectTypeOf(element).toMatchTypeOf<JSX.Element>();
});

test("Should properly type variant props", () => {
	const Button = classed("button", {
		variants: {
			size: {
				sm: "text-sm",
				md: "text-md",
			},
		},
	});

	// @ts-expect-error - Value of type 'number' is not assignable to type '"sm" | "md"'
	<Button size={1} />;

	// @ts-expect-error - Value of type 'xl' is not assignable to type '"sm" | "md"'
	<Button size="xl" />;
});
