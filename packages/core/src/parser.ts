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
      record.compoundVariants &&
        compoundVariants.push(...record.compoundVariants);
      // Merge className
      record.className && stringClassNames.push(record.className);
      record.base && stringClassNames.push(record.base);
      continue;
    }

    if (className.variants) {
      Object.assign(variantObj, className.variants);
    }

    if (className.defaultVariants) {
      Object.assign(defaultVariants, (className as any).defaultVariants);
    }

    if (className.compoundVariants) {
      compoundVariants.push(...className.compoundVariants);
    }

    if ((className as VariantConfig<TVariants>).className) {
      stringClassNames.push((className as any).className);
    }
    if ((className as VariantConfig<TVariants>).base) {
      stringClassNames.push((className as any).base);
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
