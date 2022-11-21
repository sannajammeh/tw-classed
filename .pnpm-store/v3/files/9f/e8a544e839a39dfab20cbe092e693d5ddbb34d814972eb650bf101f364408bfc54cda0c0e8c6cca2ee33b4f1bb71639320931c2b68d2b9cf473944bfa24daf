export const visit: (<T extends import('unist').Node>(
  tree: Node,
  test:
    | T['type']
    | Partial<T>
    | import('unist-util-is').TestFunctionPredicate<T>
    | (
        | T['type']
        | Partial<T>
        | import('unist-util-is').TestFunctionPredicate<T>
      )[],
  visitor: Visitor<T>,
  reverse?: boolean
) => void) &
  ((
    tree: Node,
    test: Test,
    visitor: Visitor<Node>,
    reverse?: boolean
  ) => void) &
  ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
export type Node = import('unist').Node
export type Parent = import('unist').Parent
export type Test = import('unist-util-is').Test
export type VisitorResult = import('unist-util-visit-parents').VisitorResult
/**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 */
export type Visitor<V extends import('unist').Node> = (
  node: V,
  index: number | null,
  parent: Parent | null
) => VisitorResult
import {CONTINUE} from 'unist-util-visit-parents'
import {SKIP} from 'unist-util-visit-parents'
import {EXIT} from 'unist-util-visit-parents'
export {CONTINUE, SKIP, EXIT}
