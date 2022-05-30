import {
  ClassNames,
  ClassNamesAndVariant,
  VariantConfig,
  Variants,
} from "./types.js";

export const classedParser = (classNames: ClassNames[]) => classNames.join(" ");

export const composeParser = <T extends Variants>(
  classNames: ClassNamesAndVariant<T>[]
) => {
  let stringClassNames = [];
  let variantObj = {} as T;
  let defaultVariants = {} as Partial<
    Required<VariantConfig<T>>["defaultVariants"]
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
  }

  return {
    className: classedParser(stringClassNames),
    variants: variantObj,
    defaultVariants,
  };
};
