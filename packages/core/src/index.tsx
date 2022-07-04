import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { forwardRef, useMemo } from "react";
import { composeParser } from "./parser.js";
import type {
  ClassNames,
  TwModifyer,
  Modifyer,
  Breakpoints,
  Variants,
  ClassNamesAndVariant,
  VariantProps,
} from "./types.js";

function classed<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  V extends Variants = {}
>(elementType: T, ...classNames: ClassNamesAndVariant<V>[]) {
  const { className, variants, defaultVariants } = composeParser(classNames);

  const ClassedComponent = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = (elementType as any).__CLASSED_COMPONENT__
        ? elementType
        : as || elementType;

      // Map props variant to className
      const variantClassNames = useMemo(() => {
        return Object.keys(variants)
          .reduce((acc, variantKey) => {
            let variantSelector!: string;
            if (props[variantKey]) {
              variantSelector = props[variantKey];
            } else if (typeof props[variantKey] === "boolean") {
              variantSelector = props[variantKey].toString();
            } else {
              variantSelector = defaultVariants[variantKey] as string;
            }

            if (!variantSelector) return acc; // Skip if no variant in props

            // TODO - Check wrapped comp for variant existance
            if (!(elementType as any).__CLASSED_COMPONENT__) {
              delete props[variantKey];
            }

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
          as={(elementType as any).__CLASSED_COMPONENT__ ? as : undefined}
          ref={forwardedRef}
        />
      );
    }
  ) as Polymorphic.ForwardRefComponent<T, VariantProps<V>>; // Add variant types

  ClassedComponent.displayName = `TwComponent(${elementType.toString()})`;

  (ClassedComponent as any).__CLASSED_COMPONENT__ = true;

  return ClassedComponent;
}

export default classed;

export type { ClassNames, TwModifyer, Modifyer, Breakpoints };
