# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TW-Classed is a monorepo library for creating type-safe, reusable Tailwind CSS components with variant support. It provides a DX-focused API similar to Class Variance Authority but integrated deeply with Tailwind. Framework-agnostic core with React and Solid.js wrappers.

## Commands

### Building

```bash
pnpm build                           # Build all packages
pnpm build --filter=./packages/*     # Build only workspace packages
turbo run build --filter=@tw-classed/core  # Build specific package
```

### Testing

```bash
pnpm test                            # Run all tests
pnpm test:coverage                   # Run tests with coverage
pnpm test --filter=@tw-classed/core  # Run tests for specific package
```

### Development

```bash
pnpm dev                             # Start dev mode for all packages
pnpm dev --filter=@tw-classed/react  # Dev mode for specific package
```

### Linting & Formatting

```bash
pnpm lint                            # Lint all packages
pnpm format                          # Format with prettier
```

### Package Testing (Individual)

```bash
cd packages/core && pnpm test        # Test core in isolation
cd packages/react && pnpm test       # Test React wrapper
```

### Release

```bash
pnpm ci:version                      # Version packages with changesets
pnpm ci:publish                      # Build, test, and publish
```

## Architecture

### Monorepo Structure

- **Packages**: 3 workspace packages (`core`, `react`, `solid`)
- **Apps**: 2 applications (`docs`, `benchmark`) - excluded from releases
- **Package Manager**: pnpm v8.3.1 with workspace linking
- **Orchestration**: Turbo for task caching and parallelization

### Core Architecture (`@tw-classed/core`)

- **Metadata Storage**: Uses `Reflect.set/get` with symbol keys (`TW_VARS`) to attach variant configs to functions without instance pollution
- **Composable Parsing**: `parseClassNames()` recursively merges variant configs from multiple sources (composition)
- **Variant Mapping**: `mapPropsToVariantClass()` converts runtime props to Tailwind classes based on variant definitions
- **Class Merging**: Custom merger functions (default: `cn()`) handle Tailwind class combining and deduplication

### React Layer (`@tw-classed/react`)

- **Proxy Pattern**: `new Proxy()` wraps the classed function to enable tag-name shortcuts (`classed.button()`, `classed.div()`, etc.)
- **forwardRef Wrapper**: All components use `React.forwardRef` for proper ref forwarding
- **useMemo Optimization**: Variant calculations and class merging memoized per props
- **Polymorphic Components**: `as` prop support allows runtime element type changes
- **Default Props**: Integrates with React's defaultProps pattern for variant defaults

### Solid Layer (`@tw-classed/solid`)

- Similar proxy pattern to React, adapted for Solid's reactivity model

### Type System

- **Symbol-based Composition**: `$$ClassedProps`, `$$ClassedVariants` unique symbols enable TypeScript to track composition chains
- **Recursive Type Composition**: `ClassedProps<T[]>` and `ClassedVariants<T[]>` compose multiple components' types
- **Variant Extraction**: `VariantProps<T>` utility type extracts variant configuration from classed components

## Build System

### Per-Package Bundlers

- **Core & React**: Bunchee (lightweight TypeScript bundler) → CJS, ESM, MJS + .d.ts
- **Solid**: Vite with vite-plugin-solid + vite-plugin-dts

### Export Strategy

All packages use conditional exports:

```json
{
  "types": "./dist/index.d.ts",
  "import": "./dist/index.mjs",
  "module": "./dist/index.esm.js",
  "require": "./dist/index.cjs"
}
```

### Turbo Pipeline

- `build`: Depends on `^build` (topological), outputs `dist/**`
- `test`: Depends on `^build` and `^typecheck`
- `typecheck`: Outputs `tsconfig.test.tsbuildinfo`
- `dev`: No cache, persistent mode

## Testing

- **Framework**: Vitest (0.34.4 for core/react, 1.0.4 for solid)
- **Coverage**: c8
- **Testing Library**: @testing-library/react and @solidjs/testing-library
- **Environment**: jsdom for DOM APIs

Test files are in `packages/*/test/` directories.

## Important Patterns

### Variant System Flow

1. **Input**: String classes or VariantConfig objects
2. **Parse**: `parseClassNames()` merges all configs recursively
3. **Map**: `mapPropsToVariantClass()` converts props → Tailwind classes
4. **Merge**: Custom merger combines base + variant + compound + user classes

### Compound Variants

Conditional class application based on multiple prop combinations:

```ts
compoundVariants: [{ size: "lg", variant: "primary", class: "shadow-lg" }];
```

### Data Attributes

Variants can attach `data-*` attributes for CSS hooks:

```ts
variants: {
  color: {
    primary: "bg-blue-500",
    dataAttribute: "color"  // → data-color="primary"
  }
}
```

## Dependencies

### Internal (Workspace)

- React and Solid packages depend on Core via `workspace:*`

### Peer Dependencies

- Core: None (framework-agnostic)
- React: `react >= 16.8.0`
- Solid: `solid-js >= 1.0.0`

## Release Process

Uses Changesets for version management:

1. Create changeset: `pnpm changeset`
2. Version packages: `pnpm ci:version`
3. Publish: `pnpm ci:publish`

Linked packages (core, react, solid) version together. GitHub Actions handles automated releases on `master` branch.
