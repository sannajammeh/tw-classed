![npm](https://img.shields.io/npm/v/tw-classed?logoColor=%23000000&style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/tw-classed?label=GZIP%20Size&logoColor=%23000000&style=for-the-badge) ![NPM](https://img.shields.io/npm/l/tw-classed?style=for-the-badge)

# tw-classed

A Stitches & Styled-Components inspired library to create reusable Tailwind based components, fully typed with polymorphic `as` prop, media queries and interaction support.

## Installation

| :zap: This is an ESM only package, use with a bundler that supports it or pre-compile! |
| -------------------------------------------------------------------------------------- |

```bash
npm i tw-classed
```

## Usage

```tsx
// With `tw-classed`
import classed from "tw-classed";
const Button = classed("button", "bg-blue-500 text-white p-4 rounded-md");

// Without `tw-classed`
import { forwardRef } from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      className="bg-blue-500 text-white p-4 rounded-md"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);
```

##### Multiple argument support

```tsx
// Grid.tsx
import classed from "tw-classed";

const Grid = classed(
  "div",
  "grid-cols-1 gap-4",
  "md:grid-cols-2",
  "lg:grid-cols-3",
  "xl:grid-cols-4"
);

export default Grid;
```

##### Using Variants

Insert an object as an argument to `classed` to define variants and defaultVariants for the component.
Later use the key i.e color prop to set the variant.

```tsx
// Button.tsx
import classed from "tw-classed";

const Button = classed("button", "p-4 rounded-md", {
  variants: {
    color: {
      blue: "bg-blue-500 text-white",
      primary: "bg-indigo-500 text-white",
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

const MyApp = () => {
  return (
    <>
      <Button color="primary">Im the primary color</Button>
      <Button color="blue">Im the blue color</Button>
      <Button>Im the default color (blue)</Button>
    </>
  );
};
```

##### Using the `as` prop

This allows for TypeScript intellisense to infer props based on the `as` prop.

```tsx
import classed from "tw-classed";

const Button = classed("button", "bg-blue-500 text-white p-4 rounded-md");

const MyApp = () => {
  return (
    <Button as="a" href="https://example.com" target="_blank">
      click me
    </Button>
  );
};
```

## Coverage

-----------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files | 100 | 100 | 100 | 100 |  
 index.tsx | 100 | 100 | 100 | 100 |  
 parser.ts | 100 | 100 | 100 | 100 |  
-----------|---------|----------|---------|---------|-------------------

## Contributing

This library uses pnpm as package manager, Vitest for testing, tsc as compiler and Typescript ^4.7.0 as type checker. Please make sure to use the latest versions of these tools.

1. Fork this library
2. Create a new branch for your changes. Preferably `<featureName>`
3. Run `pnpm i`
4. Once you're happy with your changes, run `pnpm run test`
5. Make sure coverage is acceptable by running `pnpm run coverage`
6. Commit your changes and push them to your new branch
7. Create a pull request and await review

> This is still under development, and the API is subject to change. Thanks for your patience.

**Upcoming**

- [ ] compoundVariants support
- [ ] TS Support for `as={ComponentFn}` prop (currently only `keyof JSX.InstrinsicElements`)
