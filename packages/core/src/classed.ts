import {
  ClassedProducer,
  Variants,
  ClassedCoreFunctionType,
  ClassedType,
  ClassedVariants,
  $$ClassedVariants,
} from "./types";
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
  const { className, variants, defaultVariants, compoundVariants } =
    parseClassNames(classes);

  const producer = ((variantProps: any) => {
    const variantClassName = mapPropsToVariantClass(
      { variants, defaultVariants, compoundVariants },
      variantProps
    );

    const extra = [variantProps?.className, variantProps?.class].filter(
      Boolean
    );

    return merger(className, variantClassName, ...extra);
  }) as ClassedProducer<V>;

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

/**
 * @param component - The component to get the variant configuration for.
 * @returns The variant configuration for the given component.
 * @example
 * const button = classed("button", {
 *  variants: {
 *    size: {
 *      sm: "text-sm",
 *      md: "text-md",
 *    },
 *  },
 * });
 *
 * const { variants } = getVariantConfig(button);
 *
 * expect(variants).toEqual({
 *   size: {
 *      sm: "text-sm",
 *      md: "text-md",
 *    },
 * });
 */
export function getVariantConfig<T extends { [$$ClassedVariants]: {} }>(
  component: T
) {
  return Reflect.get(component, TW_VARS) as T[$$ClassedVariants];
}
