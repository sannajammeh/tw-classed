import type {
  InferVariantProps,
  Variants,
  $$ClassedProps,
  $$ClassedVariants,
} from "@tw-classed/core";
import type { Component, JSX } from "solid-js";
import * as Util from "./util";
import * as Polymorphic from "./polymorphic";

export { InferVariantProps, Variants };

interface InferableClassedType {
  [$$ClassedVariants]: { variants: {} };
}

export type VariantProps<T extends InferableClassedType> = InferVariantProps<
  T[$$ClassedVariants]["variants"]
>;

export type AnyComponent = Component<any>;

export interface ClassedComponentType<
  Type extends keyof JSX.IntrinsicElements | AnyComponent,
  Props extends {} = {},
  TComposedVariants extends {} = {}
> extends Polymorphic.PolymorphicComponent<Type, Props> {
  [$$ClassedProps]: Props;
  [$$ClassedVariants]: TComposedVariants;
}

export type DerivedComponentType<
  Type extends keyof JSX.IntrinsicElements | Component<any>,
  Props extends {} = {},
  TComposedVariants extends {} = {}
> = ClassedComponentType<Type, Omit<Props, "as">, TComposedVariants>;

/** Returns the cumulative props from the given array of compositions. */
export type ClassedComponentProps<T extends any[]> =
  ($$ClassedProps extends keyof T[0]
    ? T[0][$$ClassedProps]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? InferVariantProps<T[0]["variants"]>
    : {}) &
    (T extends [lead: any, ...tail: infer V] ? ClassedComponentProps<V> : {});

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedComponentVariants<T extends any[]> =
  ($$ClassedVariants extends keyof T[0]
    ? T[0][$$ClassedVariants]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? Pick<T[0], "variants" | "defaultVariants">
    : {}) &
    (T extends [lead: any, ...tail: infer V]
      ? ClassedComponentVariants<V>
      : {});

export interface ClassedFunctionType {
  <
    Type extends keyof JSX.IntrinsicElements | AnyComponent,
    Composers extends (
      | string
      | Util.Function
      | {
          base?: string;
          variants?: { [name: string]: unknown };
        }
    )[]
  >(
    type: Type,
    ...composers: {
      [K in keyof Composers]: string extends Composers[K]
        ? Composers[K]
        : Composers[K] extends string | Util.Function
        ? Composers[K]
        : {
            base?: string;
            variants?: Variants;
            defaultVariants?: "variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?: Util.Widen<
                    keyof Composers[K]["variants"][Name]
                  >;
                }
              : never;

            compoundVariants?: (("variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?:
                    | Util.Widen<keyof Composers[K]["variants"][Name]>
                    | Util.String;
                }
              : never) & {
              className?: Util.String;
              class?: Util.String;
            })[];
          };
    }
  ): ClassedComponentType<
    Type,
    ClassedComponentProps<Composers>,
    ClassedComponentVariants<Composers>
  >;
}

export interface ClassedProxyFunctionType<
  Type extends keyof JSX.IntrinsicElements | AnyComponent
> {
  <
    Composers extends (
      | string
      | Util.Function
      | {
          base?: string;
          variants?: { [name: string]: unknown };
        }
    )[]
  >(
    ...composers: {
      [K in keyof Composers]: string extends Composers[K]
        ? Composers[K]
        : Composers[K] extends string | Util.Function
        ? Composers[K]
        : {
            base?: string;
            variants?: Variants;
            defaultVariants?: "variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?: Util.Widen<
                    keyof Composers[K]["variants"][Name]
                  >;
                }
              : never;

            compoundVariants?: (("variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?:
                    | Util.Widen<keyof Composers[K]["variants"][Name]>
                    | Util.String;
                }
              : never) & {
              className?: Util.String;
              class?: Util.String;
            })[];
          };
    }
  ): ClassedComponentType<
    Type,
    ClassedComponentProps<Composers>,
    ClassedComponentVariants<Composers>
  >;
}

export type ClassedFunctionProxy = ClassedFunctionType & {
  [K in keyof JSX.IntrinsicElements]: ClassedProxyFunctionType<K>;
};
