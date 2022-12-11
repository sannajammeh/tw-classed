---
"@tw-classed/react": patch
---

This patch adds support for Typescript `interoperability` between the `@tw-classed/core` and `@tw-classed/react` packages. This makes it possible to use the `@tw-classed/core` in a framework agnostic design system and then use the `@tw-classed/react` in a React application.

```tsx
// Design system
import { classed } from "@tw-classed/core";

export const button = classed({
  base: "bg-blue-500 text-white",
  variants: {
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
});

// React application
import { button } from "design-system";
import { classed } from "@tw-classed/react";

export const Button = classed.button(button); // Variants are automatically inferred
```
