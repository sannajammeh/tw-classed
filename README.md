![tw-classed](https://raw.githubusercontent.com/sannajammeh/tw-classed/master/tw-classed.jpg)

# TW Classed

Monorepo of the TW Classed project. Consists of Core and React packages.

[Full Documentation](https://tw-classed.vercel.app)

## React

The react package is a wrapper around the core package that provides an easy to way to create classed components. See the [React Docs](https://tw-classed.vercel.app)

```tsx
// Button.tsx
import { classed } from "@tw-classed/react";

const Button = classed("px-4 py-2", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
    },
  },
});

// In your App

const App = () => {
  return (
    <>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </>
  );
};
```


## Core

The core package is a library that provides a set of functions to help you build your own classed components.

See the [Core Docs](https://tw-classed.vercel.app/core/Introduction)

```ts
import { classed } from "@tw-classed/core";

const button = classed("px-4 py-2", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
    },
  },
});

// In your template
const Button = document.createElement("button");
Button.className = button({ color: "primary" });

// Or with a framework (Like lit-html)
const Button = () => html`<button class="${button({ color: "primary" })}" />`;
```

## License

MIT

#### Discord community
![Discord Banner 2](https://discordapp.com/api/guilds/1049812722319118416/widget.png?style=banner2)
