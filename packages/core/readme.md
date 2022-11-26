![tw-classed](https://raw.githubusercontent.com/sannajammeh/tw-classed/master/tw-classed.jpg)

![npm](https://img.shields.io/npm/v/@tw-classed/core?logoColor=%23000000&style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@tw-classed/core?label=GZIP%20Size&logoColor=%23000000&style=for-the-badge) ![NPM](https://img.shields.io/npm/l/@tw-classed/core?style=for-the-badge)

# @tw-classed/core

A Stitches & Styled-Components inspired library to create reusable Tailwind based components, fully typed with polymorphic `as` prop, media queries and interaction support.

See the [documentation](https://tw-classed.vercel.app/) for more information.

## Installation

```bash
npm i @tw-classed/core
```

## Usage

```js
import { classed } from "@tw-classed/core";

const button = classed("bg-blue-500 py-2 px-4");

// In your favorite DOM library
() => html`<button class=${button}>Button</button>`;
```

##### Multiple argument support

Quickly sort out your classes by logic

```js
const button = classed(
  "bg-blue-500 py-2 px-4",
  "hover:bg-blue-600",
  "focus:outline-none"
);
```

##### Using Variants

```js
const button = classed("bg-blue-500", "hover:bg-blue-600", {
  variants: {
    size: {
      sm: "py-1 px-2",
      lg: "py-3 px-5",
    },
  },
});

// In your favorite DOM library
() => html`<button class=${button({ size: "sm" })}>Button</button>`;
```

## Contributing

This library uses pnpm as package manager, Vitest for testing, tsc as compiler and Typescript ^4.7.0 as type checker. Please make sure to use the latest versions of these tools.

1. Fork this library
2. Create a new branch for your changes. Preferably `<featureName>`
3. Run `pnpm i`
4. Once you're happy with your changes, run `pnpm run test`
5. Make sure coverage is acceptable by running `pnpm run coverage`
6. Commit your changes and push them to your new branch
7. Create a pull request and await review
