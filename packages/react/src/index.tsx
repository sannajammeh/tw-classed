import type { Variants, ClassNamesAndVariant } from "@tw-classed/core";

import type { AnyComponent, ClassedFunctionType } from "./types";
import { internalClassed } from "./classed";

export * from "./types";

function classed<
  T extends keyof JSX.IntrinsicElements | AnyComponent,
  V extends Variants = {}
>(elementType: T, ...classNames: ClassNamesAndVariant<V>[]) {
  return internalClassed(elementType, classNames);
}

export default classed as ClassedFunctionType;
