# @tw-classed/solid

## 1.3.2-canary.0

### Patch Changes

- [#70](https://github.com/sannajammeh/tw-classed/pull/70) [`a5763359`](https://github.com/sannajammeh/tw-classed/commit/a576335954e8269ef3a03fdd06790eeb9b777e71) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add Solid.js library

  `@tw-classed/solid` is a library that allows you to create classed components in `Solid.js`. It has **1-1 API parity** with `@tw-classed/react`, but with Solid specific internals. Follow the [React guide](/docs) to learn more about the API.

  ```tsx
  import { classed } from "@tw-classed/solid";

  const Button = classed.button("bg-blue-500 text-white p-2 rounded");

  () => <Button>Click me</Button>;
  ```
