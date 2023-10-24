import type * as Polymorphic from "./utility/polymorphic";
import type {
  InferVariantProps,
  Variants,
  $$ClassedProps,
  $$ClassedVariants,
} from "@tw-classed/core";
import * as Util from "./util";

export { InferVariantProps, Variants };

interface InferableClassedType {
  [$$ClassedVariants]: {
    variants?: {} | unknown;
    defaultVariants?: {} | unknown;
  };
}

export type AnyComponent = React.ComponentType<any>;
type AnyClassedComponent = ClassedComponentType<any, {}, {}>;
export type ComponentProps<Component> = Component extends (
  ...args: any[]
) => any
  ? Parameters<Component>[0]
  : never;

/**
 * Returns the variant props of the given component.
 */
export type VariantProps<T extends InferableClassedType> = InferVariantProps<
  T[$$ClassedVariants]["variants"]
>;

/**
 * Creates a strict version of the given component.
 * This means that all variants must be passed as props unless `defaultVariants` are defined.
 * A second generic parameter can be used to specify which variants are required. This skips the automatic detection of `defaultVariants`.
 */
export type StrictComponentType<
  T extends AnyClassedComponent,
  U extends keyof VariantProps<T> | unknown = unknown,
  VProps extends VariantProps<T> = VariantProps<T>
> = ClassedComponentType<
  T,
  Required<Pick<VProps, U extends unknown ? PickRequiredVariants<T> : U>>
>;

export type PickRequiredVariants<
  T extends AnyClassedComponent & InferableClassedType
> = T[$$ClassedVariants]["defaultVariants"] extends {}
  ? keyof Required<
      Omit<VariantProps<T>, keyof T[$$ClassedVariants]["defaultVariants"]>
    >
  : never;

/**
 * Defines a Classed component.
 */
export interface ClassedComponentType<
  Type extends keyof JSX.IntrinsicElements | AnyComponent,
  Props extends {} = {},
  TComposedVariants extends {} = {}
> extends Polymorphic.ForwardRefComponent<Type, Props> {
  [$$ClassedProps]: Props;
  [$$ClassedVariants]: TComposedVariants;
}

/**
 * Defines a Derived classed component.
 * Useful when you want to extend a classed component with additional props.
 */
export type DerivedComponentType<
  Type extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
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
    ? Pick<T[0], "variants" | "defaultVariants" | "dataAttributes">
    : {}) &
    (T extends [lead: any, ...tail: infer V]
      ? ClassedComponentVariants<V>
      : {});

/**
 * Defines the classed function. Used to create classed components.
 */
export interface ClassedFunctionType {
  <
    Type extends keyof JSX.IntrinsicElements | AnyComponent,
    Composers extends (
      | string
      | Util.Function
      | {
          base?: string;
          variants?: { [name: string]: unknown };
          defaultVariants?: { [name: string]: unknown };
          defaultProps?: Record<string, any>;
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
              : {};

            compoundVariants?: (("variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?:
                    | Util.Widen<keyof Composers[K]["variants"][Name]>
                    | Array<Util.Widen<keyof Composers[K]["variants"][Name]>>
                    | Util.String;
                }
              : never) & {
              className?: Util.String;
              class?: Util.String;
            })[];

            dataAttributes?: "variants" extends keyof Composers[K]
              ? Array<keyof Composers[K]["variants"]>
              : Array<string>;

            defaultProps?: Record<string, any>;
          };
    }
  ): ClassedComponentType<
    Type,
    ClassedComponentProps<Composers>,
    ClassedComponentVariants<Composers>
  >;
}

/**
 * Defines the classed proxy function. Used to create classed components.
 */
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
          defaultVariants?: { [name: string]: unknown };
          defaultProps?: Record<string, any>;
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
              : {};

            compoundVariants?: (("variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?:
                    | Util.Widen<keyof Composers[K]["variants"][Name]>
                    | Array<Util.Widen<keyof Composers[K]["variants"][Name]>>
                    | Util.String;
                }
              : never) & {
              className?: Util.String;
              class?: Util.String;
            })[];

            dataAttributes?: "variants" extends keyof Composers[K]
              ? Array<keyof Composers[K]["variants"]>
              : Array<string>;

            defaultProps?: Record<string, any>;
          };
    }
  ): ClassedComponentType<
    Type,
    ClassedComponentProps<Composers>,
    ClassedComponentVariants<Composers>
  >;
}

/**
 * Defines the classed function. Used to create classed components.
 * @example
 * const Button = classed("button", "bg-blue-500 text-white");
 * const Link = classed.a("bg-blue-500 text-white");
 * const Text = classed.span({
 *  base: "text-gray-500",
 *  variants: {
 *  size: {
 *   sm: "text-sm",
 *   md: "text-md",
 *   lg: "text-lg",
 *  },
 * })
 */
export type ClassedFunctionProxy = ClassedFunctionType & {
  [K in keyof JSX.IntrinsicElements]: ClassedProxyFunctionType<K>;
};
