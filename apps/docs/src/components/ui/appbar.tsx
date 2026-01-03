import { classed } from "@tw-classed/react";

export const AppBar = classed("header", {
  base: "top-0 z-50",
  variants: {
    size: {
      md: "h-12",
      lg: "h-16",
      xl: "h-20",
    },
  },

  defaultVariants: {
    size: "md",
  },
});
