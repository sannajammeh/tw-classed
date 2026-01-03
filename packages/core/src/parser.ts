import { TW_VARS } from "./constants";
import {
	ClassNamesAndVariant,
	InferVariantProps,
	VariantConfig,
	Variants,
} from "./types";
import { cx, mergeClass } from "./utility/classNames";

/**
 * Parses & merging variants from a given string or variant config
 * @internal
 */
export const parseClassNames = <TVariants extends Variants>(
	classNames: Array<ClassNamesAndVariant<TVariants> | any>,
) => {
	let stringClassNames = [];
	let variantObj = {} as TVariants;
	let defaultVariants = {} as Partial<
		Required<VariantConfig<TVariants>>["defaultVariants"]
	>;
	let compoundVariants = [] as Record<string, any>[];
	let dataAttributes = new Set<string>();
	let defaultProps: Record<string, unknown> = {};

	for (const className of classNames) {
		if (!className) continue;

		if (typeof className === "string") {
			stringClassNames.push(className);
			continue;
		}

		if (typeof className === "object" || typeof className === "function") {
			const record: VariantConfig<TVariants> = Reflect.has(className, TW_VARS)
				? Reflect.get<VariantConfig<TVariants>, symbol>(className, TW_VARS)
				: (className as VariantConfig<TVariants>);

			if (record.variants) Object.assign(variantObj, record.variants);

			if (record.defaultVariants)
				Object.assign(defaultVariants, record.defaultVariants);

			if (record.compoundVariants)
				record.compoundVariants.forEach((cv) => compoundVariants.push(cv));

			if (record.className) stringClassNames.push(record.className);
			if (record.base) stringClassNames.push(record.base);

			if (record.dataAttributes)
				record.dataAttributes.forEach((name) => {
					dataAttributes.add(name);
				});

			if (record.defaultProps) Object.assign(defaultProps, record.defaultProps);
		}
	}

	return {
		className: cx(stringClassNames),
		variants: variantObj,
		defaultVariants,
		compoundVariants,
		dataAttributes: Array.from(dataAttributes),
		defaultProps,
	};
};

/**
 * Gets the variant selector from the variant props
 */
export const getVariantSelector = <TVariants extends Variants>(
	variantKey: string,
	props: Partial<InferVariantProps<TVariants>>,
	{ defaultVariants }: Pick<VariantConfig<TVariants>, "defaultVariants">,
) => {
	const variantValue = props[variantKey];
	const vStringValue = variantValue?.toString();
	return vStringValue || defaultVariants?.[variantKey]?.toString();
};

export const mapPropsToVariantClass = <
	TVariants extends Variants,
	TRecord extends VariantConfig<TVariants> = VariantConfig<TVariants>,
>(
	{
		variants,
		defaultVariants,
		compoundVariants,
	}: {
		variants: TVariants;
		defaultVariants: TRecord["defaultVariants"];
		compoundVariants?: Record<string, any>[];
	},
	props: Partial<InferVariantProps<TVariants>> = {},
	shouldDeleteProps = false,
) => {
	const matchedKeys: Set<string> = new Set();
	const producedClassName = Object.keys(variants).reduce((acc, variantKey) => {
		const variantSelector = getVariantSelector(variantKey, props, {
			defaultVariants,
		});

		if (!variantSelector) return acc;
		shouldDeleteProps && matchedKeys.add(variantKey);
		const variantClassName = variants[variantKey][variantSelector];
		if (!variantClassName) return acc;

		// Variant is matched
		return mergeClass(acc, variantClassName);
	}, "");

	const compoundedClassNames = getCompoundVariantClasses(
		{
			props,
			defaultVariants,
		},
		compoundVariants,
	);

	shouldDeleteProps && matchedKeys.forEach((key) => delete props[key]);

	return mergeClass(producedClassName, compoundedClassNames?.join(" "));
};

export function getCompoundVariantClasses(
	{
		props,
		defaultVariants,
	}: {
		defaultVariants: VariantConfig<any>["defaultVariants"];
		props: Record<string, any>;
	},
	compoundVariants: VariantConfig<any>["compoundVariants"] = [],
) {
	return compoundVariants.reduce(
		(acc: string[], { class: cvClass, className: cvClassName, ...cvo }) => {
			const notMatched = Object.entries(cvo).some(
				([key, value]: [string, string | string[]]) => {
					const propValue = props[key];

					const valueToUse =
						propValue !== undefined ? propValue : defaultVariants?.[key];

					return Array.isArray(value)
						? !value.includes(valueToUse)
						: valueToUse !== value;
				},
			);

			if (!notMatched) {
				if (cvClass) acc.push(cvClass);
				if (cvClassName) acc.push(cvClassName);
			}

			return acc;
		},
		[] as string[],
	);
}
export function getDataAttributes({
	props,
	dataAttributes,
	variants,
	defaultVariants,
}: {
	props: Record<string, any>;
	dataAttributes: string[];
	variants: VariantConfig<any>["variants"];
	defaultVariants: VariantConfig<any>["defaultVariants"];
}) {
	if (dataAttributes.length === 0) return {};
	return dataAttributes.reduce(
		(acc, name) => {
			const variantName = props[name] ?? defaultVariants?.[name];
			const value = variants[name]?.[variantName];
			if (value != null) {
				acc[`data-${name}`] = variantName;
			}
			return acc;
		},
		{} as Record<string, string>,
	);
}
