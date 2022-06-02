module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./utils/radix-colors-tailwind.cjs")({
      colors: ["blue", "slate", "cyan"],
    }),
    require("@tailwindcss/typography"),
  ],
};
