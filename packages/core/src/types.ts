import type * as Util from "./util";

export type ClassNames = string;

export type Variant = Record<string, string>;
export type Variants = Record<string, Variant>;
export type BooleanVariant = Record<"true", string>;

export type VariantConfig<V extends Variants> = {
  variants?: V;
  className?: ClassNames;
  defaultVariants?: Partial<{
    [K in keyof V]: keyof V[K];
  }>;
};

export type ClassNamesAndVariant<V extends Variants> =
  | string
  | VariantConfig<V>;

export type ClassedProducer<V extends Variants = {}> = ((
  variantProps: InferVariantProps<V>
) => any) & {
  _def: {
    className?: string;
    variants?: V;
    defaultVariants?: unknown;
  };
};

export type InferVariantProps<V extends Variants | undefined = undefined> =
  V extends Variants
    ? Partial<{
        [K in keyof V]: V[K] extends BooleanVariant
          ? boolean
          : keyof V[K] | undefined;
      }>
    : {};

interface ClassedCreator<Props extends {} = {}> {
  (variantProps?: Props): string;
}

export interface ClassedType<
  Props extends {} = {},
  TComposedVariants extends {} = {}
> extends ClassedCreator<Props> {
  _def: TComposedVariants;
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
  : T[0] extends {
      _def: {
        variants: { [name: string]: unknown };
      };
    }
  ? InferVariantProps<T[0]["_def"]["variants"]>
  : {}) &
  (T extends [lead: any, ...tail: infer V] ? ClassedProps<V> : {});

/** Returns the cumulative variants from the given array of compositions. */
export type ClassedVariants<T extends any[]> =
  ($$ClassedVariants extends keyof T[0]
    ? T[0][$$ClassedVariants]
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
    (T extends [lead: any, ...tail: infer V] ? ClassedVariants<V> : {});

export interface ClassedCoreFunctionType {
  <
    Composers extends (
      | string
      | Util.Function
      | {
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
            variants: Variants;
            defaultVariants?: "variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?: keyof Composers[K]["variants"][Name];
                }
              : never;
          };
    }
  ): ClassedType<ClassedProps<Composers>, ClassedVariants<Composers>>;
}
