"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const checkWallet = ()=>{\n        if (!window.ethereum) {\n            console.log(\"please install Metamask\");\n        } else {\n            console.log(\"Metamask already installed\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkWallet();\n    });\n    const dishes = [\n        {\n            url: \"https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg\",\n            name: \"Gallo Pinto\",\n            country: \"Comida t\\xedpica de Costa Rica\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4\",\n            style: {\n                maxWidth: \"1600px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n                children: dishes.map((food, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border shadow rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    height: \"20rem\"\n                                },\n                                src: food.url\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            height: \"64px\"\n                                        },\n                                        className: \"text-2xl font-semibold\",\n                                        children: food.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            height: \"70px\",\n                                            overflow: \"hidden\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: dishes.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-400\",\n                                                children: food.country\n                                            }, void 0, false, {\n                                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNHO0FBQ0Y7QUFFakIsU0FBU0ksT0FBTzs7SUFDN0IsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCLElBQUksQ0FBQ0MsT0FBT0MsUUFBUSxFQUFFO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RHO0lBQ0Y7SUFFRSxNQUFNSyxTQUFTO1FBQ2I7WUFDRUMsS0FDRTtZQUNGQyxNQUFNO1lBQ05DLFNBQVM7UUFDWDtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7WUFBT0MsT0FBTztnQkFBRUMsVUFBVTtZQUFTO3NCQUNoRCw0RUFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1pMLE9BQU9RLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDakIsOERBQUNOO3dCQUFZQyxXQUFVOzswQ0FDckIsOERBQUNNO2dDQUFJTCxPQUFPO29DQUFFTSxRQUFRO2dDQUFRO2dDQUFHQyxLQUFLSixLQUFLUixHQUFHOzs7Ozs7MENBQzlDLDhEQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNTO3dDQUNDUixPQUFPOzRDQUFFTSxRQUFRO3dDQUFPO3dDQUN4QlAsV0FBVTtrREFFVEksS0FBS1AsSUFBSTs7Ozs7O2tEQUVaLDhEQUFDRTt3Q0FBSUUsT0FBTzs0Q0FBRU0sUUFBUTs0Q0FBUUcsVUFBVTt3Q0FBUzs7MERBQy9DLDhEQUFDRDswREFBR2QsT0FBT0UsSUFBSTs7Ozs7OzBEQUNmLDhEQUFDWTtnREFBRVQsV0FBVTswREFBaUJJLEtBQUtOLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBWHRDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnhCLENBQUM7R0EvQ3VCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBjaGVja1dhbGxldCA9ICgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgaW5zdGFsbCBNZXRhbWFza1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJNZXRhbWFzayBhbHJlYWR5IGluc3RhbGxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1dhbGxldCgpO1xuICB9KTtcblxuICAgIGNvbnN0IGRpc2hlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly9lYXR5b3Vyd29ybGQuY29tL2ltYWdlcy9jb250ZW50X2ltYWdlcy9pbWFnZXMvZ2FsbG8tcGludG8uanBnXCIsXG4gICAgICAgIG5hbWU6IFwiR2FsbG8gUGludG9cIixcbiAgICAgICAgY291bnRyeTogXCJDb21pZGEgdMOtcGljYSBkZSBDb3N0YSBSaWNhXCIsXG4gICAgICB9LFxuICAgIF07XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTYwMHB4XCIgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cbiAgICAgICAgICAgIHtkaXNoZXMubWFwKChmb29kLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiMjByZW1cIiB9fSBzcmM9e2Zvb2QudXJsfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNjRweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2Rpc2hlcy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntmb29kLmNvdW50cnl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiSG9tZSIsImNoZWNrV2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJjb25zb2xlIiwibG9nIiwiZGlzaGVzIiwidXJsIiwibmFtZSIsImNvdW50cnkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwibWFwIiwiZm9vZCIsImkiLCJpbWciLCJoZWlnaHQiLCJzcmMiLCJwIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});