import { forwardRef, useMemo } from "react";
import {
  parseClassNames,
  TW_VARS,
  mapPropsToVariantClass,
} from "@tw-classed/core";
import type { Variants, ClassNamesAndVariant } from "@tw-classed/core";

import type {
  AnyComponent,
  ClassedComponentType,
  ClassedFunctionType,
} from "./types";
import { COMPONENT_SYMBOL, isClassedComponent } from "./utility/unique";

export * from "./types";

const cx = (...args: string[]) => args.filter(Boolean).join(" ");

function classed<
  T extends keyof JSX.IntrinsicElements | AnyComponent,
  V extends Variants = {}
>(elementType: T, ...classNames: ClassNamesAndVariant<V>[]) {
  const { className, variants, defaultVariants, compoundVariants } =
    parseClassNames(classNames);
  const Comp = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = isClassedComponent(elementType)
        ? elementType
        : as || elementType;

      // Map props variant to className
      const variantClassNames = useMemo(() => {
        return mapPropsToVariantClass(
          { variants, defaultVariants, compoundVariants },
          props,
          true
        );
      }, [props]);

      return (
        <Component
          className={cx(className, cName, variantClassNames)}
          {...props}
          as={isClassedComponent(elementType) ? as : undefined}
          ref={forwardedRef}
        />
      );
    }
  ) as unknown as ClassedComponentType<T, V>; // Add variant types

  Comp.displayName = `TwComponent(${elementType.toString()})`;
  // Set variables to check if component is classed
  Reflect.set(Comp, TW_VARS, {
    className,
    variants,
    defaultVariants,
  });

  Reflect.set(Comp, COMPONENT_SYMBOL, true);

  return Comp;
}

export default classed as ClassedFunctionType;
