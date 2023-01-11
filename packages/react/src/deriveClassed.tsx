import { forwardRef } from "react";
import { ClassedComponentType, DerivedComponentType } from "./types";
import { COMPONENT_SYMBOL } from "./utility/unique";

export const DERIVED_COMPONENT_SYMBOL: unique symbol = Symbol.for(
  "tw.derivedComponent"
);

export interface DeriveClassedFunction {
  <
    Type extends ClassedComponentType<any>,
    Props extends {} = React.ComponentProps<Type>,
    HTMLType = React.ComponentRef<Type>
  >(
    callback: React.ForwardRefRenderFunction<HTMLType, Props>
  ): DerivedComponentType<Type, Props>;
}

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
