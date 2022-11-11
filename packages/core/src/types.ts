import type * as Polymorphic from "@radix-ui/react-polymorphic";

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
  variants: V;
  _def: {
    _variants: V;
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
