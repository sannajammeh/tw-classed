import { ClassedProducer, Variants, ClassedCoreFunctionType } from "./types";
import { mapPropsToVariantClass, parseClassNames } from "./parser";
import { cn } from "./utility/classNames";
import { TW_VARS } from "./constants";

export interface ClassedCoreConfig {
  merger?: (...args: string[]) => any;
}
export interface CreateClassedCoreType {
  (config?: ClassedCoreConfig): {
    classed: ClassedCoreFunctionType;
  };
}

const internalClassed = <V extends Variants = {}>(
  classes: Array<any>,
  { merger = cn }: ClassedCoreConfig = {}
) => {
  // Parse classNames and variants
  const { className, variants, defaultVariants, compoundVariants } =
    parseClassNames(classes);

  const producer = ((variantProps: any) => {
    // Map variant props to className
    const variantClassName = mapPropsToVariantClass(
      { variants, defaultVariants, compoundVariants },
      variantProps
    );

    const extra = [variantProps?.className, variantProps?.class].filter(
      Boolean
    );

    return merger(className, variantClassName, ...extra);
  }) as ClassedProducer<V>;

  // Add variants to the classed producer
  Reflect.set(producer, TW_VARS, {
    className,
    variants,
    defaultVariants,
    compoundVariants,
  });

  return producer;
};

export const createClassed = ((config?: ClassedCoreConfig) => {
  const classed = (...args: any[]) => internalClassed(args, config);

  return {
    classed,
  };
}) as unknown as CreateClassedCoreType;

export const classed = createClassed().classed as ClassedCoreFunctionType;
