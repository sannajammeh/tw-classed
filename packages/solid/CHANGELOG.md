# @tw-classed/solid

## 1.7.0-canary.2

### Patch Changes

- [#137](https://github.com/sannajammeh/tw-classed/pull/137) [`86acac6`](https://github.com/sannajammeh/tw-classed/commit/86acac6abbb963d6a3af6888a3b18e26b834bf53) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Improve solidjs prop splitting

## 1.7.0-canary.1

### Patch Changes

- [#135](https://github.com/sannajammeh/tw-classed/pull/135) [`f04cc69`](https://github.com/sannajammeh/tw-classed/commit/f04cc695ce2d5f643de3f346622cd9bab0b39091) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix solid types - Rename Polymorphic.d.ts to polymorphic.ts to ensure dts plugin emits in bundle

## 1.7.0-canary.0

### Patch Changes

- Updated dependencies [[`97130ec`](https://github.com/sannajammeh/tw-classed/commit/97130ecf63128d0061f3a20a11ef9052b97476a9), [`6fd3d61`](https://github.com/sannajammeh/tw-classed/commit/6fd3d6106e052481d2364cc7fb732ed6acf3f2a1)]:
  - @tw-classed/core@1.7.0-canary.0

## 1.6.0

### Patch Changes

- Updated dependencies [[`e3b9d61e`](https://github.com/sannajammeh/tw-classed/commit/e3b9d61e5952bdabdd614511c080b039eb417a62)]:
  - @tw-classed/core@1.6.0

## 1.5.2

### Patch Changes

- [#119](https://github.com/sannajammeh/tw-classed/pull/119) [`67ec8d98`](https://github.com/sannajammeh/tw-classed/commit/67ec8d984b03b7f51e416f98088c0c90a22fcc04) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release exports the default merger as `cx`, adds additional test cases for cx & react props, bumps all packages to latest

- Updated dependencies [[`67ec8d98`](https://github.com/sannajammeh/tw-classed/commit/67ec8d984b03b7f51e416f98088c0c90a22fcc04)]:
  - @tw-classed/core@1.5.2

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
