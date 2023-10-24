# @tw-classed/react

## 1.6.1

### Patch Changes

- [#127](https://github.com/sannajammeh/tw-classed/pull/127) [`50e69a7e`](https://github.com/sannajammeh/tw-classed/commit/50e69a7ebfd22377b798eda2dd2f21fea5a14dfd) Thanks [@emmanuelchucks](https://github.com/emmanuelchucks)! - add proper autocompletion for default props

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

- [#109](https://github.com/sannajammeh/tw-classed/pull/109) [`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add documentation for Data attributes

- Updated dependencies [[`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36)]:
  - @tw-classed/core@1.5.0

## 1.5.0-canary.1

### Patch Changes

- [`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add documentation for Data attributes

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

## 1.4.3

### Patch Changes

- [#96](https://github.com/sannajammeh/tw-classed/pull/96) [`714d2389`](https://github.com/sannajammeh/tw-classed/commit/714d238977083a9a60cac012b459988a1a372629) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes the merged className order from classed->component->variants to classed->variants->component

## 1.4.2

### Patch Changes

- [`1715d071`](https://github.com/sannajammeh/tw-classed/commit/1715d0712a229a61879545022226fe33e83967ef) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Refactors displayName set in #a382966 to use .name and .displayName raw when set on parent component

## 1.4.1

### Patch Changes

- [`db2effb5`](https://github.com/sannajammeh/tw-classed/commit/db2effb5a0947bae667c847e039caacecd030d11) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Extend inherited components displayName if not classed component

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

- [#89](https://github.com/sannajammeh/tw-classed/pull/89) [`fc48bf56`](https://github.com/sannajammeh/tw-classed/commit/fc48bf56799b41b6fcb5bffb01e7911e9f3a9693) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Sets target to es2018 in tsconfig to allow bundling to newer syntax

- [#89](https://github.com/sannajammeh/tw-classed/pull/89) [`d392ab1c`](https://github.com/sannajammeh/tw-classed/commit/d392ab1cfb74cd45d86637f0fcc19c6de2cdb2e6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export Classed Proxy type due to TS error on pnpm

- [#89](https://github.com/sannajammeh/tw-classed/pull/89) [`b183d8ab`](https://github.com/sannajammeh/tw-classed/commit/b183d8ab03ea864c65927226bb6dc9ada250c250) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Reverse insert order of first element composition to allow overriding of defaultVariants & other variant properties when re-classing

- [#89](https://github.com/sannajammeh/tw-classed/pull/89) [`81a77612`](https://github.com/sannajammeh/tw-classed/commit/81a77612d73058a515fcc6ed5ee548c89a0b8cb6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes As prop usage inside a derived component's render method by implicitly requiring `As` generic.

  **NOTE:** Use only when manually setting `as` inside derive's render method. Otherwise, let the compiler infer the `As` generic.

  ```tsx
  deriveClassed<Comp, Props, "div">((props, ref) => (
    <BaseComp as="div" {...props} ref={ref} />
  ));
  ```

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6), [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847)]:
  - @tw-classed/core@1.4.0

## 1.4.0-canary.6

### Patch Changes

- [`fc48bf56`](https://github.com/sannajammeh/tw-classed/commit/fc48bf56799b41b6fcb5bffb01e7911e9f3a9693) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Sets target to es2018 in tsconfig to allow bundling to newer syntax

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

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6)]:
  - @tw-classed/core@1.4.0-canary.5

## 1.4.0-canary.4

### Patch Changes

- [`b183d8ab`](https://github.com/sannajammeh/tw-classed/commit/b183d8ab03ea864c65927226bb6dc9ada250c250) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Reverse insert order of first element composition to allow overriding of defaultVariants & other variant properties when re-classing

## 1.4.0-canary.3

### Patch Changes

- [`d392ab1c`](https://github.com/sannajammeh/tw-classed/commit/d392ab1cfb74cd45d86637f0fcc19c6de2cdb2e6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export Classed Proxy type due to TS error on pnpm

## 1.4.0-canary.2

### Patch Changes

- [`81a77612`](https://github.com/sannajammeh/tw-classed/commit/81a77612d73058a515fcc6ed5ee548c89a0b8cb6) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes As prop usage inside a derived component's render method by implicitly requiring `As` generic.

  **NOTE:** Use only when manually setting `as` inside derive's render method. Otherwise, let the compiler infer the `As` generic.

  ```tsx
  deriveClassed<Comp, Props, "div">((props, ref) => (
    <BaseComp as="div" {...props} ref={ref} />
  ));
  ```

## 1.4.0-canary.1

### Minor Changes

- [#82](https://github.com/sannajammeh/tw-classed/pull/82) [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support for `deriveClassed` & `makeStrict`. Updated core internal typing for compatibility.

### Patch Changes

- Updated dependencies [[`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847)]:
  - @tw-classed/core@1.4.0-canary.1

## 1.3.2

### Patch Changes

- [#68](https://github.com/sannajammeh/tw-classed/pull/68) [`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support in core lib for `class` & `className` when calling a class producer function

  Example:

  ```js
  const button = classed("bg-blue-500");

  // LitHTML
  html`<button class=${button({ class: "text-white" })}>Click me</button>`;
  ```

- [#65](https://github.com/sannajammeh/tw-classed/pull/65) [`df315431`](https://github.com/sannajammeh/tw-classed/commit/df3154317d2513b641371b80ec05c05d5daec70e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This patch adds support for Typescript `interoperability` between the `@tw-classed/core` and `@tw-classed/react` packages. This makes it possible to use the `@tw-classed/core` in a framework agnostic design system and then use the `@tw-classed/react` in a React application.

  ```tsx
  // Design system
  import { classed } from "@tw-classed/core";

  export const button = classed({
    base: "bg-blue-500 text-white",
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
      },
    },
  });

  // React application
  import { button } from "design-system";
  import { classed } from "@tw-classed/react";

  export const Button = classed.button(button); // Variants are automatically inferred
  ```

- Updated dependencies [[`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2)]:
  - @tw-classed/core@1.3.2

## 1.3.2-canary.1

### Patch Changes

- [`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Adds support in core lib for `class` & `className` when calling a class producer function

  Example:

  ```js
  const button = classed("bg-blue-500");

  // LitHTML
  html`<button class=${button({ class: "text-white" })}>Click me</button>`;
  ```

- Updated dependencies [[`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2)]:
  - @tw-classed/core@1.3.2-canary.1

## 1.3.2-canary.0

### Patch Changes

- [#65](https://github.com/sannajammeh/tw-classed/pull/65) [`df315431`](https://github.com/sannajammeh/tw-classed/commit/df3154317d2513b641371b80ec05c05d5daec70e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This patch adds support for Typescript `interoperability` between the `@tw-classed/core` and `@tw-classed/react` packages. This makes it possible to use the `@tw-classed/core` in a framework agnostic design system and then use the `@tw-classed/react` in a React application.

  ```tsx
  // Design system
  import { classed } from "@tw-classed/core";

  export const button = classed({
    base: "bg-blue-500 text-white",
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
      },
    },
  });

  // React application
  import { button } from "design-system";
  import { classed } from "@tw-classed/react";

  export const Button = classed.button(button); // Variants are automatically inferred
  ```

## 1.3.1

### Patch Changes

- [`4ffde042`](https://github.com/sannajammeh/tw-classed/commit/4ffde0421ee2d99d7c40c4fe89583eeb4b86591e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export ClassedConfig type

## 1.3.0

### Minor Changes

- [#52](https://github.com/sannajammeh/tw-classed/pull/52) [`47437bca`](https://github.com/sannajammeh/tw-classed/commit/47437bcab160071d863280a9f9541af6836a02b1) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add createClassed API to extend the classed function with additional functionality. Currently only "merger" prop is supported

### Patch Changes

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

- Updated dependencies [[`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912), [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd), [`f328e321`](https://github.com/sannajammeh/tw-classed/commit/f328e32140a24d472f7b8d396181c36022afaebd), [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596)]:
  - @tw-classed/core@1.3.0

## 1.3.0-canary.4

### Patch Changes

- [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

- Updated dependencies [[`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596)]:
  - @tw-classed/core@1.3.0-canary.4

## 1.3.0-canary.3

### Patch Changes

- Updated dependencies [[`f328e321`](https://github.com/sannajammeh/tw-classed/commit/f328e32140a24d472f7b8d396181c36022afaebd)]:
  - @tw-classed/core@1.3.0-canary.3

## 1.3.0-canary.2

### Patch Changes

- [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

- Updated dependencies [[`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd)]:
  - @tw-classed/core@1.3.0-canary.2

## 1.3.0-canary.1

### Patch Changes

- [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

- Updated dependencies [[`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912)]:
  - @tw-classed/core@1.3.0-canary.1

## 1.3.0-canary.0

### Minor Changes

- [#52](https://github.com/sannajammeh/tw-classed/pull/52) [`47437bca`](https://github.com/sannajammeh/tw-classed/commit/47437bcab160071d863280a9f9541af6836a02b1) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add createClassed API to extend the classed function with additional functionality. Currently only "merger" prop is supported

## 1.2.5

### Patch Changes

- [`9d8f12f4`](https://github.com/sannajammeh/tw-classed/commit/9d8f12f4d0b8cfbc9f05809a1f67fa08b81ccd23) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Widen types of boolean variants

- Updated dependencies [[`9d8f12f4`](https://github.com/sannajammeh/tw-classed/commit/9d8f12f4d0b8cfbc9f05809a1f67fa08b81ccd23)]:
  - @tw-classed/core@1.2.5

## 1.2.4

### Patch Changes

- Updated dependencies [[`413c87d1`](https://github.com/sannajammeh/tw-classed/commit/413c87d1ab54fc26793b44c5b49e9082aaf2c183)]:
  - @tw-classed/core@1.2.4

## 1.2.3

### Patch Changes

- [#39](https://github.com/sannajammeh/tw-classed/pull/39) [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

- Updated dependencies [[`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97), [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7)]:
  - @tw-classed/core@1.2.3

## 1.2.3-canary.1

### Patch Changes

- [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

- Updated dependencies [[`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97)]:
  - @tw-classed/core@1.2.3-canary.1

## 1.2.3-canary.0

### Patch Changes

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

- Updated dependencies [[`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7)]:
  - @tw-classed/core@1.2.3-canary.0

## 1.2.2

### Patch Changes

- [#30](https://github.com/sannajammeh/tw-classed/pull/30) [`1cc8c2e6`](https://github.com/sannajammeh/tw-classed/commit/1cc8c2e6dcb407e21897f4360aa1ba4ae608b44e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix core require

- Updated dependencies [[`1cc8c2e6`](https://github.com/sannajammeh/tw-classed/commit/1cc8c2e6dcb407e21897f4360aa1ba4ae608b44e)]:
  - @tw-classed/core@1.2.2

## 1.2.1

### Patch Changes

- [#27](https://github.com/sannajammeh/tw-classed/pull/27) [`c6d76b9e`](https://github.com/sannajammeh/tw-classed/commit/c6d76b9e77262a227b6430e32a3e2fc95a32a58f) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes Reflect.has api bug

- Updated dependencies [[`c6d76b9e`](https://github.com/sannajammeh/tw-classed/commit/c6d76b9e77262a227b6430e32a3e2fc95a32a58f)]:
  - @tw-classed/core@1.2.1

## 1.2.0

### Minor Changes

- [#17](https://github.com/sannajammeh/tw-classed/pull/17) [`dd615ec4`](https://github.com/sannajammeh/tw-classed/commit/dd615ec433a4b2b6fe1bb96029eda277328aaaaf) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Added support for Proxy API i.e `classed.button(...args)`.
  Regular classed api is unchanged and will use the proxy API to call the main method

### Patch Changes

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Document proxy API

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

- Updated dependencies [[`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b), [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28)]:
  - @tw-classed/core@1.2.0

## 1.2.0-canary.3

### Patch Changes

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

- Updated dependencies [[`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28)]:
  - @tw-classed/core@1.2.0-canary.3

## 1.2.0-canary.2

### Patch Changes

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

- Updated dependencies [[`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b)]:
  - @tw-classed/core@1.2.0-canary.2

## 1.2.0-canary.1

### Patch Changes

- [`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Document proxy API

## 1.2.0-canary.0

### Minor Changes

- [`dd615ec4`](https://github.com/sannajammeh/tw-classed/commit/dd615ec433a4b2b6fe1bb96029eda277328aaaaf) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Added support for Proxy API i.e `classed.button(...args)`.
  Regular classed api is unchanged and will use the proxy API to call the main method

## 1.1.1

### Patch Changes

- [#15](https://github.com/sannajammeh/tw-classed/pull/15) [`cd2d9e28`](https://github.com/sannajammeh/tw-classed/commit/cd2d9e287440b9a0fa9e5dc096cc08d61634d3fc) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Removed use-client directive from ESM

## 1.1.0

### Minor Changes

- [#12](https://github.com/sannajammeh/tw-classed/pull/12) [`c6e1ae2`](https://github.com/sannajammeh/tw-classed/commit/c6e1ae2937f3f664c9aee7d19b7d6b552125cf94) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Added full support for compoundVariants, base property in config object

### Patch Changes

- Updated dependencies [[`c6e1ae2`](https://github.com/sannajammeh/tw-classed/commit/c6e1ae2937f3f664c9aee7d19b7d6b552125cf94)]:
  - @tw-classed/core@1.1.0

## 1.0.0

### Major Changes

- Final v1 release of all packages. Breaking from alpha: both core and react no longer export default and switched to classed.

### Patch Changes

- Updated dependencies []:
  - @tw-classed/core@1.0.0
