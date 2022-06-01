import classed from "tw-classed";

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
      primary: "text-indigo-500",
      secondary: "text-gray-500",
      black: "text-black",
      white: "text-white",
    },
  },
});

export { Text };
