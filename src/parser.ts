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
  let defaultVariants = {} as Partial<VariantConfig<T>["defaultVariants"]>;
  for (const className of classNames) {
    if (typeof className === "string") {
      stringClassNames.push(className);
      continue;
    }

    if (className.variants) {
      variantObj = {
        ...variantObj,
        ...className.variants,
      };
    }

    if (className.defaultVariants) {
      defaultVariants = {
        ...defaultVariants,
        ...className.defaultVariants,
      };
    }
  }

  return {
    className: classedParser(stringClassNames),
    variants: variantObj,
    defaultVariants,
  };
};
