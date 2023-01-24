---
"@tw-classed/solid": patch
---

Add Solid.js library

`@tw-classed/solid` is a library that allows you to create classed components in `Solid.js`. It has **1-1 API parity** with `@tw-classed/react`, but with Solid specific internals. Follow the [React guide](/docs) to learn more about the API.

```tsx
import { classed } from "@tw-classed/solid";

const Button = classed.button("bg-blue-500 text-white p-2 rounded");

() => <Button>Click me</Button>;
```
