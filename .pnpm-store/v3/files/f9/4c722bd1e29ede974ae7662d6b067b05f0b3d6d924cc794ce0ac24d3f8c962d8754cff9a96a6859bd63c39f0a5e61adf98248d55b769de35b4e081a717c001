import {
  EXTERNAL_URL_REGEX,
  PUBLIC_DIR,
  truthy
} from "./chunk-NIIBOJPU.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HIDP27A7.mjs";

// src/compile.ts
import { createProcessor } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeMdxTitle } from "rehype-mdx-title";
import readingTime from "remark-reading-time";

// src/mdx-plugins/rehype.js
import Slugger from "github-slugger";

// src/mdx-plugins/remark.ts
import { visit } from "unist-util-visit";
var getFlattenedValue = (node) => node.children.map(
  (child) => "children" in child ? getFlattenedValue(child) : "value" in child ? child.value : ""
).join("");
var remarkHeadings = function() {
  const data = this.data();
  return (tree, _file, done) => {
    visit(
      tree,
      [
        { type: "heading" },
        { name: "summary" },
        { name: "details" }
      ],
      (node) => {
        if (node.type === "heading") {
          const hasJsxInH1 = node.depth === 1 && Array.isArray(node.children) && node.children.some(
            (child) => child.type === "mdxJsxTextElement"
          );
          const heading = __spreadProps(__spreadValues({}, node), {
            value: getFlattenedValue(node)
          });
          data.headingMeta.headings.push(heading);
          if (hasJsxInH1) {
            data.headingMeta.hasJsxInH1 = true;
          }
          return;
        }
        if (node.data) {
          delete node.data._mdxExplicitJsx;
        }
      }
    );
    done();
  };
};

// src/mdx-plugins/rehype.js
function visit2(node, tagNames, handler) {
  var _a;
  if (tagNames.includes(node.tagName)) {
    handler(node);
    return;
  }
  (_a = node.children) == null ? void 0 : _a.forEach((n) => visit2(n, tagNames, handler));
}
var parseMeta = () => (tree) => {
  visit2(tree, ["pre"], (node) => {
    var _a, _b;
    const [codeEl] = node.children;
    (_a = codeEl.properties).className || (_a.className = ["language-text"]);
    node.__nextra_meta__ = (_b = codeEl.data) == null ? void 0 : _b.meta;
    node.__nextra_text__ = codeEl.children[0].value;
  });
};
var attachMeta = ({ defaultShowCopyCode }) => (tree) => {
  const slugger = new Slugger();
  visit2(tree, ["div", "h2", "h3", "h4", "h5", "h6"], (node) => {
    var _a, _b;
    if (node.tagName !== "div") {
      (_a = node.properties).id || (_a.id = slugger.slug(getFlattenedValue(node)));
      return;
    }
    if (!("data-rehype-pretty-code-fragment" in node.properties)) {
      return;
    }
    const meta = node.__nextra_meta__;
    const hasCopy = meta ? defaultShowCopyCode && !/( |^)copy=false($| )/.test(meta) || /( |^)copy($| )/.test(meta) : defaultShowCopyCode;
    const [preEl] = node.children;
    if (hasCopy) {
      preEl.properties.value = JSON.stringify(node.__nextra_text__);
    }
    const filename = (_b = meta == null ? void 0 : meta.match(/filename="([^"]+)"/)) == null ? void 0 : _b[1];
    if (filename) {
      preEl.properties.filename = filename;
    }
  });
};

// src/mdx-plugins/static-image.ts
import { visit as visit3 } from "unist-util-visit";
import path from "path";

