import {
  ClassNamesAndVariant,
  InferVariantProps,
  VariantConfig,
  Variants,
} from "./types";
import { joinClasses, mergeClass } from "./utility/classNames";

export const parseClassNames = <TVariants extends Variants>(
  classNames: Array<ClassNamesAndVariant<TVariants>>
) => {
  let stringClassNames = [];
  let variantObj = {} as TVariants;
  let defaultVariants = {} as Partial<
    Required<VariantConfig<TVariants>>["defaultVariants"]
  >;
  for (const className of classNames) {
    if (typeof className === "string") {
      stringClassNames.push(className);
      continue;
    }

    if (className.variants) {
      Object.assign(variantObj, className.variants);
    }

    if (className.defaultVariants) {
      Object.assign(defaultVariants, className.defaultVariants);
    }

    if (className.className) {
      stringClassNames.push(className.className);
    }
  }

  return {
    className: joinClasses(stringClassNames),
    variants: variantObj,
    defaultVariants,
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
  let variantSelector!: string | undefined;

  if (typeof variantValue === "string") {
    variantSelector = variantValue;
  } else if (typeof (variantValue as unknown as boolean) === "boolean") {
    variantSelector = variantValue!.toString();
  } else {
    variantSelector = defaultVariants?.[variantKey] as string | undefined;
  }

  return variantSelector;
};

export const mapPropsToVariantClass = <
  TVariants extends Variants,
  TRecord extends VariantConfig<TVariants> = VariantConfig<TVariants>
>(
  {
    variants,
    defaultVariants,
  }: {
    variants: TVariants;
    defaultVariants: TRecord["defaultVariants"];
  },
  props: Partial<InferVariantProps<TVariants>> = {}
) => {
  let producedClassName: string = "";
  for (const variantKey in variants) {
    // Check own keys
    if (!Object.prototype.hasOwnProperty.call(variants, variantKey)) continue;

    const variantSelector = getVariantSelector(variantKey, props, {
      defaultVariants,
    });

    // Skip if no variant in props
    if (!variantSelector) continue;

    // Produce className from variants
    const variantClassName = variants[variantKey][variantSelector];
    if (!variantClassName) continue;

    producedClassName = mergeClass(producedClassName, variantClassName);
  }

  return producedClassName;
};
