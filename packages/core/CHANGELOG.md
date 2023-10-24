# @tw-classed/core

## 1.6.0

### Minor Changes

- [#125](https://github.com/sannajammeh/tw-classed/pull/125) [`e3b9d61e`](https://github.com/sannajammeh/tw-classed/commit/e3b9d61e5952bdabdd614511c080b039eb417a62) Thanks [@sannajammeh](https://github.com/sannajammeh)! - - (Feat): Add support for defaultProps in React api
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

## 1.5.2

### Patch Changes

- [#119](https://github.com/sannajammeh/tw-classed/pull/119) [`67ec8d98`](https://github.com/sannajammeh/tw-classed/commit/67ec8d984b03b7f51e416f98088c0c90a22fcc04) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release exports the default merger as `cx`, adds additional test cases for cx & react props, bumps all packages to latest

## 1.5.1

### Patch Changes

- [#114](https://github.com/sannajammeh/tw-classed/pull/114) [`52abded9`](https://github.com/sannajammeh/tw-classed/commit/52abded95022cca7c16497b08741538b3a05fe88) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add support for array matching compound variants

  - Add support for matched variants to appear as dataAttributes
  - Update dependencies

  chore(core): update parser and types to support array compound variants

  - Update parser to handle array compound variants
  - Update types to handle array compound variants

  feat(react): update types to support array compound variants

  - Update types to handle array compound variants

  test(core): add tests for array compound variants

  - Add tests for array compound variants

  test(compound.spec.tsx): add tests for array compound variants to improve test coverage

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

## 1.4.4

### Patch Changes

- [#101](https://github.com/sannajammeh/tw-classed/pull/101) [`f19df61f`](https://github.com/sannajammeh/tw-classed/commit/f19df61fe812481e97f40b09cd9713380a39470a) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Improve performance for core lib, carries over to React

## 1.4.0

### Minor Changes

- [#82](https://github.com/sannajammeh/tw-classed/pull/82) [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support for `deriveClassed` & `makeStrict`. Updated core internal typing for compatibility.

### Patch Changes

- [#89](https://github.com/sannajammeh/tw-classed/pull/89) [`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support for compoundVariants to be inherit via the composition API.

  Example:

  ```tsx
  const Button = classed.button({
    base: "bg-blue-500 text-white",
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
      },
      color: {
        red: "bg-red-500",
        green: "bg-green-500",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        color: "green"
        class: "super-special-class-modifyer"
      },
    ],
  });

  const GreenButton = classed(Button, {
    defaultVariants: {
      color: "green", // This now triggers the compoundVariant
    },
  });
  ```

## 1.4.0-canary.5

### Patch Changes

- [`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support for compoundVariants to be inherit via the composition API.

  Example:

  ```tsx
  const Button = classed.button({
    base: "bg-blue-500 text-white",
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
      },
      color: {
        red: "bg-red-500",
        green: "bg-green-500",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        color: "green"
        class: "super-special-class-modifyer"
      },
    ],
  });

  const GreenButton = classed(Button, {
    defaultVariants: {
      color: "green", // This now triggers the compoundVariant
    },
  });
  ```

## 1.4.0-canary.1

### Minor Changes

- [#82](https://github.com/sannajammeh/tw-classed/pull/82) [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support for `deriveClassed` & `makeStrict`. Updated core internal typing for compatibility.

## 1.3.2

### Patch Changes

- [#68](https://github.com/sannajammeh/tw-classed/pull/68) [`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support in core lib for `class` & `className` when calling a class producer function

  Example:

  ```js
  const button = classed("bg-blue-500");

  // LitHTML
  html`<button class=${button({ class: "text-white" })}>Click me</button>`;
  ```

## 1.3.2-canary.1

### Patch Changes

- [`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support in core lib for `class` & `className` when calling a class producer function

  Example:

  ```js
  const button = classed("bg-blue-500");

  // LitHTML
  html`<button class=${button({ class: "text-white" })}>Click me</button>`;
  ```

## 1.3.0

### Patch Changes

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`f328e321`](https://github.com/sannajammeh/tw-classed/commit/f328e32140a24d472f7b8d396181c36022afaebd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch to SWC powered bunchee bundler

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

## 1.3.0-canary.4

### Patch Changes

- [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

## 1.3.0-canary.3

### Patch Changes

- [`f328e321`](https://github.com/sannajammeh/tw-classed/commit/f328e32140a24d472f7b8d396181c36022afaebd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch to SWC powered bunchee bundler

## 1.3.0-canary.2

### Patch Changes

- [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

## 1.3.0-canary.1

### Patch Changes

- [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

## 1.2.5

### Patch Changes

- [`9d8f12f4`](https://github.com/sannajammeh/tw-classed/commit/9d8f12f4d0b8cfbc9f05809a1f67fa08b81ccd23) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Widen types of boolean variants

## 1.2.4

### Patch Changes

- [`413c87d1`](https://github.com/sannajammeh/tw-classed/commit/413c87d1ab54fc26793b44c5b49e9082aaf2c183) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export VariantProps from core, document variant props in core docs

## 1.2.3

### Patch Changes

- [#39](https://github.com/sannajammeh/tw-classed/pull/39) [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

## 1.2.3-canary.1

### Patch Changes

- [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

## 1.2.3-canary.0

### Patch Changes

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

## 1.2.2

### Patch Changes

- [#30](https://github.com/sannajammeh/tw-classed/pull/30) [`1cc8c2e6`](https://github.com/sannajammeh/tw-classed/commit/1cc8c2e6dcb407e21897f4360aa1ba4ae608b44e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix core require

## 1.2.1

### Patch Changes

- [#27](https://github.com/sannajammeh/tw-classed/pull/27) [`c6d76b9e`](https://github.com/sannajammeh/tw-classed/commit/c6d76b9e77262a227b6430e32a3e2fc95a32a58f) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes Reflect.has api bug

## 1.2.0

### Patch Changes

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

## 1.2.0-canary.3

### Patch Changes

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

## 1.2.0-canary.2

### Patch Changes

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

## 1.1.0

### Minor Changes

- [#12](https://github.com/sannajammeh/tw-classed/pull/12) [`c6e1ae2`](https://github.com/sannajammeh/tw-classed/commit/c6e1ae2937f3f664c9aee7d19b7d6b552125cf94) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Added full support for compoundVariants, base property in config object

## 1.0.0

### Major Changes

- Final v1 release of all packages. Breaking from alpha: both core and react no longer export default and switched to classed.
