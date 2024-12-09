import { forwardRef } from "react";
import { ClassedComponentType, DerivedComponentType } from "./types";
import { Merge } from "./utility/polymorphic";
import { COMPONENT_SYMBOL } from "./utility/unique";

export const DERIVED_COMPONENT_SYMBOL: unique symbol = Symbol.for(
  "tw.derivedComponent"
);

export interface DeriveClassedFunction {
  <
    Type extends ClassedComponentType<any>,
    Props extends {} = React.ComponentProps<Type>,
    As extends keyof React.JSX.IntrinsicElements | unknown = unknown
  >(
    callback: React.ForwardRefRenderFunction<
      React.ComponentRef<As extends keyof React.JSX.IntrinsicElements ? As : Type>,
      React.PropsWithoutRef<
        As extends keyof React.JSX.IntrinsicElements
          ? Merge<Omit<Props, "as">, React.ComponentProps<As>>
          : Props
      >
    >
  ): DerivedComponentType<
    Type,
    React.PropsWithoutRef<
      As extends keyof React.JSX.IntrinsicElements
        ? Merge<Props, React.ComponentProps<As>>
        : Props
    >
  >;
}

// export interface DeriveClassedFunction1 {
//   <
//     Type extends ClassedComponentType<any>,
//     Props extends {} = Omit<React.ComponentProps<Type>, "as" | "ref">,
//     HTMLType = null,
//     InferredType = HTMLType extends null ? 0 : 1
//   >(
//     callback: React.ForwardRefRenderFunction<
//       HTMLType extends null ? React.ComponentRef<Type> : HTMLType,
//       Props
//     >
//   ): HTMLType extends null
//     ? DerivedComponentType<Type, Props>
//     : DerivedComponentType<
//         React.ComponentType<any>,
//         Props & React.HTMLProps<HTMLType>,
//         Type[$$ClassedVariants]
//       >;
// }

export const deriveClassed = ((
  fn: React.ForwardRefRenderFunction<unknown, any>
) => {
  const derived = forwardRef((props, ref) => {
    return fn(props, ref);
  });
  /**
   * This is a derived component, so we need to set the symbol to signal internals to pass down `as` prop.
   */
  Reflect.set(derived, DERIVED_COMPONENT_SYMBOL, true);
  Reflect.set(derived, COMPONENT_SYMBOL, true);
  derived.displayName = `Tw.DerivedComponent`;
  return derived;
}) as DeriveClassedFunction;
