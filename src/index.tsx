import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { forwardRef } from "react";
import { classedParser } from "./parser.js";
import type { ClassNames, TwModifyer, Modifyer, Breakpoints } from "./types.js";

function classed<T extends keyof JSX.IntrinsicElements>(
  elementType: T,
  ...classNames: ClassNames[]
) {
  const className = classedParser(classNames);

  const ClassedComponent = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = as || elementType;

      return (
        <Component
          className={className + (cName ? " " + cName : "")}
          {...props}
          ref={forwardedRef}
        />
      );
    }
  ) as Polymorphic.ForwardRefComponent<T>;

  ClassedComponent.displayName = `TwComponent(${elementType})`;

  return ClassedComponent;
}

export default classed;

export type { ClassNames, TwModifyer, Modifyer, Breakpoints };
