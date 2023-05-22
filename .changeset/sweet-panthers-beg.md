---
"@tw-classed/core": minor
"@tw-classed/react": minor
"@tw-classed/solid": minor
"docs": patch
---

Adds support for matched variants to appear as dataAttributes

### Example

```tsx
const Button = classed("button", {
  variants: {
    color: {
      blue: "bg-blue-100",
      red: "bg-red-100",
    },
  },
  defaultVariants: {
    color: "red",
  },
  dataAttributes: ["color"],
});

<Button color="blue" />
// Rendered html will be 
<button data-color="blue" /> 

<Button>
// Rendered html will be
<button data-color="red /> // From default variants 
```
