import type * as Polymorphic from "./utility/polymorphic";
import type { InferVariantProps, Variants } from "@tw-classed/core";

export { InferVariantProps, Variants };

export type VariantProps<
  T extends ClassedComponentType<any, any, { variants: Variants }>
> = InferVariantProps<T["_def"]["variants"]>;

export type AnyComponent = React.ComponentType<any>;

export interface ClassedComponentType<
  Type extends keyof JSX.IntrinsicElements | AnyComponent,
  Props extends {} = {},
  TComposedVariants extends {} = {}
> extends Polymorphic.ForwardRefComponent<Type, Props> {
  _def: TComposedVariants;
}

/** Unique symbol used to reference the props of a Classed Component. */
export declare const $$ClassedComponentProps: unique symbol;
export type $$ClassedComponentProps = typeof $$ClassedComponentProps;
/** Unique symbol used to reference the variants of a Classed Component. */
export declare const $$ClassedComponentVariants: unique symbol;
export type $$ClassedComponentVariants = typeof $$ClassedComponentVariants;

/** Returns the cumulative props from the given array of compositions. */
export type ClassedComponentProps<T extends any[]> =
  ($$ClassedComponentProps extends keyof T[0]
    ? T[0][$$ClassedComponentProps]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? InferVariantProps<T[0]["variants"]>
    : T[0] extends {
        _def: {
          variants: { [name: string]: unknown };
        };
      }
    ? InferVariantProps<T[0]["_def"]["variants"]>
    : {}) &
    (T extends [lead: any, ...tail: infer V] ? ClassedComponentProps<V> : {});

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedComponentVariants<T extends any[]> =
  ($$ClassedComponentVariants extends keyof T[0]
    ? T[0][$$ClassedComponentVariants]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? Pick<T[0], "variants" | "defaultVariants">
    : T[0] extends {
        _def: {
          variants: { [name: string]: unknown };
        };
      }
    ? {
        variants: T[0]["_def"]["variants"];
        defaultVariants: T[0]["_def"]["defaultVariants"];
      }
    : {}) &
    (T extends [lead: any, ...tail: infer V]
      ? ClassedComponentVariants<V>
      : {});

export interface ClassedFunctionType {
  <
    Type extends keyof JSX.IntrinsicElements | AnyComponent,
    Composers extends (
      | string
      | {
          [key: string]: unknown;
        }
      | { _def: { variants: { [key: string]: unknown } } }
    )[]
  >(
    type: Type,
    ...composers: {
      [K in keyof Composers]: string extends Composers[K]
        ? Composers[K]
        : Composers[K] extends string
        ? Composers[K]
        : Composers[K] extends { _def: { variants: Variants } }
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
