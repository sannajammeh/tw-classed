import "@testing-library/jest-dom";

import { classed as core } from "@tw-classed/core";

import { classed } from "../src";
import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";

describe("Interop: Core -> React", () => {
  it("Should inherit classNames", () => {
    const button = core("bg-blue-500");

    const Button = classed("button", button);

    render(() => <Button data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500");
  });

  it("Should inherit variants", () => {
    const button = core({
      base: "rounded-md",
      variants: {
        color: {
          blue: "bg-blue-500",
        },
      },
    });

    const Button = classed("button", button);

    render(() => <Button color="blue" data-testid="btn1" />);

    expect(screen.getByTestId("btn1")).toHaveClass("bg-blue-500");

    render(() => <Button data-testid="btn2" />);

    expect(screen.getByTestId("btn2")).toHaveClass("rounded-md");
  });

  it("Should work with both core and react comp", () => {
    const button = core({
      base: "rounded-md",
      variants: {
        color: {
          blue: "bg-blue-500",
        },
      },
    });

    const ReactBtn = classed("button", {
      base: "shadow-md",
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    const Button = classed("button", button, ReactBtn);

    render(() => <Button color="blue" data-testid="btn1" />);

    expect(screen.getByTestId("btn1")).toHaveClass("bg-blue-500");

    render(() => <Button size="md" data-testid="btn2" />);

    expect(screen.getByTestId("btn2")).toHaveClass("text-md");

    render(() => <Button data-testid="btn3" />);

    expect(screen.getByTestId("btn3")).toHaveClass("shadow-md rounded-md");
  });
});

describe("Interop: React -> Core", () => {
  it("Should inherit classNames", () => {
    const Button = classed("button", "bg-blue-500");

    const button = core(Button);

    render(() => <button class={button()} data-testid="btn" />);

    expect(screen.getByTestId("btn")).toHaveClass("bg-blue-500");
  });

  it("Should inherit variants", () => {
    const Button = classed("button", {
      base: "rounded-md",
      variants: {
        color: {
          blue: "bg-blue-500",
        },
      },
    });

    const button = core(Button);

    render(() => (
      <button class={button({ color: "blue" })} data-testid="btn1" />
    ));

    expect(screen.getByTestId("btn1")).toHaveClass("bg-blue-500");

    render(() => <button class={button()} data-testid="btn2" />);

    expect(screen.getByTestId("btn2")).toHaveClass("rounded-md");
  });

  it("Should work with both core and react comp", () => {
    const Button = classed("button", {
      base: "rounded-md",
      variants: {
        color: {
          blue: "bg-blue-500",
        },
      },
    });

    const ReactBtn = classed("button", {
      base: "shadow-md",
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
        },
      },
    });

    const button = core(Button, ReactBtn);

    render(() => (
      <button class={button({ color: "blue" })} data-testid="btn1" />
    ));

    expect(screen.getByTestId("btn1")).toHaveClass("bg-blue-500");

    render(() => <button class={button({ size: "md" })} data-testid="btn2" />);

    expect(screen.getByTestId("btn2")).toHaveClass("text-md");

    render(() => <button class={button()} data-testid="btn3" />);

    expect(screen.getByTestId("btn3")).toHaveClass("shadow-md rounded-md");
  });
});
