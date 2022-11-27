import { classed } from "@tw-classed/react";

export const Button = classed("button", {
  className:
    "flex items-center gap-2 font-medium transition-colors border border-transparent focus:outline focus:outline-2",
  variants: {
    color: {
      blue: "bg-radix-blue5 text-radix-blue10 hover:bg-radix-blue4 hover:border-radix-blue8 !outline-radix-blue7",
      ghostSlate:
        "bg-transparent text-radix-slate10 hover:bg-radix-slate4 hover:text-radix-slate11 !outline-radix-slate7",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-12 py-4 text-xl",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      pill: "rounded-full",
    },
  },

  defaultVariants: {
    color: "blue",
    size: "sm",
    radius: "md",
  },
});
