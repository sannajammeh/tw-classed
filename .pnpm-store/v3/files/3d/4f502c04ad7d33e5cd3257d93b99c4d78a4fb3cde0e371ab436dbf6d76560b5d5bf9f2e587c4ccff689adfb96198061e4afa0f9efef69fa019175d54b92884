/**
 * Continue traversing as normal
 */
export const CONTINUE: true
/**
 * Do not traverse this node’s children
 */
export const SKIP: 'skip'
/**
 * Stop traversing immediately
 */
export const EXIT: false
export const visitParents: (<T extends import('unist').Node>(
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
/**
 * Union of the action types
 */
export type Action = true | 'skip' | false
/**
 * Move to the sibling at index next (after node itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings (or next siblings, in case of reverse) Results less than 0 or greater than or equal to children.length stop traversing the parent
 */
export type Index = number
/**
 * List with one or two values, the first an action, the second an index.
 */
export type ActionTuple = [
  (Action | null | undefined | void)?,
  (Index | null | undefined)?
]
/**
 * Any value that can be returned from a visitor
 */
export type VisitorResult =
  | null
  | undefined
  | Action
  | Index
  | [(void | Action)?, number?]
  | void
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
  ancestors: Array<Parent>
) => VisitorResult
