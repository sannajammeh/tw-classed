import { name as isIdentifierName } from 'estree-util-is-identifier-name'
import { valueToEstree } from 'estree-util-value-to-estree'

export default function remarkMdxReadingTime({
  /**
   * The attribute name to export the stored the reading time under data.
   *
   * @type {string}
   * @default "readingTime"
   */
  name = 'readingTime',
  /**
   * The attribute name to store the reading time under data in remark plugin.
   *
   * @type {string}
   * @default "readingTime"
   */
  remarkReadingTimeName = 'readingTime'
} = {}) {
  if (!isIdentifierName(name)) {
    throw new Error(
      `The name should be a valid identifier name, got: ${JSON.stringify(
        name,
      )}`,
    )
  }

  return function transformer(tree, vfile) {
    const readingTime = vfile.data[remarkReadingTimeName];

    if (readingTime === undefined) return

    tree.children.unshift({
      type: 'mdxjsEsm',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              source: null,
              specifiers: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name },
                    init: valueToEstree(readingTime),
                  },
                ],
              },
            },
          ],
        },
      },
    })
  }
}
