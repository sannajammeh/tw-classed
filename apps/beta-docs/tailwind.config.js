/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./theme.config.js",
  ],
  theme: {
    extend: {
      colors: {
        "nx-bg-dark": "#010101",
      },
    },
  },
  plugins: [
    require("./utils/radix-colors-tailwind.cjs")({
      colors: ["blue", "slate", "cyan", "violet"],
    }),
    require("@tailwindcss/typography"),
  ],
};
