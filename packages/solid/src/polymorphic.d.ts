/**
 * SolidJS polymorphic types
 * Redistributed as its depricated in the original package
 * @author Sanna Jammeh
 * @source https://github.com/radix-ui/primitives
 */

import {
  Component,
  FlowComponent,
  ValidComponent,
  JSX,
  JSXElement,
} from "solid-js";

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

export type OwnProps<E> = E extends PolymorphicComponent<infer P> ? P : {};

export type IntrinsicElement<E> = E extends PolymorphicComponent<any, infer I>
  ? I
  : never;

type PolymorphicExoticComponent<E, OwnProps> = Component<
  Merge<
    E extends ValidComponent ? FlowComponent<E> : never,
    OwnProps & {
      as?: E;
    }
  >
>;

export interface PolymorphicComponent<
  IntrinsicElementString,
  OwnProps = {}
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends PolymorphicExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ""
      ? {
          as: keyof JSX.IntrinsicElements;
        }
      : As extends Component<infer P>
      ? Merge<
          P,
          OwnProps & {
            as?: As;
          }
        >
      : As extends keyof JSX.IntrinsicElements
      ? Merge<
          JSX.IntrinsicElements[As],
          OwnProps & {
            as?: As;
          }
        >
      : never
  ): JSXElement;
}
