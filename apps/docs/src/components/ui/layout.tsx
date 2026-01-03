import { classed } from "@tw-classed/react";

export const Container = classed("div", "container px-5 mx-auto");

export const TwoColumn = classed(
  "div",
  "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12"
);
