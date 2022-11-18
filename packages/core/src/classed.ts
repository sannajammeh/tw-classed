import {
  ClassedProducer,
  ClassNamesAndVariant,
  Variants,
  ClassedCoreFunctionType,
} from "./types";
import { mapPropsToVariantClass, parseClassNames } from "./parser";
import { mergeClass } from "./utility/classNames";

const classed = (<V extends Variants = {}>(
  ...classNames: Array<ClassNamesAndVariant<V> | ClassedProducer<V>>
) => {
  // Parse classNames and variants
  const { className, variants, defaultVariants } = parseClassNames(classNames);

  const producer: ClassedProducer<V> = ((variantProps) => {
    // Map variant props to className
    const variantClassName = mapPropsToVariantClass(
      { variants, defaultVariants },
      variantProps
    );

    return mergeClass(className, variantClassName);
  }) as ClassedProducer<V>;

  // Add variants to the classed producer
  producer._def = {
    className,
    variants: variants,
    defaultVariants: defaultVariants,
  };

  return producer;
}) as ClassedCoreFunctionType;

export { classed };
