import { ClassedComponentType } from "./types";

export const COMPONENT_SYMBOL: unique symbol = Symbol.for(
  "tw-classed.component"
);

export const isClassedComponent = (
  value: unknown
): value is ClassedComponentType<any> => {
  return (
    (typeof value === "object" || typeof value === "function") &&
    Reflect.has(value!, COMPONENT_SYMBOL)
  );
};
