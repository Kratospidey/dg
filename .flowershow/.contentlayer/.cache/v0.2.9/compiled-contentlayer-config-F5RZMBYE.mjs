var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../Digital-Garden/config.js
var require_config = __commonJS({
  "../Digital-Garden/config.js"() {
    {
    }
  }
});

// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { h } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathjax from "rehype-mathjax";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import codeExtra from "remark-code-extra";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import smartypants from "remark-smartypants";
import remarkToc from "remark-toc";
import callouts from "@flowershow/remark-callouts";
import remarkEmbed from "@flowershow/remark-embed";
import wikiLinkPlugin from "@flowershow/remark-wiki-link";

// config/siteConfig.js
var import_config = __toESM(require_config());
import { defaultConfig } from "@flowershow/core";
var siteConfig = {
  ...defaultConfig,
  ...import_config.default,
  theme: {
    ...defaultConfig.theme,
    ...import_config.default?.theme
  }
};

// contentlayer.config.js
var sharedFields = {
  title: { type: "string" },
  description: { type: "string" },
  image: { type: "string" },
  layout: { type: "string", default: "docs" },
  showEditLink: { type: "boolean" },
  showToc: { type: "boolean" },
  isDraft: { type: "boolean" },
  data: { type: "list", of: { type: "string" }, default: [] }
};
var computedFields = {
  url_path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^(.+?\/)*/, "")
  },
  edit_url: {
    type: "string",
    resolve: (post) => siteConfig.editLinkRoot ? `${siteConfig.editLinkRoot}${post._raw.sourceFilePath}/` : void 0
  }
};
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields
  },
  computedFields
}));
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `${siteConfig.blogDir}/!(index)*.md*`,
  contentType: "mdx",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "blog" },
    created: { type: "date", required: true },
    authors: {
      type: "list",
      of: { type: "string" }
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields
}));
var Person = defineDocumentType(() => ({
  name: "Person",
  filePathPattern: `${siteConfig.peopleDir}/!(index)*.md*`,
  contentType: "mdx",
  fields: {
    ...sharedFields,
    id: {
      type: "string"
    },
    name: {
      type: "string",
      required: true
    },
    avatar: {
      type: "string",
      default: siteConfig.avatarPlaceholder
    },
    email: {
      type: "string"
    },
    twitter: {
      type: "string"
    },
    linkedin: {
      type: "string"
    },
    github: {
      type: "string"
    }
  },
  computedFields
}));
var contentLayerExcludeDefaults = [
  "node_modules",
  ".git",
  ".yarn",
  ".cache",
  ".next",
  ".contentlayer",
  "package.json",
  "tsconfig.json"
];
var contentlayer_config_default = makeSource({
  contentDirPath: siteConfig.content,
  contentDirExclude: contentLayerExcludeDefaults.concat([
    ".flowershow",
    ".obsidian",
    ...siteConfig.contentExclude
  ]),
  contentDirInclude: siteConfig.contentInclude,
  documentTypes: [Blog, Person, Page],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkEmbed,
      remarkGfm,
      [smartypants, { quotes: false, dashes: "oldschool" }],
      remarkMath,
      callouts,
      [wikiLinkPlugin, { markdownFolder: siteConfig.content }],
      [
        codeExtra,
        {
          transform: (node) => {
            if (node.type === "code" && node.lang === "mermaid") {
              return {
                after: [
                  {
                    type: "element",
                    tagName: "pre",
                    properties: {
                      className: "code-mermaid"
                    },
                    children: [
                      {
                        type: "text",
                        value: node.value
                      }
                    ]
                  }
                ],
                transform: (n) => {
                  const preElem = n.data.hChildren.find(
                    (el) => el.tagName === "pre"
                  );
                  const index = n.data.hChildren.indexOf(preElem);
                  n.data.hChildren.splice(index, 1);
                }
              };
            }
            return null;
          }
        }
      ],
      [
        remarkToc,
        {
          heading: "Table of contents",
          tight: true
        }
      ]
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          test(element) {
            return ["h2", "h3", "h4", "h5", "h6"].includes(element.tagName) && element.properties?.id !== "table-of-contents" && element.properties?.className !== "blockquote-heading";
          },
          content() {
            return [
              h(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "#ab2b65",
                  viewBox: "0 0 20 20",
                  className: "w-5 h-5"
                },
                [
                  h("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z"
                  })
                ]
              )
            ];
          }
        }
      ],
      rehypeMathjax,
      [rehypePrismPlus, { ignoreMissing: true }]
    ]
  }
});
export {
  Person,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-F5RZMBYE.mjs.map
