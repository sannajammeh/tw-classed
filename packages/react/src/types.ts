import type * as Polymorphic from "./utility/polymorphic";
import type { InferVariantProps, Variants } from "@tw-classed/core";
export * from "@tw-classed/core";

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

export interface ClassedComponentType<
  Type extends keyof JSX.IntrinsicElements | AnyComponent,
  Props extends {} = {},
  TVariants extends {} = {}
> extends Polymorphic.ForwardRefComponent<Type, Props> {
  variants: TVariants;
}

/** Unique symbol used to reference the props of a Classed Component. */
export declare const $$ClassedComponentProps: unique symbol;

/** Unique symbol used to reference the props of a Classed Component. */
export type $$ClassedComponentProps = typeof $$ClassedComponentProps;

/** Unique symbol used to reference the props of a Classed Component. */
export declare const $$ClassedComponentVariants: unique symbol;

/** Unique symbol used to reference the props of a Classed Component. */
export type $$ClassedComponentVariants = typeof $$ClassedComponentVariants;

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedComponentProps<T extends any[]> =
  ($$ClassedComponentProps extends keyof T[0]
    ? T[0][$$ClassedComponentProps]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? // ? {
      //     [K in keyof T[0]["variants"]]?: keyof T[0]["variants"][K];
      //   }
      InferVariantProps<T[0]["variants"]>
    : {}) &
    (T extends [lead: any, ...tail: infer V] ? ClassedComponentProps<V> : {});

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedComponentVariants<T extends any[]> =
  ($$ClassedComponentVariants extends keyof T[0]
    ? T[0][$$ClassedComponentVariants]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? Pick<T[0], "variants" | "defaultVariants">
    : {}) &
    (T extends [lead: any, ...tail: infer V]
      ? ClassedComponentVariants<V>
      : {});

export interface ClassedFunctionType<Media extends {} = {}> {
  <
    Type extends keyof JSX.IntrinsicElements | AnyComponent,
    Composers extends (
      | string
      | {
          [key: string]: unknown;
        }
    )[]
  >(
    type: Type,
    ...composers: {
      [K in keyof Composers]: string extends Composers[K]
        ? Composers[K]
        : Composers[K] extends string
        ? Composers[K]
        : {
            variants: Variants;
            defaultVariants?: "variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?: keyof Composers[K]["variants"][Name];
                }
              : never;
          };
    }
  ): ClassedComponentType<
    Type,
    ClassedComponentProps<Composers>,
    ClassedComponentVariants<Composers>
  >;
}
