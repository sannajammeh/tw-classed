import type * as Polymorphic from "@radix-ui/react-polymorphic";
export type Breakpoints = "sm" | "md" | "lg" | "xl";
export type Modifyer = `hover` | `active` | `focus` | `disabled` | `selected`;
export type TwModifyer =
  | `${Modifyer | Breakpoints}:`
  | `${Breakpoints}:${Modifyer}:`;

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

export type InferVariantProps<V extends Variants | undefined = undefined> =
  V extends Variants
    ? Partial<{
        [K in keyof V]: V[K] extends BooleanVariant
          ? boolean
          : keyof V[K] | undefined;
      }>
    : {};

export type ClassedComponent<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  V extends Variants
> = Polymorphic.ForwardRefComponent<T, InferVariantProps<V>> & {
  variants: V;
};

export type VariantProps<T extends ClassedComponent<any, any>> =
  InferVariantProps<T["variants"]>;
