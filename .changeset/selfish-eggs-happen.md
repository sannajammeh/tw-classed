---
"@tw-classed/core": patch
"@tw-classed/react": patch
---

Adds support in core lib for `class` & `className` when calling a class producer function

Example:

```js
const button = classed("bg-blue-500");

// LitHTML
html`<button class=${button({ class: "text-white" })}>Click me</button>`;
```
