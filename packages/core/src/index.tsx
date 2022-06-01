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
  V extends Variants = never
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
          .reduce((acc, value) => {
            const vInProps: string = props[value] || defaultVariants?.[value]; // Prefer props over defaultVariants
            if (!vInProps) return acc; // Skip if no variant in props
            // TODO - Check wrapped comp for variant existance
            if (props[value] && !(elementType as any).__CLASSED_COMPONENT__) {
              delete props[value];
            }
            const className = variants[value][vInProps as string]; // Get className from variant
            if (!className) return acc; // Skip if no className
            return acc.concat(acc.length ? " " + className : className); // Add className to acc
          }, "")
          .trim();
      }, [variants]);

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
  ) as Polymorphic.ForwardRefComponent<T, {}>; // Add variant types

  ClassedComponent.displayName = `TwComponent(${elementType.toString()})`;

  (ClassedComponent as any).__CLASSED_COMPONENT__ = true;

  return ClassedComponent;
}

export default classed;

export type { ClassNames, TwModifyer, Modifyer, Breakpoints };
