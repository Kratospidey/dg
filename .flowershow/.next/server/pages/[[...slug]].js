(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ siteConfig)
/* harmony export */ });
/* harmony import */ var _flowershow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(949);
/* harmony import */ var _content_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var _content_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_config__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_flowershow_core__WEBPACK_IMPORTED_MODULE_0__]);
_flowershow_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const siteConfig = {
    ..._flowershow_core__WEBPACK_IMPORTED_MODULE_0__.defaultConfig,
    ...(_content_config__WEBPACK_IMPORTED_MODULE_1___default()),
    // prevent theme object overrides for
    // values not provided in userConfig
    theme: {
        ..._flowershow_core__WEBPACK_IMPORTED_MODULE_0__.defaultConfig.theme,
        ...(_content_config__WEBPACK_IMPORTED_MODULE_1___default())?.theme
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flowershow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_flowershow_core__WEBPACK_IMPORTED_MODULE_0__]);
_flowershow_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    simple: _flowershow_core__WEBPACK_IMPORTED_MODULE_0__.SimpleLayout,
    docs: _flowershow_core__WEBPACK_IMPORTED_MODULE_0__.DocsLayout,
    unstyled: _flowershow_core__WEBPACK_IMPORTED_MODULE_0__.UnstyledLayout,
    blog: _flowershow_core__WEBPACK_IMPORTED_MODULE_0__.BlogLayout
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getAuthorsDetails)
/* harmony export */ });
/* harmony import */ var _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__]);
([_config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getAuthorsDetails = (authors)=>{
    let blogAuthors = [];
    if (authors) {
        blogAuthors = authors;
    } else if (_config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.defaultAuthor */ .J.defaultAuthor) {
        blogAuthors = [
            _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.defaultAuthor */ .J.defaultAuthor
        ];
    }
    return blogAuthors.map((author)=>{
        return contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allPeople.find */ .tf.find(({ id , slug , name  })=>id === author || slug === author || name === author) ?? {
            name: author,
            avatar: _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.avatarPlaceholder */ .J.avatarPlaceholder
        };
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getPageData)
/* harmony export */ });
async function getPageData(dataProperties) {
    const data = {};
    for (const dataProperty of dataProperties){
        try {
            const dataGetter = (await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default;
            data[dataProperty] = await dataGetter();
        } catch  {
            console.error(`Getter "${dataProperty}" does not exist in "<your-content-folder>/getters"`);
        }
    }
    return data;
}


/***/ }),

/***/ 214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(427);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _flowershow_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(949);
/* harmony import */ var _lib_getPageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(966);
/* harmony import */ var _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(946);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(389);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__, _flowershow_core__WEBPACK_IMPORTED_MODULE_4__, _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_6__, _layouts__WEBPACK_IMPORTED_MODULE_7__, _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__, _flowershow_core__WEBPACK_IMPORTED_MODULE_4__, _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_6__, _layouts__WEBPACK_IMPORTED_MODULE_7__, _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint import/no-default-export: off */ 








function Page({ globals , body , ...meta }) {
    const MDXPage = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__.useMDXComponent)(body.code, globals);
    const { image , title , description  } = meta;
    const MDXComponents = {
        /* Head, */ // TODO why do we need this here?
        a: _flowershow_core__WEBPACK_IMPORTED_MODULE_4__.CustomLink,
        pre: _flowershow_core__WEBPACK_IMPORTED_MODULE_4__.Pre,
        /* eslint no-unused-vars: off */ // TODO this is a temporary workaround for errors resulting from importing this component directly in mdx file
        // see this issue for ref: https://github.com/kentcdodds/mdx-bundler/issues/156
        BlogsList: _flowershow_core__WEBPACK_IMPORTED_MODULE_4__.BlogsList,
        wrapper: ({ components , layout , ...props })=>{
            const Layout = _layouts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[layout];
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                ...props
            });
        }
    };
    // Handle SEO Image urls in frontmatter
    // TODO why do we remove the "/" at the end? Should images be in form of "/some_image.png"?
    const websiteUrl = _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.authorUrl.replace */ .J.authorUrl.replace(/\/+$/, "");
    const seoImageUrl = image && image.startsWith("http") ? image : websiteUrl + image;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: title,
                openGraph: {
                    title: title,
                    description: description,
                    images: image ? [
                        {
                            url: seoImageUrl,
                            width: 1200,
                            height: 627,
                            alt: title
                        }
                    ] : _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig */ .J?.nextSeo?.openGraph?.images || []
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXPage, {
                components: MDXComponents,
                ...meta
            }),
            ";"
        ]
    });
}
async function getStaticProps({ params  }) {
    // params.slug is undefined for root index page
    const urlPath = params.slug ? params.slug.join("/") : "";
    const page = contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__/* .allDocuments.find */ .cx.find((p)=>p.url_path === urlPath);
    const globals = await (0,_lib_getPageData__WEBPACK_IMPORTED_MODULE_5__/* .getPageData */ .u)(page.data);
    // TODO this is a temporary solution used to pass authors to blog layout
    const authorsDetails = (0,_lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_6__/* .getAuthorsDetails */ .V)(page.authors);
    return {
        props: {
            ...page,
            authorsDetails,
            globals
        }
    };
}
async function getStaticPaths() {
    const paths = contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__/* .allDocuments.filter */ .cx.filter((page)=>!page?.isDraft).map((page)=>{
        const parts = page.url_path.split("/");
        return {
            params: {
                slug: parts
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 118:
/***/ (() => {

{}

/***/ }),

/***/ 641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 949:
/***/ ((module) => {

"use strict";
module.exports = import("@flowershow/core");;

/***/ }),

/***/ 8:
/***/ ((module) => {

"use strict";
module.exports = import("contentlayer/client");;

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [427], () => (__webpack_exec__(214)));
module.exports = __webpack_exports__;

})();