---
"@tw-classed/react": patch
"@tw-classed/core": patch
---

Adds support for compoundVariants to be inherit via the composition API.

Example:

```tsx
const Button = classed.button({
  base: "bg-blue-500 text-white",
  variants: {
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
    },
    color: {
      red: "bg-red-500",
      green: "bg-green-500",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      color: "green"
      class: "super-special-class-modifyer"
    },
  ],
});

const GreenButton = classed(Button, {
  defaultVariants: {
    color: "green", // This now triggers the compoundVariant
  },
});
```
