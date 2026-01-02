import type { useRender } from "@base-ui/react/use-render";
import type {
  InferVariantProps,
  Variants,
  $$ClassedProps,
  $$ClassedVariants,
  VariantConfig,
} from "@tw-classed/core";
import * as Util from "./util";

export { InferVariantProps, Variants, VariantConfig };

interface InferableClassedType {
  [$$ClassedVariants]: {
    variants?: {} | unknown;
    defaultVariants?: {} | unknown;
  };
}

export type AnyComponent = React.ComponentType<any>;
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
 * Defines a Classed component.
 * - For intrinsic elements: supports `render` prop via useRender.ComponentProps
 * - For custom components: uses the component's own props
 */
export type ClassedComponentType<
  Type extends keyof React.JSX.IntrinsicElements | AnyComponent,
  Props extends {} = {},
  TComposedVariants extends {} = {}
> = Type extends keyof React.JSX.IntrinsicElements
  ? React.FC<useRender.ComponentProps<Type> & Props> & {
      [$$ClassedProps]: Props;
      [$$ClassedVariants]: TComposedVariants;
    }
  : React.FC<React.ComponentProps<Type> & Props> & {
      [$$ClassedProps]: Props;
      [$$ClassedVariants]: TComposedVariants;
    };

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
export type ClassedFunctionType = <
  Type extends keyof React.JSX.IntrinsicElements | AnyComponent,
  Composers extends (
    | string
    | Util.Function
    | {
        base?: string;
        variants?: { [name: string]: unknown };
        defaultVariants?: { [name: string]: unknown };
        defaultProps?: {};
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

          defaultProps?: React.ComponentProps<Type>;
        };
  }
) => ClassedComponentType<
  Type,
  ClassedComponentProps<Composers>,
  ClassedComponentVariants<Composers>
>;

/**
 * Defines the classed proxy function. Used to create classed components.
 */
export type ClassedProxyFunctionType<
  Type extends keyof React.JSX.IntrinsicElements | AnyComponent
> = <
  Composers extends (
    | string
    | Util.Function
    | {
        base?: string;
        variants?: { [name: string]: unknown };
        defaultVariants?: { [name: string]: unknown };
        defaultProps?: {};
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

          defaultProps?: React.ComponentProps<Type>;
        };
  }
) => ClassedComponentType<
  Type,
  ClassedComponentProps<Composers>,
  ClassedComponentVariants<Composers>
>;

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
  [K in keyof React.JSX.IntrinsicElements]: ClassedProxyFunctionType<K>;
};
