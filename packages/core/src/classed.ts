import { ClassedProducer, Variants, ClassedCoreFunctionType } from "./types";
import { mapPropsToVariantClass, parseClassNames } from "./parser";
import { mergeClass } from "./utility/classNames";
import { TW_VARS } from "./constants";

const classed = (<V extends Variants = {}>(...classNames: Array<any>) => {
  // Parse classNames and variants
  const { className, variants, defaultVariants, compoundVariants } =
    parseClassNames(classNames);

  const producer: ClassedProducer<V> = ((variantProps) => {
    // Map variant props to className
    const variantClassName = mapPropsToVariantClass(
      { variants, defaultVariants, compoundVariants },
      variantProps
    );

    return mergeClass(className, variantClassName);
  }) as ClassedProducer<V>;

  // Add variants to the classed producer
  Reflect.set(producer, TW_VARS, {
    className,
    variants,
    defaultVariants,
    compoundVariants,
  });

  return producer;
}) as unknown as ClassedCoreFunctionType;

export { classed };
