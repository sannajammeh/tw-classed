import { TW_VARS } from "./constants";
import {
  ClassedProducer,
  ClassNamesAndVariant,
  InferVariantProps,
  VariantConfig,
  Variants,
} from "./types";
import { joinClasses, mergeClass } from "./utility/classNames";

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
  for (const className of classNames) {
    if (typeof className === "string") {
      stringClassNames.push(className);
      continue;
    }

    // If className is a function, it is a classed producer. Check for Symbol
    if (Reflect.has(className, TW_VARS)) {
      const record: VariantConfig<TVariants> = Reflect.get(className, TW_VARS);
      // Merge variants
      Object.assign(variantObj, record.variants);
      // Merge default variants
      Object.assign(defaultVariants, record.defaultVariants);
      // Merge className
      stringClassNames.push(record.className);
      continue;
    }

    if (className.variants) {
      Object.assign(variantObj, className.variants);
    }

    if (defaultVariants) {
      Object.assign(defaultVariants, (className as any).defaultVariants);
    }

    if ((className as VariantConfig<TVariants>).className) {
      stringClassNames.push((className as any).className);
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
