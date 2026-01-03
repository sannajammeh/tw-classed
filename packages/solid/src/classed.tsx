import { createMemo, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { AnyComponent, ClassedFunctionProxy } from "./types";
import {
	ClassNamesAndVariant,
	mapPropsToVariantClass,
	parseClassNames,
	TW_VARS,
	Variants,
} from "@tw-classed/core";
import { COMPONENT_SYMBOL, isClassedComponent } from "./helpers";
export * from "./types";

const cx = (...args: string[]) => args.filter(Boolean).join(" ");

export const internalClassed = <
	T extends keyof JSX.IntrinsicElements | AnyComponent,
	V extends Variants = {},
>(
	elementType: T,
	classNames: ClassNamesAndVariant<V>[],
	{ merger = cx }: ClassedConfig = {},
) => {
	const { className, variants, defaultVariants, compoundVariants } =
		parseClassNames(classNames);

	const variantKeys = Object.keys(variants);

	const Comp = (props: any) => {
		const [local, others] = splitProps(props, ["as", "class"]);
		const [, final] = splitProps(others, variantKeys);
		const component = isClassedComponent(elementType)
			? elementType
			: local.as || elementType;

		// Map props variant to className
		const variantClassNames = createMemo(() => {
			// Register the variant props with solid so that it can be tracked
			const [variantProps] = splitProps(props, variantKeys);
			return mapPropsToVariantClass(
				{ variants, defaultVariants, compoundVariants },
				variantProps,
				true,
			);
		});

		const merged = createMemo(() => {
			return merger(className, local.class, variantClassNames());
		});

		return (
			<Dynamic
				component={component}
				class={merged()}
				{...final}
				as={isClassedComponent(elementType) ? local.as : undefined}
			/>
		);
	};

	Reflect.set(Comp, TW_VARS, {
		className,
		variants,
		defaultVariants,
	});

	Reflect.set(Comp, COMPONENT_SYMBOL, true);

	return Comp;
};

// Proxy

export interface ClassedConfig {
	merger?: (...args: string[]) => string;
}

export interface CreateClassedType {
	(
		config?: ClassedConfig,
	): {
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

export const classed = createClassed({}).classed;
