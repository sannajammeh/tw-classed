---
"@tw-classed/react": minor
"@tw-classed/core": minor
"docs": patch
---

Add `getVariantConfig()` utility to `core` & `react` api's. This extracts the entire parsed variant config from a classed component, also supports nested variants from component composition.

Usage:

```tsx
const Button = classed("button", {
  variants: {
    color: {
      blue: "bg-blue-500",
    },
  },
});

const { variants } = getVariantConfig(Button);
variants.color.blue; // "bg-blue-500"
```
