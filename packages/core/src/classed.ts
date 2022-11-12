import { ClassedProducer, ClassNamesAndVariant, Variants } from "./types.js";
import { mapPropsToVariantClass, parseClassNames } from "./parser.js";
import { mergeClass } from "./utility/classNames.js";

export default function classed<V extends Variants = {}>(
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