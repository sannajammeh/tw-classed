export type Breakpoints = "sm" | "md" | "lg" | "xl";
export type Modifyer = `hover` | `active` | `focus` | `disabled` | `selected`;
export type TwModifyer =
  | `${Modifyer | Breakpoints}:`
  | `${Breakpoints}:${Modifyer}:`;

export type ClassNames = string;

export type Variant = Record<string, string>;
export type Variants = Record<string, Variant>;

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

export type VariantProps<V extends Variants> = Partial<
  Record<keyof V, keyof V[keyof V]>
>;
