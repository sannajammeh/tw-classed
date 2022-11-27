import { classed } from "@tw-classed/react";

const Text = classed("p", "leading-normal", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
    },
    weight: {
      normal: "",
      bold: "font-bold",
      medium: "font-medium",
    },

    color: {
      primary: "text-radix-blue9",
      secondary: "text-radix-slate11",
      black: "text-black",
      white: "text-white",
    },
  },
});

export { Text };
