---
"@tw-classed/react": patch
---

Fixes As prop usage inside a derived component's render method by implicitly requiring `As` generic.

**NOTE:** Use only when manually setting `as` inside derive's render method. Otherwise, let the compiler infer the `As` generic.

```tsx
deriveClassed<Comp, Props, "div">((props, ref) => (
  <BaseComp as="div" {...props} ref={ref} />
));
```
