import type * as Polymorphic from "./utility/polymorphic.js";
import type { InferVariantProps, Variants } from "@tw-classed/core";

export type ClassedComponent<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  V extends Variants
> = Polymorphic.ForwardRefComponent<T, InferVariantProps<V>> & {
  variants: V;
  _def: {
    _variants: V;
  };
};

export type VariantProps<T extends ClassedComponent<any, any>> =
  InferVariantProps<T["_def"]["_variants"]>;

export type AnyComponent = React.ComponentType<any>;

export * from "@tw-classed/core";
