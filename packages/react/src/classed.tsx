/** biome-ignore-all lint/suspicious/noExplicitAny: <Allow any> */

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import {
  type ClassNamesAndVariant,
  getDataAttributes,
  mapPropsToVariantClass,
  parseClassNames,
  TW_VARS,
} from "@tw-classed/core";
import { useMemo } from "react";
import type {
  AnyComponent,
  ClassedComponentType,
  ClassedFunctionProxy,
  Variants,
} from "./types";
import { COMPONENT_SYMBOL, isClassedComponent } from "./utility/unique";

export const cx = (...args: string[]): string =>
  args.filter((v) => !!v && typeof v === "string").join(" ");

const getDisplayName = (elementType: AnyComponent | string) => {
  if (!elementType) {
    return "Unknown";
  }

  if (
    typeof elementType !== "string" &&
    "render" in elementType &&
    typeof elementType.render === "function"
  ) {
    return elementType.render.name;
  }

  return typeof elementType !== "string"
    ? elementType.displayName || elementType.name || "Component"
    : `TwComponent(${elementType})`;
};

const isIntrinsicElement = (
  elementType: any
): elementType is keyof React.JSX.IntrinsicElements =>
  typeof elementType === "string";

export const internalClassed = <
  T extends keyof React.JSX.IntrinsicElements | AnyComponent,
  V extends Variants = {}
>(
  elementType: T,
  classNames: ClassNamesAndVariant<{}>[],
  config: ClassedConfig = {}
) => {
  const { merger = cx } = config;
  const toParse = Array.from(classNames);
  const isClassed = isClassedComponent(elementType);
  if (isClassed) {
    toParse.unshift(elementType as any);
  }
  const {
    className,
    variants,
    defaultVariants,
    compoundVariants,
    dataAttributes,
    defaultProps,
  } = parseClassNames(toParse);

  const Comp = (({
    className: cName,
    render,
    ...props
  }: useRender.ComponentProps<any>) => {
    const Component = elementType;

    // Map props variant to className
    const [variantClassNames, dataAttributeProps] = useMemo(() => {
      const dataAttributeProps = getDataAttributes({
        props,
        dataAttributes,
        variants,
        defaultVariants,
      });

      return [
        mapPropsToVariantClass(
          { variants, defaultVariants, compoundVariants },
          props,
          true
        ),
        dataAttributeProps,
      ] as const;
      // biome-ignore lint/correctness/useExhaustiveDependencies: <Its ok>
    }, [props]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <Its ok>
    const merged: string = useMemo(
      () => merger(className, variantClassNames, cName),
      [className, cName, variantClassNames, merger]
    );

    const mergedProps = mergeProps(
      {
        className: merged,
        ...(isClassed && Object.keys(defaultVariants).length
          ? defaultVariants
          : {}),
        ...defaultProps,
        ...dataAttributeProps,
      },
      props
      // biome-ignore lint/complexity/noBannedTypes: <Using empty object to satisfy type system.>
    ) as unknown as {};

    if (isIntrinsicElement(Component)) {
      // biome-ignore lint/correctness/useHookAtTopLevel: <This hook is not being called conditionally, it is determined by elementType which is static at reference time.>
      return useRender({
        defaultTagName: Component,
        render: render,
        props: mergedProps,
      });
    }

    // Preserve the typed component for proper JSX inference.
    // We've already established that Component is not intrinsic, so it's safe to cast.
    const TypedComponent = Component as AnyComponent;

    return (
      <TypedComponent className={merged} render={render} {...mergedProps} />
    );
  }) as unknown as ClassedComponentType<T, V>;

  Comp.displayName = getDisplayName(elementType);

  Reflect.set(Comp, TW_VARS, {
    className,
    variants,
    defaultVariants,
    compoundVariants,
    dataAttributes,
  });

  Reflect.set(Comp, COMPONENT_SYMBOL, true);

  return Comp;
};

export interface ClassedConfig {
  merger?: (...args: string[]) => any;
}

export type CreateClassedType = (config?: ClassedConfig) => {
  classed: ClassedFunctionProxy;
};

export const createClassed = ((config: any) => {
  const classedWithConfig = (elementType: any, ...args: any[]) => {
    return internalClassed(elementType, args, config);
  };

  const classedProxy = new Proxy(classedWithConfig, {
    get: (_, type) => {
      return function (this: unknown, ...args: any[]) {
        return classedWithConfig.apply(this, [type as any, ...args]);
      };
    },
  });

  return {
    classed: classedProxy,
  };
}) as CreateClassedType;

export const { classed } = createClassed();
