import {
  ClassNamesAndVariant,
  mapPropsToVariantClass,
  getDataAttributes,
  parseClassNames,
  TW_VARS,
  Variants,
} from "@tw-classed/core";
import { forwardRef, useMemo } from "react";
import {
  AnyComponent,
  ClassedComponentType,
  ClassedFunctionProxy,
  StrictComponentType,
  VariantProps,
} from "./types";
import { isClassedComponent, COMPONENT_SYMBOL } from "./utility/unique";

export const cx = (...args: string[]): string =>
  args.filter((v) => !!v && typeof v === "string").join(" ");

export const internalClassed = <
  T extends keyof React.JSX.IntrinsicElements | AnyComponent,
  V extends Variants = {}
>(
  elementType: T,
  classNames: ClassNamesAndVariant<{}>[],
  { merger = cx }: ClassedConfig = {}
) => {
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

  const Comp = forwardRef(
    ({ as, className: cName, ...props }: any, forwardedRef: any) => {
      const Component = isClassed
        ? elementType
        : typeof elementType === "object"
        ? elementType
        : as || elementType;

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
      }, [props]);

      const merged = useMemo(
        () => merger(className, variantClassNames, cName),
        [className, cName, variantClassNames]
      );

      return (
        <Component
          className={merged}
          {...props}
          {...(isClassed && Object.keys(defaultVariants).length
            ? defaultVariants
            : {})}
          {...dataAttributeProps}
          {...defaultProps}
          as={isClassed ? as : undefined}
          ref={forwardedRef}
        />
      );
    }
  ) as unknown as ClassedComponentType<T, V>;

  Comp.displayName =
    typeof elementType !== "string"
      ? elementType.displayName || elementType.name || "Compoonent"
      : `TwComponent(${elementType})`;

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

export interface CreateClassedType {
  (config?: ClassedConfig): {
    classed: ClassedFunctionProxy;
  };
}

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

export type StrictClassedFunction = <
  T extends ClassedComponentType<any, {}>,
  Composers extends (keyof VariantProps<T>)[] | never[]
>(
  comp: T,
  ...composers: Composers
) => Composers extends never[]
  ? StrictComponentType<T>
  : StrictComponentType<T, Composers[number]>;

export const makeStrict = ((component: any) =>
  component) as StrictClassedFunction;
