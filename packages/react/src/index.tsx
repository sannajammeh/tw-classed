"use client";
import { forwardRef, useMemo } from "react";
import { parseClassNames, getVariantSelector, TW_VARS } from "@tw-classed/core";
import type { Variants, ClassNamesAndVariant } from "@tw-classed/core";

import type {
  AnyComponent,
  ClassedComponentType,
  ClassedFunctionType,
} from "./types";
import { COMPONENT_SYMBOL, isClassedComponent } from "./utility/unique";

export * from "./types";

function classed<
  T extends keyof JSX.IntrinsicElements | AnyComponent,
  V extends Variants = {}
>(elementType: T, ...classNames: ClassNamesAndVariant<V>[]) {
  const { className, variants, defaultVariants } = parseClassNames(classNames);
  const ClassedComponent = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = isClassedComponent(elementType)
        ? elementType
        : as || elementType;

      // Map props variant to className
      const variantClassNames = useMemo(() => {
        return Object.keys(variants)
          .reduce((acc, variantKey) => {
            const variantSelector = getVariantSelector(variantKey, props, {
              defaultVariants,
            });

            if (!variantSelector) return acc; // Skip if no variant in props

            delete props[variantKey];

            const className = variants[variantKey][variantSelector as string]; // Get className from variant

            if (!className) return acc; // Skip if no className
            return acc.concat(acc.length ? " " + className : className); // Add className to acc
          }, "")
          .trim();
      }, [variants, props]);

      return (
        <Component
          className={
            className +
            (cName ? " " + cName : "") +
            (variantClassNames ? " " + variantClassNames : "")
          }
          {...props}
          as={isClassedComponent(elementType) ? as : undefined}
          ref={forwardedRef}
        />
      );
    }
  ) as unknown as ClassedComponentType<T, V>; // Add variant types

  ClassedComponent.displayName = `TwComponent(${elementType.toString()})`;
  // Set variables to check if component is classed
  Reflect.set(ClassedComponent, TW_VARS, {
    className,
    variants,
    defaultVariants,
  });

  Reflect.set(ClassedComponent, COMPONENT_SYMBOL, true);

  return ClassedComponent;
}

export default classed as ClassedFunctionType;