// src/file-system.ts
import fs from "graceful-fs";
var existsSync = (filePath) => {
  try {
    fs.statSync(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

// src/mdx-plugins/static-image.ts
var getASTNodeImport = (name, from) => ({
  type: "mdxjsEsm",
  value: `import ${name} from "${from}"`,
  data: {
    estree: {
      type: "Program",
      sourceType: "module",
      body: [
        {
          type: "ImportDeclaration",
          specifiers: [
            {
              type: "ImportDefaultSpecifier",
              local: { type: "Identifier", name }
            }
          ],
          source: {
            type: "Literal",
            value: from,
            raw: `"${from}"`
          }
        }
      ]
    }
  }
});
var remarkStaticImage = ({ filePath }) => (tree, _file, done) => {
  const importsToInject = [];
  visit3(tree, "image", (node) => {
    let { url } = node;
    if (!url) {
      console.warn(
        `[nextra] File "${filePath}" contain image with empty "src" property, skipping\u2026`
      );
      return;
    }
    if (EXTERNAL_URL_REGEX.test(url)) {
      return;
    }
    if (url.startsWith("/")) {
      const urlPath = path.join(PUBLIC_DIR, url);
      if (!existsSync(urlPath)) {
        console.error(
          `[nextra] File "${filePath}" contain image with url "${url}" that not found in "/public" directory, skipping\u2026`
        );
        return;
      }
      url = urlPath;
    }
    const tempVariableName = `$nextraImage${importsToInject.length}`;
    Object.assign(node, {
      type: "mdxJsxFlowElement",
      name: "$NextImageNextra",
      children: [],
      attributes: [
        node.alt && {
          type: "mdxJsxAttribute",
          name: "alt",
          value: node.alt
        },
        !url.endsWith(".svg") && {
          type: "mdxJsxAttribute",
          name: "placeholder",
          value: "blur"
        },
        {
          type: "mdxJsxAttribute",
          name: "src",
          value: {
            type: "mdxJsxAttributeValueExpression",
            value: tempVariableName,
            data: {
              estree: {
                type: "Program",
                sourceType: "module",
                body: [
                  {
                    type: "ExpressionStatement",
                    expression: {
                      type: "Identifier",
                      name: tempVariableName
                    }
                  }
                ]
              }
            }
          }
        }
      ].filter(truthy)
    });
    importsToInject.push(getASTNodeImport(tempVariableName, url));
  });
  tree.children.unshift(
    getASTNodeImport("$NextImageNextra", "next/image"),
    ...importsToInject
  );
  done();
};

// src/mdx-plugins/structurize.js
import Slugger2 from "github-slugger";
function cleanup(content) {
  return content.trim().split("\n").map((line) => line.trim()).join("\n");
}
var structurize = (structurizedData, options) => {
  if (typeof options === "boolean") {
    options = {};
  }
  options = Object.assign({ codeblocks: true }, options);
  const slugger = new Slugger2();
  let activeSlug = "";
  let skip = false;
  let content = "";
  return function stripMarkdown() {
    return (node) => {
      walk(node);
      structurizedData[activeSlug] = cleanup(content);
      return node;
    };
    function walk(node) {
      let result = "";
      const type = node.type;
      if (type === "heading") {
        skip = true;
      }
      if (["code", "table", "blockquote", "list", "mdxJsxFlowElement"].includes(
        type
      )) {
        result += "\n";
        if (!skip) {
          content += "\n";
        }
      }
      if ("children" in node) {
        for (let i = 0; i < node.children.length; i++) {
          result += walk(node.children[i]);
        }
      } else if ([
        options.codeblocks ? "code" : "",
        "text",
        "inlineCode",
        "tableCell"
      ].includes(type)) {
        result += node.value;
        if (!skip) {
          content += node.value;
        }
      }
      if ([
        "code",
        "table",
        "blockquote",
        "list",
        "listItem",
        "break",
        "mdxJsxFlowElement"
      ].includes(type)) {
        result += "\n";
        if (!skip) {
          content += "\n";
        }
      }
      if (type === "tableCell") {
        result += "	";
        if (!skip) {
          content += "	";
        }
      }
      if (type === "heading") {
        skip = false;
      }
      if (type === "heading" && node.depth > 1) {
        structurizedData[activeSlug] = cleanup(content);
        content = "";
        activeSlug = slugger.slug(result) + "#" + result;
      }
      return result;
    }
  };
};

// src/theme.json
var theme_default = {
  name: "css-variables",
  type: "light",
  colors: {
    "editor.foreground": "#000001",
    "editor.background": "#000002"
  },
  tokenColors: [
    {
      settings: {
        foreground: "#000001"
      }
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      settings: {
        foreground: "#ef6270"
      }
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      settings: {
        foreground: "#4bb74a"
      }
    },
    {
      scope: [
        "keyword.operator.accessor",
        "meta.group.braces.round.function.arguments",
        "meta.template.expression",
        "markup.fenced_code meta.embedded.block"
      ],
      settings: {
        foreground: "#000001"
      }
    },
    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"],
      settings: {
        fontStyle: "bold"
      }
    },
    {
      scope: ["markup.italic.markdown"],
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: "meta.link.inline.markdown",
      settings: {
        fontStyle: "underline",
        foreground: "#000004"
      }
    },
    {
      scope: ["string", "markup.fenced_code", "markup.inline"],
      settings: {
        foreground: "#000005"
      }
    },
    {
      scope: ["comment", "string.quoted.docstring.multi"],
      settings: {
        foreground: "#000006"
      }
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.other.placeholder",
        "constant.character.format.placeholder",
        "variable.language.this",
        "variable.other.object",
        "variable.other.class",
        "variable.other.constant",
        "meta.property-name",
        "meta.property-value",
        "support"
      ],
      settings: {
        foreground: "#000004"
      }
    },
    {
      scope: [
        "keyword",
        "storage.modifier",
        "storage.type",
        "storage.control.clojure",
        "entity.name.function.clojure",
        "entity.name.tag.yaml",
        "support.function.node",
        "support.type.property-name.json",
        "punctuation.separator.key-value",
        "punctuation.definition.template-expression"
      ],
      settings: {
        foreground: "#000007"
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "#000008"
      }
    },
    {
      scope: [
        "support.function",
        "entity.name.type",
        "entity.other.inherited-class",
        "meta.function-call",
        "meta.instance.constructor",
        "entity.other.attribute-name",
        "entity.name.function",
        "constant.keyword.clojure"
      ],
      settings: {
        foreground: "#000009"
      }
    },
    {
      scope: [
        "entity.name.tag",
        "string.quoted",
        "string.regexp",
        "string.interpolated",
        "string.template",
        "string.unquoted.plain.out.yaml",
        "keyword.other.template"
      ],
      settings: {
        foreground: "#000010"
      }
    },
    {
      scope: [
        "punctuation.definition.arguments",
        "punctuation.definition.dict",
        "punctuation.separator",
        "meta.function-call.arguments"
      ],
      settings: {
        foreground: "#000011"
      }
    },
    {
      name: "[Custom] Markdown links",
      scope: [
        "markup.underline.link",
        "punctuation.definition.metadata.markdown"
      ],
      settings: {
        foreground: "#000012"
      }
    },
    {
      name: "[Custom] Markdown list",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: "#000005"
      }
    },
    {
      name: "[Custom] Markdown punctuation definition brackets",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "string.other.link.title.markdown",
        "string.other.link.description.markdown"
      ],
      settings: {
        foreground: "#000007"
      }
    }
  ]
};

