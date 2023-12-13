import type * as Util from "./util";

export type Variant = Record<string, string>;
export type Variants = Record<string, Variant>;
export type BooleanVariant = Record<"true", string>;

/**
 * @internal
 */
export type VariantConfig<V extends Variants> = {
  variants?: V;
  className?: string;
  base?: string;
  defaultVariants?: Partial<{
    [K in keyof V]: keyof V[K];
  }>;
  compoundVariants?: Record<string, any>[];
  dataAttributes?: string[];
  defaultProps?: Record<string, unknown>;
};

export type ClassNamesAndVariant<V extends Variants> =
  | string
  | VariantConfig<V>;

export type ClassedProducer<V extends Variants = {}> = ((
  variantProps: InferVariantProps<V>
) => any) & {
  _def: {
    className?: string;
    base?: string;
    variants?: V;
    defaultVariants?: unknown;
  };
};

export type InferVariantProps<
  V extends Variants | unknown | undefined = undefined
> = V extends Variants
  ? Partial<{
      [K in keyof V]: Util.Widen<keyof V[K]> | undefined;
    }>
  : {};

interface PropsWithClass {
  className?: string;
  class?: string;
}
interface ClassedCreator<Props extends {} = {}> {
  (variantProps?: Props & PropsWithClass): string;
}

export interface ClassedType<
  Props extends {} = {},
  TComposedVariants extends {} = {}
> extends ClassedCreator<Props> {
  [$$ClassedProps]: Props;
  [$$ClassedVariants]: TComposedVariants;
}

/** Unique symbol used to reference the props of a Classed Component. */
export declare const $$ClassedProps: unique symbol;
export type $$ClassedProps = typeof $$ClassedProps;
/** Unique symbol used to reference the variants of a Classed Component. */
export declare const $$ClassedVariants: unique symbol;
export type $$ClassedVariants = typeof $$ClassedVariants;

/** Returns the cumulative props from the given array of compositions. */
export type ClassedProps<T extends any[]> = ($$ClassedProps extends keyof T[0]
  ? T[0][$$ClassedProps]
  : T[0] extends { variants: { [name: string]: unknown } }
  ? InferVariantProps<T[0]["variants"]>
  : {}) &
  (T extends [lead: any, ...tail: infer V] ? ClassedProps<V> : {});

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedVariants<T extends any[]> =
  ($$ClassedVariants extends keyof T[0]
    ? T[0][$$ClassedVariants]
    : T[0] extends { variants: { [name: string]: unknown } }
    ? Pick<T[0], "variants" | "defaultVariants" | "dataAttributes">
    : {}) &
    (T extends [lead: any, ...tail: infer V] ? ClassedVariants<V> : {});

export type VariantProps<T extends ClassedType<any, any>> = InferVariantProps<
  T[$$ClassedVariants]["variants"]
>;

export interface ClassedCoreFunctionType {
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
          };
    }
  ): ClassedType<ClassedProps<Composers>, ClassedVariants<Composers>>;
}
