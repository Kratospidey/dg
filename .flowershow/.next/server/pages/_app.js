(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _flowershow_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(949);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(323);
/* harmony import */ var _styles_docsearch_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(844);
/* harmony import */ var _styles_docsearch_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_docsearch_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(605);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(913);
/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_flowershow_core__WEBPACK_IMPORTED_MODULE_7__, _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__]);
([_flowershow_core__WEBPACK_IMPORTED_MODULE_7__, _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint import/no-default-export: off */ 











function MyApp({ Component , pageProps  }) {
    const [tableOfContents, setTableOfContents] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // TODO maybe use computed fields for showEditLink and showToc to make this even cleaner?
    const layoutProps = {
        showToc: pageProps.showToc ?? _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.tableOfContents */ .J.tableOfContents,
        showEditLink: pageProps.showEditLink ?? _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.editLinkShow */ .J.editLinkShow,
        edit_url: pageProps.edit_url,
        tableOfContents,
        nav: {
            title: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.navbarTitle */ .J.navbarTitle?.text || _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.title */ .J.title,
            logo: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.navbarTitle */ .J.navbarTitle?.logo,
            links: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.navLinks */ .J.navLinks,
            search: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.search */ .J.search,
            social: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.social */ .J.social
        },
        author: {
            name: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.author */ .J.author,
            url: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.authorUrl */ .J.authorUrl,
            logo: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.authorLogo */ .J.authorLogo
        },
        theme: {
            defaultTheme: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.theme["default"] */ .J.theme["default"],
            themeToggleIcon: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.theme.toggleIcon */ .J.theme.toggleIcon
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (_config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.analytics */ .J.analytics) {
            const handleRouteChange = (url)=>{
                (0,_flowershow_core__WEBPACK_IMPORTED_MODULE_7__.pageview)(url);
            };
            router.events.on("routeChangeComplete", handleRouteChange);
            return ()=>{
                router.events.off("routeChangeComplete", handleRouteChange);
            };
        }
    }, [
        router.events
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const headingNodes = document.querySelectorAll("h2,h3");
        const toc = (0,_flowershow_core__WEBPACK_IMPORTED_MODULE_7__.collectHeadings)(headingNodes);
        setTableOfContents(toc ?? []);
    }, [
        router.asPath
    ]); // update table of contents on route change with next/link
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        disableTransitionOnChange: true,
        attribute: "class",
        defaultTheme: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.theme["default"] */ .J.theme["default"],
        forcedTheme: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.theme["default"] */ .J.theme["default"] ? null : "light",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, {
                defaultTitle: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.title */ .J.title,
                ..._config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.nextSeo */ .J.nextSeo
            }),
            _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.analytics */ .J.analytics && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                        strategy: "afterInteractive",
                        src: `https://www.googletagmanager.com/gtag/js?id=${_config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.analytics */ .J.analytics}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                        id: "gtag-init",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${_config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.analytics */ .J.analytics}', {
                page_path: window.location.pathname,
              });
            `
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flowershow_core__WEBPACK_IMPORTED_MODULE_7__.SearchProvider, {
                searchConfig: _config_siteConfig__WEBPACK_IMPORTED_MODULE_8__/* .siteConfig.search */ .J.search,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flowershow_core__WEBPACK_IMPORTED_MODULE_7__.Layout, {
                    ...layoutProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 844:
/***/ (() => {



/***/ }),

/***/ 605:
/***/ (() => {



/***/ }),

/***/ 913:
/***/ (() => {



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

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,878], () => (__webpack_exec__(675)));
module.exports = __webpack_exports__;

})();