---
"@tw-classed/react": major
"@tw-classed/core": major
---

# TW-Classed v2.0 Release Summary

## Overview

v2.0 is a major release that modernizes TW-Classed with a cleaner API, better TypeScript ergonomics, and improved alignment with the React ecosystem. This release removes legacy patterns in favor of more explicit, maintainable approaches.

## Major Changes

### 🎯 New `render` Prop API

Replaced the `as` prop with a more explicit and powerful `render` prop pattern, powered by `@base-ui/react`.

**Why this change?**

- More explicit and readable polymorphic components
- Better TypeScript inference and type safety
- Aligns with modern React patterns (React Server Components, etc.)
- Supports both JSX element and function syntax for maximum flexibility

```tsx
// v1.x
<Button as="a" href="/home">Link</Button>

// v2.0
<Button render={<a href="/home" />}>Link</Button>

// v2.0 - Advanced: Function syntax
<Button render={(props) => <a {...props} href="/home" />}>Link</Button>
```

### 🧹 Simplified Component Extension

Removed `deriveClassed` API in favor of standard React component composition.

**Why this change?**

- Less API surface to learn
- Uses standard React patterns (wrapper components, forwardRef)
- More flexible and easier to debug
- Better alignment with how React developers already think

```tsx
// v1.x - Required special API
const Button = deriveClassed<typeof Base, Props>((props, ref) => (
  <Base {...props} ref={ref} />
));

// v2.0 - Standard React pattern
function Button(props: Props) {
  return <Base {...props} />;
}
```

### 🔧 TypeScript Simplification

Removed specialized type utilities (`DerivedComponentType`, `StrictComponentType`, `makeStrict`) in favor of standard TypeScript patterns.

**Why this change?**

- Easier to understand for developers familiar with TypeScript
- Less magic, more explicit
- Better IDE support and error messages
- Encourages using TypeScript's native capabilities

```tsx
// v1.x - Custom utility
export default makeStrict(Button, "size");

// v2.0 - Standard TypeScript
type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "size"> & {
  size: "sm" | "lg"; // Required
};
```

## Dependency Updates

### New Requirements

- **`@base-ui/react` v1.0+** - New peer dependency for render prop functionality
- **React 16.8+** - Unchanged (still supports legacy versions)

### Upgraded Dependencies

- **TypeScript 5.9.3** - Latest stable with improved type inference
- **Next.js 14.2.35** - Security updates and performance improvements
- **pnpm 10.27.0** - Better workspace resolution
- **Bunchee 6.9.3** - Improved bundling and tree-shaking

## Benefits

### For Library Users

✅ **Clearer Intent** - `render` prop is more explicit than `as`
✅ **Better Types** - Improved TypeScript inference and autocomplete
✅ **Less Magic** - Standard React patterns instead of custom APIs
✅ **Easier Debugging** - Simpler component trees and call stacks
✅ **Future-Proof** - Aligns with React ecosystem direction

### For Library Maintainers

✅ **Smaller API Surface** - Fewer utilities to maintain
✅ **Better Documentation** - Standard patterns are self-documenting
✅ **Reduced Complexity** - Less custom TypeScript gymnastics
✅ **Easier Testing** - Standard components are easier to test

## Breaking Changes Summary

1. **`as` prop removed** → Use `render` prop
2. **`deriveClassed` removed** → Use wrapper components
3. **`makeStrict` removed** → Use TypeScript types
4. **`DerivedComponentType` removed** → Use standard types
5. **`StrictComponentType` removed** → Use standard types
6. **New peer dependency** → Install `@base-ui/react`

## Migration Effort

**Estimated time:** 30 minutes - 2 hours depending on codebase size

- Small projects (<10 components): ~30 minutes
- Medium projects (10-50 components): ~1-2 hours
- Large projects (50+ components): ~2-4 hours

Most changes are mechanical find-and-replace operations. See [MIGRATION.md](./MIGRATION.md) for detailed guide.

## What Stays the Same

✅ Core variant API unchanged
✅ Composition patterns still work
✅ `classed` function signature unchanged
✅ Variant types and props extraction
✅ Default variants and compound variants
✅ Data attributes support
✅ Custom merge functions

## Version Support

- **v2.x** - Active development ✅
- **v1.x** - Maintenance mode (critical fixes only) ⚠️

## Quick Start

### Installation

```bash
pnpm add @tw-classed/react@^2.0.0 @base-ui/react@^1.0.0
```

### Basic Usage (Unchanged)

```tsx
import { classed } from "@tw-classed/react";

const Button = classed.button({
  base: "px-4 py-2 rounded",
  variants: {
    color: {
      blue: "bg-blue-500 text-white",
      red: "bg-red-500 text-white",
    },
  },
});

// Regular usage - no changes
<Button color="blue">Click me</Button>;
```

### Polymorphic Usage (Updated)

```tsx
// Use render prop for polymorphism
<Button color="blue" render={<a href="/home" />}>
  Go Home
</Button>
```

## Resources

- **[Migration Guide](./MIGRATION.md)** - Step-by-step migration instructions
- **[Documentation](https://tw-classed.vercel.app)** - Updated for v2.0
- **[GitHub](https://github.com/sannajammeh/tw-classed)** - Report issues
- **[Changelog](./CHANGELOG.md)** - Full list of changes

## Upgrade Recommendation

**✅ Recommended for:**

- New projects starting today
- Projects actively maintained
- Codebases wanting better type safety
- Teams familiar with modern React patterns

**⏳ Consider delaying if:**

- Large legacy codebase with limited migration time
- Team unfamiliar with `@base-ui/react` patterns
- Project in maintenance mode

## Thank You

Thanks to all contributors and the community for feedback that shaped v2.0. Special thanks to the `@base-ui/react` team for the excellent render prop implementation that powers this release.

---

**Ready to upgrade?** Start with the [Migration Guide](./MIGRATION.md) →
