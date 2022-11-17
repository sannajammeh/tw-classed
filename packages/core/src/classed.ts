import { ClassedProducer, ClassNamesAndVariant, Variants } from "./types";
import { mapPropsToVariantClass, parseClassNames } from "./parser";
import { mergeClass } from "./utility/classNames";

export function classed<V extends Variants = {}>(
  ...classNames: Array<ClassNamesAndVariant<V> | ClassedProducer<V>>
) {
  // Parse classNames and variants
  const { className, variants, defaultVariants } = parseClassNames(classNames);

  const producer: ClassedProducer<V> = ((variantProps) => {
    // Map variant props to className
    const variantClassName = mapPropsToVariantClass(
      { variants, defaultVariants },
      variantProps
    );

    return mergeClass(className, variantClassName);
  }) as ClassedProducer<V>;

  // Add variants to the classed producer
  producer.variants = variants;

  return producer;
}
