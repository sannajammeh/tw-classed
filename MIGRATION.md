# Migration Guide: v1.x to v2.0

This guide will help you migrate your codebase from TW-Classed v1.x to v2.0.

## Overview of Breaking Changes

v2.0 introduces significant API changes to improve alignment with modern React patterns:

1. **`as` prop replaced with `render` prop** - New polymorphic component API
2. **`deriveClassed` removed** - Simplified component extension pattern
3. **`makeStrict` removed** - Strict mode API deprecated
4. **Type system updates** - Removed `DerivedComponentType` and `StrictComponentType`
5. **New peer dependency** - Requires `@base-ui/react` v1.0.0+

## Installation

### Update Dependencies

```bash
# Update tw-classed packages
pnpm add @tw-classed/react@^2.0.0 @tw-classed/core@^2.0.0

# Add new peer dependency
pnpm add @base-ui/react@^1.0.0

# Or with npm
npm install @tw-classed/react@^2.0.0 @tw-classed/core@^2.0.0 @base-ui/react@^1.0.0

# Or with yarn
yarn add @tw-classed/react@^2.0.0 @tw-classed/core@^2.0.0 @base-ui/react@^1.0.0
```

## Migration Steps

### 1. Replace `as` Prop with `render` Prop

The `as` prop has been replaced with the `render` prop for polymorphic components.

#### JSX Element Syntax

**Before (v1.x):**
```tsx
import { classed } from "@tw-classed/react";

const Button = classed.button("px-4 py-2 bg-blue-500");

// Polymorphic usage
<Button as="a" href="/home">
  Go Home
</Button>

<Button as={Link} to="/dashboard">
  Dashboard
</Button>
```

**After (v2.0):**
```tsx
import { classed } from "@tw-classed/react";

const Button = classed.button("px-4 py-2 bg-blue-500");

// Polymorphic usage
<Button render={<a href="/home" />}>
  Go Home
</Button>

<Button render={<Link to="/dashboard" />}>
  Dashboard
</Button>
```

#### Function Syntax (Advanced)

v2.0 also supports a function form for the `render` prop:

```tsx
<Button
  color="blue"
  render={(props) => (
    <a {...props} href="/contact">
      {props.children}
    </a>
  )}
>
  Contact Us
</Button>
```

### 2. Update Component Extension Pattern

The `deriveClassed` API has been removed in favor of simple wrapper components.

**Before (v1.x):**
```tsx
import { classed, deriveClassed, ComponentProps } from "@tw-classed/react";

const ButtonBase = classed.button({
  base: "px-4 py-2",
  variants: {
    color: {
      blue: "bg-blue-500",
      red: "bg-red-500",
    },
  },
});

type ButtonProps = ComponentProps<typeof ButtonBase> & {
  icon?: React.ReactNode;
};

// Using deriveClassed
export const Button = deriveClassed<typeof ButtonBase, ButtonProps>(
  ({ children, icon, ...rest }, ref) => {
    return (
      <ButtonBase {...rest} ref={ref}>
        {icon && <span>{icon}</span>}
        {children}
      </ButtonBase>
    );
  }
);
```

**After (v2.0):**
```tsx
import { classed, ComponentProps } from "@tw-classed/react";

const ButtonBase = classed.button({
  base: "px-4 py-2",
  variants: {
    color: {
      blue: "bg-blue-500",
      red: "bg-red-500",
    },
  },
});

type ButtonProps = ComponentProps<typeof ButtonBase> & {
  icon?: React.ReactNode;
};

// Simple wrapper component
export function Button({ children, icon, ...rest }: ButtonProps) {
  return (
    <ButtonBase {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </ButtonBase>
  );
}
```

#### With Ref Forwarding

If your component needs ref forwarding:

```tsx
import { forwardRef } from "react";
import { classed, ComponentProps } from "@tw-classed/react";

const ButtonBase = classed.button({
  base: "px-4 py-2",
  variants: {
    color: {
      blue: "bg-blue-500",
      red: "bg-red-500",
    },
  },
});

type ButtonProps = ComponentProps<typeof ButtonBase> & {
  icon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, ...rest }, ref) => {
    return (
      <ButtonBase {...rest} ref={ref}>
        {icon && <span>{icon}</span>}
        {children}
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";
```

#### Polymorphic Extended Components

If you need polymorphism in extended components, use the `render` prop on the base:

**Before (v1.x):**
```tsx
const Button = deriveClassed<typeof ButtonBase, ButtonProps>(
  ({ children, icon, ...rest }, ref) => {
    return (
      <ButtonBase {...rest} ref={ref}>
        {icon && <span>{icon}</span>}
        {children}
      </ButtonBase>
    );
  }
);

// Usage
<Button as="a" href="/" icon={<LinkIcon />}>
  Link
</Button>
```

**After (v2.0):**
```tsx
function Button({ children, icon, href, ...rest }: ButtonProps & { href?: string }) {
  return (
    <ButtonBase
      {...rest}
      render={href ? <a href={href} /> : undefined}
    >
      {icon && <span>{icon}</span>}
      {children}
    </ButtonBase>
  );
}

// Usage
<Button href="/" icon={<LinkIcon />}>
  Link
</Button>
```

### 3. Remove `makeStrict` Usage

The `makeStrict` API has been removed. Use TypeScript's type system directly instead.

**Before (v1.x):**
```tsx
import { classed, makeStrict } from "@tw-classed/react";

const Button = classed.button({
  base: "px-4 py-2",
  variants: {
    color: {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

// Make size required
export default makeStrict(Button, "size");
```

