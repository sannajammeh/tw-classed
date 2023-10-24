---
"@tw-classed/react": minor
"@tw-classed/core": minor
---

- (Feat): Add support for defaultProps in React api
  Components can now have default props in the React api

```tsx
const Button = classed.button({
  defaultProps: {
    someProp: "someValue",
  },
});
```

This change is considered unstable, for now defaultProps will not populate when using composition nor affect variants or classname generation.

- (Fix): Data attributes are now correctly generated for composition
