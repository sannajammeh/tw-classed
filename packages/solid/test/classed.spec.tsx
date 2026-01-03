import { expect, it, describe } from "vitest";
import { classed, VariantProps } from "../src";

import { render, screen } from "@solidjs/testing-library";
import { createSignal } from "solid-js";

describe("initial", () => {
	it("Should work", () => {
		const Comp = classed("div", "hello world");

		expect(Comp).toBeDefined();
	});

	it("Should render with class", () => {
		const Comp = classed("div", "bg-blue-500");

		expect(Comp).toBeDefined();

		render(() => <Comp data-testId="1" />);

		expect(screen.getByTestId("1")).toHaveClass("bg-blue-500");
	});

	it("Should render with class and variant", () => {
		const Comp = classed("div", "bg-blue-500", {
			variants: {
				isRed: {
					true: "bg-red-500",
				},
			},
		});

		expect(Comp).toBeDefined();

		render(() => <Comp data-testId="1" isRed />);

		expect(screen.getByTestId("1")).toHaveClass("bg-red-500");
	});

	it("Should render with variants", () => {
		const Comp = classed.div("bg-blue-500", {
			variants: {
				color: {
					red: "bg-red-500",
					green: "bg-green-500",
				},
			},
		});

		expect(Comp).toBeDefined();

		render(() => <Comp data-testId="1" color="red" />);

		expect(screen.getByTestId("1")).toHaveClass("bg-red-500");
	});

	it("Should render with variants and default variants", () => {
		const Comp = classed.div("bg-blue-500", {
			variants: {
				color: {
					red: "bg-red-500",
					green: "bg-green-500",
				},
			},
			defaultVariants: {
				color: "green",
			},
		});

		expect(Comp).toBeDefined();

		render(() => <Comp data-testId="1" />);

		expect(screen.getByTestId("1")).toHaveClass("bg-green-500");
	});

	it("Should render with variants and default variants and compound variants", () => {
		const Comp = classed.div("bg-blue-500", {
			variants: {
				color: {
					red: "bg-red-500",
					green: "bg-green-500",
				},
				size: {
					large: "text-xl",
				},
			},
			defaultVariants: {
				color: "green",
			},
			compoundVariants: [
				{
					color: "red",
					size: "large",
					className: "text-2xl",
				},
			],
		});

		expect(Comp).toBeDefined();

		render(() => <Comp data-testId="1" color="red" size="large" />);

		expect(screen.getByTestId("1")).toHaveClass("bg-red-500 text-2xl");
	});

	it("Should render variant classes on props change", () => {
		const Comp = classed.div("bg-blue-500", {
			variants: {
				color: {
					red: "bg-red-500",
					green: "bg-green-500",
				},
			},
		});

		expect(Comp).toBeDefined();

		const Component = () => {
			const [color, setColor] =
				createSignal<VariantProps<typeof Comp>["color"]>("red");

			return (
				<div>
					<button
						data-testId="button"
						onClick={() => {
							setColor("green");
						}}
					>
						Change color
					</button>
					<Comp data-testId="1" color={color()} />
				</div>
			);
		};

		render(Component);

		expect(screen.getByTestId("1")).toHaveClass("bg-red-500");

		screen.getByTestId("button").click();

		expect(screen.getByTestId("1")).toHaveClass("bg-green-500");
	});
});

describe("Classed", () => {
	it("Should render dom element", () => {
		const Button = classed("button");

		render(() => <Button data-testid="btn" />);

		expect(screen.getByTestId("btn")).toBeInTheDocument();
	});

	it("Should render dom element with class", () => {
		const Button = classed("button");

		render(() => <Button as="div" class="test" data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("test");
	});

	it("Should render dom element with classed classNames", () => {
		const Button = classed("button", "bg-blue-500");

		render(() => <Button data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500");
	});

	it("Should render dom element with classed classNames and class", () => {
		const Button = classed("button", "bg-blue-500");

		render(() => <Button class="test" data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500 test");
	});

	it("Should render correct dom element", () => {
		const Anchor = classed("a");

		render(() => <Anchor href="#" data-testid="anchor" />);

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

		render(() => <Button color="blue" class="test" data-testid="btn" />);

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

		render(() => <Button class="test" data-testid="btn" />);

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

		render(() => <Button data-testid="btn" />);

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

		render(() => <Button color="blue" data-testid="btn" />);

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

		render(() => <Button color="red" bordered data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("border-2 border-gray-500");
	});

	it("Should handle numerical variants", () => {
		const Button = classed("button", {
			variants: {
				size: {
					1: "text-xs",
					2: "text-sm",
					3: "text-base",
					"4": "text-lg",
				},
			},
		});

		const Button2 = classed("button", {
			variants: {
				size: {
					1: "text-xs",
					2: "text-sm",
					3: "text-base",
				},
			},

			defaultVariants: {
				size: "3",
			},
		});

		render(() => <Button size={"4"} data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("text-lg");

		render(() => <Button2 data-testid="btn2" />);
		expect(screen.getByTestId("btn2")).toHaveClass("text-base");
	});
});

describe("Composition", () => {
	it("Should merge class of other classed component", () => {
		const Button = classed("button", "bg-blue-100");
		const Anchor = classed(Button, "bg-red-100");

		render(() => <Anchor data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100 bg-red-100");
	});

	it("Should merge class of other classed component with variants", () => {
		const Button = classed("button", {
			variants: {
				color: {
					blue: "bg-blue-100",
					red: "bg-red-100",
				},
			},
		});
		const Anchor = classed(Button, "bg-red-100");

		render(() => <Anchor color="blue" data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100 bg-red-100");
	});

	it("Should include variants of other classed component", () => {
		const Button = classed("button", {
			variants: {
				color: {
					blue: "bg-blue-100",
					red: "bg-red-100",
				},
			},
		});

		const Anchor = classed("a", Button);

		render(() => <Anchor color="blue" data-testid="btn" />);

		expect(screen.getByTestId("btn")).toHaveClass("bg-blue-100");
	});

	it("Should not render variant as prop in the DOM", () => {
		const Button = classed("button", {
			variants: {
				color: {
					blue: "bg-blue-100",
					red: "bg-red-100",
				},
			},
		});

		const Anchor = classed("a", Button);

		render(() => <Anchor color="blue" data-testid="btn" />);

		expect(screen.getByTestId("btn")).not.toHaveAttribute("color");
	});
});
