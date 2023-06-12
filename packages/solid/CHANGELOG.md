# @tw-classed/solid

## 1.5.1

### Patch Changes

- Updated dependencies [[`52abded9`](https://github.com/sannajammeh/tw-classed/commit/52abded95022cca7c16497b08741538b3a05fe88)]:
  - @tw-classed/core@1.5.1

## 1.5.0

### Minor Changes

- [#105](https://github.com/sannajammeh/tw-classed/pull/105) [`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36) Thanks [@Xiot](https://github.com/Xiot)! - Adds support for matched variants to appear as dataAttributes

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

### Patch Changes

- Updated dependencies [[`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36)]:
  - @tw-classed/core@1.5.0

## 1.5.0-canary.0

### Minor Changes

- [#105](https://github.com/sannajammeh/tw-classed/pull/105) [`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36) Thanks [@Xiot](https://github.com/Xiot)! - Adds support for matched variants to appear as dataAttributes

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

### Patch Changes

- Updated dependencies [[`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36)]:
  - @tw-classed/core@1.5.0-canary.0

## 1.4.4

### Patch Changes

- Updated dependencies [[`f19df61f`](https://github.com/sannajammeh/tw-classed/commit/f19df61fe812481e97f40b09cd9713380a39470a)]:
  - @tw-classed/core@1.4.4

## 1.4.0

### Patch Changes

- [#70](https://github.com/sannajammeh/tw-classed/pull/70) [`a5763359`](https://github.com/sannajammeh/tw-classed/commit/a576335954e8269ef3a03fdd06790eeb9b777e71) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add Solid.js library

  `@tw-classed/solid` is a library that allows you to create classed components in `Solid.js`. It has **1-1 API parity** with `@tw-classed/react`, but with Solid specific internals. Follow the [React guide](/docs) to learn more about the API.

  ```tsx
  import { classed } from "@tw-classed/solid";

  const Button = classed.button("bg-blue-500 text-white p-2 rounded");

  () => <Button>Click me</Button>;
  ```

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6), [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847)]:
  - @tw-classed/core@1.4.0

## 1.4.0-canary.5

### Patch Changes

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6)]:
  - @tw-classed/core@1.4.0-canary.5

## 1.4.0-canary.1

### Patch Changes

- Updated dependencies [[`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847)]:
  - @tw-classed/core@1.4.0-canary.1

## 1.3.2-canary.0

### Patch Changes

- [#70](https://github.com/sannajammeh/tw-classed/pull/70) [`a5763359`](https://github.com/sannajammeh/tw-classed/commit/a576335954e8269ef3a03fdd06790eeb9b777e71) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add Solid.js library

  `@tw-classed/solid` is a library that allows you to create classed components in `Solid.js`. It has **1-1 API parity** with `@tw-classed/react`, but with Solid specific internals. Follow the [React guide](/docs) to learn more about the API.

  ```tsx
  import { classed } from "@tw-classed/solid";

  const Button = classed.button("bg-blue-500 text-white p-2 rounded");

  () => <Button>Click me</Button>;
  ```