// src/compile.ts
var createCompiler = (mdxOptions) => {
  const compiler = createProcessor(mdxOptions);
  compiler.data("headingMeta", {
    headings: []
  });
  return compiler;
};
var rehypePrettyCodeOptions = {
  theme: theme_default,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["highlighted"];
  }
};
function compileMdx(_0) {
  return __async(this, arguments, function* (source, loaderOptions = {}, filePath = "") {
    const structurizedData = /* @__PURE__ */ Object.create(null);
    const mdxOptions = loaderOptions.mdxOptions || {};
    const compiler = createCompiler({
      jsx: mdxOptions.jsx || false,
      outputFormat: mdxOptions.outputFormat || "function-body",
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        ...mdxOptions.remarkPlugins || [],
        remarkGfm,
        remarkHeadings,
        loaderOptions.unstable_staticImage && [remarkStaticImage, { filePath }],
        loaderOptions.unstable_flexsearch && structurize(structurizedData, loaderOptions.unstable_flexsearch),
        loaderOptions.unstable_readingTime && readingTime
      ].filter(truthy),
      rehypePlugins: [
        ...mdxOptions.rehypePlugins || [],
        parseMeta,
        [
          rehypePrettyCode,
          __spreadValues(__spreadValues({}, rehypePrettyCodeOptions), mdxOptions.rehypePrettyCodeOptions)
        ],
        [rehypeMdxTitle, { name: "__nextra_title__" }],
        [
          attachMeta,
          { defaultShowCopyCode: loaderOptions.unstable_defaultShowCopyCode }
        ]
      ]
    });
    try {
      const vFile = yield compiler.process(source);
      const result = String(vFile).replace("export const __nextra_title__", "const __nextra_title__").replace("export default MDXContent;", "");
      const readingTime2 = vFile.data.readingTime;
      return __spreadProps(__spreadValues(__spreadValues({
        result
      }, compiler.data("headingMeta")), readingTime2 && { readingTime: readingTime2 }), {
        structurizedData
      });
    } catch (err) {
      console.error(`[nextra] Error compiling ${filePath}.`);
      throw err;
    }
  });
}

export {
  existsSync,
  compileMdx
};