**After (v2.0):**
```tsx
import { classed, ComponentProps } from "@tw-classed/react";

const ButtonBase = classed.button({
  base: "px-4 py-2",
  variants: {
    color: {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

// Create a typed wrapper with required props
type ButtonProps = ComponentProps<typeof ButtonBase> & {
  size: "sm" | "lg"; // Make size required
};

export function Button(props: ButtonProps) {
  return <ButtonBase {...props} />;
}

// Or use Omit to remove optionality
type ButtonProps = Omit<ComponentProps<typeof ButtonBase>, "size"> & {
  size: "sm" | "lg";
};
```

### 4. Update Type Imports

Remove deprecated type imports and use standard patterns.

**Before (v1.x):**
```tsx
import {
  DerivedComponentType,
  StrictComponentType,
  VariantProps,
  ComponentProps,
} from "@tw-classed/react";

// Type casting
const Button = forwardRef(...) as DerivedComponentType<typeof Base, Props>;
const StrictButton = Button as StrictComponentType<typeof Button>;
```

**After (v2.0):**
```tsx
import {
  VariantProps,
  ComponentProps,
} from "@tw-classed/react";
import { forwardRef } from "react";

// No casting needed - use standard React patterns
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <ButtonBase {...props} ref={ref} />;
  }
);
```

### 5. Update Composition Patterns

**Before (v1.x):**
```tsx
import { Link } from "react-router-dom";

const Button = classed.button("px-4 py-2 bg-blue-500");

// Direct as prop usage
<Button as={Link} to="/home">
  Home
</Button>
```

**After (v2.0):**

**Option 1: Use render prop**
```tsx
import { Link } from "react-router-dom";

const Button = classed.button("px-4 py-2 bg-blue-500");

<Button render={<Link to="/home" />}>
  Home
</Button>
```

**Option 2: Create a composed component**
```tsx
import { Link } from "react-router-dom";
import { classed } from "@tw-classed/react";

const Button = classed.button("px-4 py-2 bg-blue-500");
const LinkButton = classed(Link, Button);

<LinkButton to="/home">
  Home
</LinkButton>
```

## Common Patterns

### Pattern 1: Conditional Element Type

**Before:**
```tsx
<Button as={href ? "a" : "button"} href={href}>
  Click
</Button>
```

**After:**
```tsx
<Button render={href ? <a href={href} /> : undefined}>
  Click
</Button>
```

### Pattern 2: Next.js Link Integration

**Before:**
```tsx
import Link from "next/link";

<Button as={Link} href="/about">
  About
</Button>
```

**After:**
```tsx
import Link from "next/link";

<Button render={<Link href="/about" />}>
  About
</Button>
```

### Pattern 3: React Router Link

**Before:**
```tsx
import { Link } from "react-router-dom";

<Button as={Link} to="/dashboard">
  Dashboard
</Button>
```

**After:**
```tsx
import { Link } from "react-router-dom";

<Button render={<Link to="/dashboard" />}>
  Dashboard
</Button>
```

### Pattern 4: External Links

**Before:**
```tsx
<Button as="a" href="https://example.com" target="_blank" rel="noopener">
  External
</Button>
```

**After:**
```tsx
<Button render={<a href="https://example.com" target="_blank" rel="noopener" />}>
  External
</Button>
```

## Automated Migration

For large codebases, consider using find-and-replace with regex:

### Find `as` prop usage:
```regex
as=\{([^}]+)\}
```

### Manual conversion required:
Each instance needs manual review to convert to `render` prop syntax.

## TypeScript Migration

### Before:
```tsx
import type { DerivedComponentType, StrictComponentType } from "@tw-classed/react";
```

### After:
```tsx
// Remove these imports - no longer available
// Use standard React.ComponentProps or ComponentProps from @tw-classed/react
import type { ComponentProps } from "@tw-classed/react";
```

## Troubleshooting

### Error: "Cannot find module '@base-ui/react'"

**Solution:** Install the new peer dependency:
```bash
pnpm add @base-ui/react@^1.0.0
```

### Error: "Property 'as' does not exist"

**Solution:** Replace `as` prop with `render` prop:
```tsx
// Before
<Button as="a" href="/home">Link</Button>

// After
<Button render={<a href="/home" />}>Link</Button>
```

### Error: "deriveClassed is not exported"

**Solution:** Use a simple wrapper component instead:
```tsx
// Before
const Button = deriveClassed<typeof Base, Props>(
  (props, ref) => <Base {...props} ref={ref} />
);

// After
function Button(props: Props) {
  return <Base {...props} />;
}
```

### Error: "makeStrict is not exported"

**Solution:** Use TypeScript to enforce required props:
```tsx
type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "size"> & {
  size: "sm" | "lg"; // Now required
};

function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}
```

### Type errors with custom components

If you're passing a custom component to the `render` prop and getting type errors, ensure the component accepts the correct props:

```tsx
// The render element must accept className and other forwarded props
<Button render={<CustomComponent />}>
  Click
</Button>

// CustomComponent should accept className
function CustomComponent({ className, children, ...props }: { className?: string }) {
  return <div className={className} {...props}>{children}</div>;
}
```

## Benefits of v2.0

- **Better TypeScript inference** with render prop pattern
- **Simpler mental model** - no need for `deriveClassed`
- **Improved composition** - clearer component boundaries
- **Alignment with React ecosystem** - uses `@base-ui/react` patterns
- **More explicit API** - `render` prop is more descriptive than `as`

## Need Help?

- Check the [documentation](https://tw-classed.vercel.app)
- Open an [issue](https://github.com/sannajammeh/tw-classed/issues) if you encounter problems
- See the [examples](https://github.com/sannajammeh/tw-classed/tree/v2/apps/docs) for reference implementations

## Version Support

- **v2.x**: Active development (current)
- **v1.x**: Maintenance mode (critical fixes only)

We recommend migrating to v2.0 for new projects and planning migration for existing projects.
