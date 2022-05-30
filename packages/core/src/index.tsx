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

function classed<T extends keyof JSX.IntrinsicElements, V extends Variants>(
  elementType: T,
  ...classNames: ClassNamesAndVariant<V>[]
) {
  // const className = classedParser(classNames);

  const { className, variants, defaultVariants } = composeParser(classNames);

  const ClassedComponent = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = as || elementType;

      // Map props variant to className
      const variantClassNames = useMemo(() => {
        return Object.keys(variants).reduce((acc, value) => {
          const vInProps = props[value] || defaultVariants?.[value]; // Prefer props over defaultVariants
          if (!vInProps) return acc; // Skip if no variant in props
          const className = variants[value][vInProps as string]; // Get className from variant
          return acc.concat(" " + className); // Add className to acc
        }, "");
      }, [variants]);

      return (
        <Component
          className={
            className +
            (cName ? " " + cName : "") +
            (variantClassNames ? " " + variantClassNames : "")
          }
          {...props}
          ref={forwardedRef}
        />
      );
    }
  ) as Polymorphic.ForwardRefComponent<T, VariantProps<V>>;

  ClassedComponent.displayName = `TwComponent(${elementType})`;

  return ClassedComponent;
}

export default classed;

export type { ClassNames, TwModifyer, Modifyer, Breakpoints };
