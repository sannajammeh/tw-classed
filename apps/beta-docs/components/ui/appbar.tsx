import classed from "tw-classed";

export const AppBar = classed("header", {
  className: "top-0 z-50",
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
