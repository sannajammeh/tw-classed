# beta-docs

## 2.0.23

### Patch Changes

- Updated dependencies [[`f8a2721`](https://github.com/sannajammeh/tw-classed/commit/f8a272128d28d8390d27736898968a268a78593a)]:
  - @tw-classed/react@1.8.0

## 2.0.22

### Patch Changes

- [#132](https://github.com/sannajammeh/tw-classed/pull/132) [`6fd3d61`](https://github.com/sannajammeh/tw-classed/commit/6fd3d6106e052481d2364cc7fb732ed6acf3f2a1) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add `getVariantConfig()` utility to `core` & `react` api's. This extracts the entire parsed variant config from a classed component, also supports nested variants from component composition.

  Usage:

  ```tsx
  const Button = classed("button", {
    variants: {
      color: {
        blue: "bg-blue-500",
      },
    },
  });

  const { variants } = getVariantConfig(Button);
  variants.color.blue; // "bg-blue-500"
  ```

- Updated dependencies [[`97130ec`](https://github.com/sannajammeh/tw-classed/commit/97130ecf63128d0061f3a20a11ef9052b97476a9), [`6fd3d61`](https://github.com/sannajammeh/tw-classed/commit/6fd3d6106e052481d2364cc7fb732ed6acf3f2a1)]:
  - @tw-classed/react@1.7.0

## 2.0.22-canary.0

### Patch Changes

- [#132](https://github.com/sannajammeh/tw-classed/pull/132) [`6fd3d61`](https://github.com/sannajammeh/tw-classed/commit/6fd3d6106e052481d2364cc7fb732ed6acf3f2a1) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add `getVariantConfig()` utility to `core` & `react` api's. This extracts the entire parsed variant config from a classed component, also supports nested variants from component composition.

  Usage:

  ```tsx
  const Button = classed("button", {
    variants: {
      color: {
        blue: "bg-blue-500",
      },
    },
  });

  const { variants } = getVariantConfig(Button);
  variants.color.blue; // "bg-blue-500"
  ```

- Updated dependencies [[`97130ec`](https://github.com/sannajammeh/tw-classed/commit/97130ecf63128d0061f3a20a11ef9052b97476a9), [`6fd3d61`](https://github.com/sannajammeh/tw-classed/commit/6fd3d6106e052481d2364cc7fb732ed6acf3f2a1)]:
  - @tw-classed/react@1.7.0-canary.0

## 2.0.21

### Patch Changes

- Updated dependencies [[`50e69a7e`](https://github.com/sannajammeh/tw-classed/commit/50e69a7ebfd22377b798eda2dd2f21fea5a14dfd)]:
  - @tw-classed/react@1.6.1

## 2.0.20

### Patch Changes

- Updated dependencies [[`e3b9d61e`](https://github.com/sannajammeh/tw-classed/commit/e3b9d61e5952bdabdd614511c080b039eb417a62)]:
  - @tw-classed/react@1.6.0

## 2.0.19

### Patch Changes

- [#119](https://github.com/sannajammeh/tw-classed/pull/119) [`67ec8d98`](https://github.com/sannajammeh/tw-classed/commit/67ec8d984b03b7f51e416f98088c0c90a22fcc04) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release exports the default merger as `cx`, adds additional test cases for cx & react props, bumps all packages to latest

- Updated dependencies [[`67ec8d98`](https://github.com/sannajammeh/tw-classed/commit/67ec8d984b03b7f51e416f98088c0c90a22fcc04)]:
  - @tw-classed/react@1.5.2

## 2.0.18

### Patch Changes

- Updated dependencies [[`52abded9`](https://github.com/sannajammeh/tw-classed/commit/52abded95022cca7c16497b08741538b3a05fe88)]:
  - @tw-classed/react@1.5.1

## 2.0.17

### Patch Changes

- [#109](https://github.com/sannajammeh/tw-classed/pull/109) [`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add documentation for Data attributes

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

- Updated dependencies [[`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776), [`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36)]:
  - @tw-classed/react@1.5.0

## 2.0.17-canary.1

### Patch Changes

- [`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Add documentation for Data attributes

- Updated dependencies [[`d46b615f`](https://github.com/sannajammeh/tw-classed/commit/d46b615f3697d1a159367fa7c07b2c7a25f8b776)]:
  - @tw-classed/react@1.5.0-canary.1

## 2.0.17-canary.0

### Patch Changes

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

- Updated dependencies [[`233bddfd`](https://github.com/sannajammeh/tw-classed/commit/233bddfd28bed25a40c38a52bb75164dae7bfb36)]:
  - @tw-classed/react@1.5.0-canary.0

## 2.0.16

### Patch Changes

- Updated dependencies []:
  - @tw-classed/react@1.4.4

## 2.0.15

### Patch Changes

- Updated dependencies [[`714d2389`](https://github.com/sannajammeh/tw-classed/commit/714d238977083a9a60cac012b459988a1a372629)]:
  - @tw-classed/react@1.4.3

## 2.0.14

### Patch Changes

- Updated dependencies [[`1715d071`](https://github.com/sannajammeh/tw-classed/commit/1715d0712a229a61879545022226fe33e83967ef)]:
  - @tw-classed/react@1.4.2

## 2.0.13

### Patch Changes

- Updated dependencies [[`db2effb5`](https://github.com/sannajammeh/tw-classed/commit/db2effb5a0947bae667c847e039caacecd030d11)]:
  - @tw-classed/react@1.4.1

## 2.0.12

### Patch Changes

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6), [`fc48bf56`](https://github.com/sannajammeh/tw-classed/commit/fc48bf56799b41b6fcb5bffb01e7911e9f3a9693), [`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847), [`d392ab1c`](https://github.com/sannajammeh/tw-classed/commit/d392ab1cfb74cd45d86637f0fcc19c6de2cdb2e6), [`b183d8ab`](https://github.com/sannajammeh/tw-classed/commit/b183d8ab03ea864c65927226bb6dc9ada250c250), [`81a77612`](https://github.com/sannajammeh/tw-classed/commit/81a77612d73058a515fcc6ed5ee548c89a0b8cb6)]:
  - @tw-classed/react@1.4.0

## 2.0.12-canary.5

### Patch Changes

- Updated dependencies [[`fc48bf56`](https://github.com/sannajammeh/tw-classed/commit/fc48bf56799b41b6fcb5bffb01e7911e9f3a9693)]:
  - @tw-classed/react@1.4.0-canary.6

## 2.0.12-canary.4

### Patch Changes

- Updated dependencies [[`785bcaaa`](https://github.com/sannajammeh/tw-classed/commit/785bcaaada76f9b19edce4b1724d7850dcb4fbd6)]:
  - @tw-classed/react@1.4.0-canary.5

## 2.0.12-canary.3

### Patch Changes

- Updated dependencies [[`b183d8ab`](https://github.com/sannajammeh/tw-classed/commit/b183d8ab03ea864c65927226bb6dc9ada250c250)]:
  - @tw-classed/react@1.4.0-canary.4

## 2.0.12-canary.2

### Patch Changes

- Updated dependencies [[`d392ab1c`](https://github.com/sannajammeh/tw-classed/commit/d392ab1cfb74cd45d86637f0fcc19c6de2cdb2e6)]:
  - @tw-classed/react@1.4.0-canary.3

## 2.0.12-canary.1

### Patch Changes

- Updated dependencies [[`81a77612`](https://github.com/sannajammeh/tw-classed/commit/81a77612d73058a515fcc6ed5ee548c89a0b8cb6)]:
  - @tw-classed/react@1.4.0-canary.2

## 2.0.12-canary.0

### Patch Changes

- Updated dependencies [[`0f5f46fa`](https://github.com/sannajammeh/tw-classed/commit/0f5f46fa6ce9f5eb78115c5a04fd9bc06f64c847)]:
  - @tw-classed/react@1.4.0-canary.1

## 2.0.11

### Patch Changes

- Updated dependencies [[`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2), [`df315431`](https://github.com/sannajammeh/tw-classed/commit/df3154317d2513b641371b80ec05c05d5daec70e)]:
  - @tw-classed/react@1.3.2

## 2.0.11-canary.1

### Patch Changes

- Updated dependencies [[`091ef6a4`](https://github.com/sannajammeh/tw-classed/commit/091ef6a4d8fe9c91f4a75f0efd99db0caf2470b2)]:
  - @tw-classed/react@1.3.2-canary.1

## 2.0.11-canary.0

### Patch Changes

- Updated dependencies [[`df315431`](https://github.com/sannajammeh/tw-classed/commit/df3154317d2513b641371b80ec05c05d5daec70e)]:
  - @tw-classed/react@1.3.2-canary.0

## 2.0.10

### Patch Changes

- Updated dependencies [[`4ffde042`](https://github.com/sannajammeh/tw-classed/commit/4ffde0421ee2d99d7c40c4fe89583eeb4b86591e)]:
  - @tw-classed/react@1.3.1

## 2.0.9

### Patch Changes

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

- [#61](https://github.com/sannajammeh/tw-classed/pull/61) [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

- Updated dependencies [[`47437bca`](https://github.com/sannajammeh/tw-classed/commit/47437bcab160071d863280a9f9541af6836a02b1), [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912), [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd), [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596)]:
  - @tw-classed/react@1.3.0

## 2.0.9-canary.4

### Patch Changes

- [`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fixes "This module is a CJS module" in node.js with type:"module"

- Updated dependencies [[`e7596bb9`](https://github.com/sannajammeh/tw-classed/commit/e7596bb9e0672ba22a83bcafae2e3925848c4596)]:
  - @tw-classed/react@1.3.0-canary.4

## 2.0.9-canary.3

### Patch Changes

- Updated dependencies []:
  - @tw-classed/react@1.3.0-canary.3

## 2.0.9-canary.2

### Patch Changes

- [`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export DerivedComponentType to handle as prop in derived components

- Updated dependencies [[`29570c7e`](https://github.com/sannajammeh/tw-classed/commit/29570c7e185b2ee1b92259a3a97629ce7650e9dd)]:
  - @tw-classed/react@1.3.0-canary.2

## 2.0.9-canary.1

### Patch Changes

- [`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912) Thanks [@sannajammeh](https://github.com/sannajammeh)! - This release extends core to support the createClassed API, adds improvements to the documentation

- Updated dependencies [[`79be37a2`](https://github.com/sannajammeh/tw-classed/commit/79be37a2543a46b85358f44f7ee8c27f729fb912)]:
  - @tw-classed/react@1.3.0-canary.1

## 2.0.9-canary.0

### Patch Changes

- Updated dependencies [[`47437bca`](https://github.com/sannajammeh/tw-classed/commit/47437bcab160071d863280a9f9541af6836a02b1)]:
  - @tw-classed/react@1.3.0-canary.0

## 2.0.8

### Patch Changes

- Updated dependencies [[`9d8f12f4`](https://github.com/sannajammeh/tw-classed/commit/9d8f12f4d0b8cfbc9f05809a1f67fa08b81ccd23)]:
  - @tw-classed/react@1.2.5

## 2.0.7

### Patch Changes

- [`413c87d1`](https://github.com/sannajammeh/tw-classed/commit/413c87d1ab54fc26793b44c5b49e9082aaf2c183) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Export VariantProps from core, document variant props in core docs

- Updated dependencies []:
  - @tw-classed/react@1.2.4

## 2.0.6

### Patch Changes

- [#39](https://github.com/sannajammeh/tw-classed/pull/39) [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

- Updated dependencies [[`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97), [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7)]:
  - @tw-classed/react@1.2.3

## 2.0.6-canary.1

### Patch Changes

- [`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97) Thanks [@sannajammeh](https://github.com/sannajammeh)! - ES2018 build spec, code refactor, readme updates

- Updated dependencies [[`55e8b2b8`](https://github.com/sannajammeh/tw-classed/commit/55e8b2b808fbcf611eec3e0551727469ddc16e97)]:
  - @tw-classed/react@1.2.3-canary.1

## 2.0.6-canary.0

### Patch Changes

- [#33](https://github.com/sannajammeh/tw-classed/pull/33) [`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix numeric variants

- Updated dependencies [[`92617148`](https://github.com/sannajammeh/tw-classed/commit/92617148c2243b2d6a1fe42ccb1cfaa6fe1390d7)]:
  - @tw-classed/react@1.2.3-canary.0

## 2.0.5

### Patch Changes

- [#30](https://github.com/sannajammeh/tw-classed/pull/30) [`1cc8c2e6`](https://github.com/sannajammeh/tw-classed/commit/1cc8c2e6dcb407e21897f4360aa1ba4ae608b44e) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Fix core require

- Updated dependencies [[`1cc8c2e6`](https://github.com/sannajammeh/tw-classed/commit/1cc8c2e6dcb407e21897f4360aa1ba4ae608b44e)]:
  - @tw-classed/react@1.2.2

## 2.0.4

### Patch Changes

- Updated dependencies [[`c6d76b9e`](https://github.com/sannajammeh/tw-classed/commit/c6d76b9e77262a227b6430e32a3e2fc95a32a58f)]:
  - @tw-classed/react@1.2.1

## 2.0.3

### Patch Changes

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Document proxy API

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

- Updated dependencies [[`dd615ec4`](https://github.com/sannajammeh/tw-classed/commit/dd615ec433a4b2b6fe1bb96029eda277328aaaaf), [`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712), [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b), [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28)]:
  - @tw-classed/react@1.2.0

## 2.0.3-canary.3

### Patch Changes

- [#21](https://github.com/sannajammeh/tw-classed/pull/21) [`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Final Proxty API & base property

- Updated dependencies [[`01c1a8b3`](https://github.com/sannajammeh/tw-classed/commit/01c1a8b3efb3d65ded722e20d5e570034a5f2b28)]:
  - @tw-classed/react@1.2.0-canary.3

## 2.0.3-canary.2

### Patch Changes

- [#19](https://github.com/sannajammeh/tw-classed/pull/19) [`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Switch core bundler to unbuild for bundleless exports

- Updated dependencies [[`2d24a386`](https://github.com/sannajammeh/tw-classed/commit/2d24a3864977721d88772b0540e727fb1145459b)]:
  - @tw-classed/react@1.2.0-canary.2

## 2.0.3-canary.1

### Patch Changes

- [`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Document proxy API

- Updated dependencies [[`da54b916`](https://github.com/sannajammeh/tw-classed/commit/da54b9160435d8f85bd789093389f67c76142712)]:
  - @tw-classed/react@1.2.0-canary.1

## 2.0.3-canary.0

### Patch Changes

- Updated dependencies [[`dd615ec4`](https://github.com/sannajammeh/tw-classed/commit/dd615ec433a4b2b6fe1bb96029eda277328aaaaf)]:
  - @tw-classed/react@1.2.0-canary.0

## 2.0.2

### Patch Changes

- Updated dependencies [[`cd2d9e28`](https://github.com/sannajammeh/tw-classed/commit/cd2d9e287440b9a0fa9e5dc096cc08d61634d3fc)]:
  - @tw-classed/react@1.1.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`c6e1ae2`](https://github.com/sannajammeh/tw-classed/commit/c6e1ae2937f3f664c9aee7d19b7d6b552125cf94)]:
  - @tw-classed/react@1.1.0

## 2.0.0

### Major Changes

- [#6](https://github.com/sannajammeh/tw-classed/pull/6) [`810ae8b`](https://github.com/sannajammeh/tw-classed/commit/810ae8ba4dee3c49ecdfb9fe64c156c57a1999dc) Thanks [@sannajammeh](https://github.com/sannajammeh)! - Update to stable docs

## 1.0.0

### Major Changes

- Final v1 release of all packages. Breaking from alpha: both core and react no longer export default and switched to classed.

### Patch Changes

- Updated dependencies []:
  - @tw-classed/react@1.0.0
