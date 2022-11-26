import { TW_VARS } from "./constants";
import {
  ClassNamesAndVariant,
  InferVariantProps,
  VariantConfig,
  Variants,
} from "./types";
import { cx, mergeClass } from "./utility/classNames";

/**
 * Parses & merging variants from a given string or variant config
 * @internal
 */
export const parseClassNames = <TVariants extends Variants>(
  classNames: Array<ClassNamesAndVariant<TVariants> | any>
) => {
  let stringClassNames = [];
  let variantObj = {} as TVariants;
  let defaultVariants = {} as Partial<
    Required<VariantConfig<TVariants>>["defaultVariants"]
  >;
  let compoundVariants = [] as Record<string, any>[];
  // TODO - ADD check for undefined
  for (const className of classNames) {
    if (!className) continue;

    if (typeof className === "string") {
      stringClassNames.push(className);
      continue;
    }

    if (typeof className === "object" || typeof className === "function") {
      const record: VariantConfig<TVariants> = Reflect.has(className, TW_VARS)
        ? Reflect.get<VariantConfig<TVariants>, symbol>(className, TW_VARS)
        : (className as VariantConfig<TVariants>);

      record.variants && Object.assign(variantObj, record.variants);
      record.defaultVariants &&
        Object.assign(defaultVariants, record.defaultVariants);
      record.compoundVariants &&
        compoundVariants.push(...record.compoundVariants);
      record.className && stringClassNames.push(record.className);
      record.base && stringClassNames.push(record.base);
    }
  }

  return {
    className: cx(stringClassNames),
    variants: variantObj,
    defaultVariants,
    compoundVariants,
  };
};

/**
 * Gets the variant selector from the variant props
 */
export const getVariantSelector = <TVariants extends Variants>(
  variantKey: string,
  props: Partial<InferVariantProps<TVariants>>,
  { defaultVariants }: Pick<VariantConfig<TVariants>, "defaultVariants">
) => {
  const variantValue = props[variantKey];
  const vStringValue = variantValue?.toString();
  return vStringValue || defaultVariants?.[variantKey]?.toString();
};

export const mapPropsToVariantClass = <
  TVariants extends Variants,
  TRecord extends VariantConfig<TVariants> = VariantConfig<TVariants>
>(
  {
    variants,
    defaultVariants,
    compoundVariants,
  }: {
    variants: TVariants;
    defaultVariants: TRecord["defaultVariants"];
    compoundVariants?: Record<string, any>[];
  },
  props: Partial<InferVariantProps<TVariants>> = {},
  shouldDeleteProps = false
) => {
  const matchedKeys: string[] = [];
  const producedClassName = Object.keys(variants).reduce((acc, variantKey) => {
    const variantSelector = getVariantSelector(variantKey, props, {
      defaultVariants,
    });

    if (!variantSelector) return acc;
    shouldDeleteProps && matchedKeys.push(variantKey);
    const variantClassName = variants[variantKey][variantSelector];
    if (!variantClassName) return acc;

    return mergeClass(acc, variantClassName);
  }, "");

  const compoundedClassNames = getCompoundVariantClasses(
    {
      props,
      defaultVariants,
    },
    compoundVariants
  );

  shouldDeleteProps && matchedKeys.forEach((key) => delete props[key]);

  return mergeClass(producedClassName, compoundedClassNames?.join(" "));
};

export function getCompoundVariantClasses(
  {
    props,
    defaultVariants,
  }: {
    defaultVariants: VariantConfig<any>["defaultVariants"];
    props: Record<string, any>;
  },
  compoundVariants: VariantConfig<any>["compoundVariants"] = []
) {
  return compoundVariants?.reduce(
    (
      acc: string[],
      { class: cvClass, className: cvClassName, ...compoundVariantOptions }
    ) =>
      Object.entries(compoundVariantOptions).every(
        ([key, value]) =>
          ({
            ...defaultVariants,
            ...props,
          }[key] === value)
      )
        ? [...(acc as string[]), cvClass, cvClassName]
        : acc,
    [] as string[]
  );
}
