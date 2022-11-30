"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _assets_logodapp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logodapp.png */ \"./assets/logodapp.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [walletAccount, setWalletAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const checkIfMetaMaskIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Check if Metamask is installed.\");\n        } else {\n            console.log(\"Check if Metamask is installed.\");\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n        const signer = provider.getSigner();\n        if (accounts.length != 0) {\n            setWalletAccount(accounts[0]);\n        } else {\n            console.log(\"No authorized account\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfMetaMaskIsConnected();\n    }, []);\n    const connectMetamask = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(accounts[0]);\n            setWalletAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !walletAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\",\n                    onClick: connectMetamask,\n                    children: \"Iniciar\"\n                }, void 0, false, {\n                    fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            walletAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"border-b p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: \"../assets/logodapp.png\",\n                                        width: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/add-dish\",\n                                            children: \"Add Dishes\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/my-dishes\",\n                                            children: \"My Dishes\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"VXQIPJc1ukKwWc2r9f2NxUsCqds=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDRjtBQUNzQjtBQUNuQjtBQUNrQjtBQUNuQjtBQUUvQixTQUFTTyxNQUFNLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQ2IsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkQsTUFBTVMsNkJBQTZCLFVBQVk7UUFDN0MsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0M7UUFFckIsSUFBSSxDQUFDRCxVQUFVO1lBQ2JFLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU87WUFDTEQsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU1DLFdBQVcsTUFBTUosU0FBU0ssT0FBTyxDQUFDO1lBQUVDLFFBQVE7UUFBZTtRQUVqRSxNQUFNQyxXQUFXLElBQUloQixpRUFBNkIsQ0FBQ1M7UUFDbkQsTUFBTVUsU0FBU0gsU0FBU0ksU0FBUztRQUVqQyxJQUFJUCxTQUFTUSxNQUFNLElBQUksR0FBRztZQUN4QmQsaUJBQWlCTSxRQUFRLENBQUMsRUFBRTtRQUM5QixPQUFPO1lBQ0xGLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWMsa0JBQWtCLFVBQVk7UUFDbEMsSUFBSTtZQUNGLE1BQU0sRUFBRWIsU0FBUSxFQUFFLEdBQUdDO1lBQ3JCLElBQUksQ0FBQ0QsVUFBVTtnQkFDYmMsTUFBTTtnQkFDTjtZQUNGLENBQUM7WUFFRCxNQUFNVixXQUFXLE1BQU1KLFNBQVNLLE9BQU8sQ0FBQztnQkFDdENDLFFBQVE7WUFDVjtZQUNBSixRQUFRQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZCTixpQkFBaUJNLFFBQVEsQ0FBQyxFQUFFO1FBQzlCLEVBQUUsT0FBT1csT0FBTztZQUNkYixRQUFRQyxHQUFHLENBQUNZO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7WUFDRSxDQUFDbkIsK0JBQ0EsOERBQUNtQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU9ELFdBQVU7b0JBQUdFLFNBQVNOOzhCQUFpQjs7Ozs7Ozs7Ozs7WUFNbERoQiwrQkFDQyw4REFBQ21COztrQ0FDQyw4REFBQ0k7a0NBQ0MsNEVBQUNDOzRCQUFJSixXQUFVOzs4Q0FDYiw4REFBQzlCLGtEQUFJQTtvQ0FBQ21DLE1BQUs7OENBQ1QsNEVBQUM3QixtREFBS0E7d0NBQUM4QixLQUFJO3dDQUF5QkMsT0FBTzs7Ozs7Ozs7Ozs7OENBRTdDLDhEQUFDUjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUM5QixrREFBSUE7NENBQUNtQyxNQUFLO3NEQUFJOzs7Ozs7c0RBQ2YsOERBQUNuQyxrREFBSUE7NENBQUNtQyxNQUFLO3NEQUFZOzs7Ozs7c0RBQ3ZCLDhEQUFDbkMsa0RBQUlBOzRDQUFDbUMsTUFBSztzREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTlCLDhEQUFDM0I7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBM0VTRjtLQUFBQTtBQTZFVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgbG9nb2RhcHAgfSBmcm9tIFwiLi4vYXNzZXRzL2xvZ29kYXBwLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbd2FsbGV0QWNjb3VudCwgc2V0V2FsbGV0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjaGVja0lmTWV0YU1hc2tJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrIGlmIE1ldGFtYXNrIGlzIGluc3RhbGxlZC5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2sgaWYgTWV0YW1hc2sgaXMgaW5zdGFsbGVkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9IDApIHtcbiAgICAgIHNldFdhbGxldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lmTWV0YU1hc2tJc0Nvbm5lY3RlZCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29ubmVjdE1ldGFtYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgICAgIHNldFdhbGxldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshd2FsbGV0QWNjb3VudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtjb25uZWN0TWV0YW1hc2t9PlxuICAgICAgICAgICAgSW5pY2lhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt3YWxsZXRBY2NvdW50ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcC02XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vYXNzZXRzL2xvZ29kYXBwLnBuZycgd2lkdGg9ezEwMH0vPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRkLWRpc2hcIj5BZGQgRGlzaGVzPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktZGlzaGVzXCI+TXkgRGlzaGVzPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJsb2dvZGFwcCIsIkltYWdlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3YWxsZXRBY2NvdW50Iiwic2V0V2FsbGV0QWNjb3VudCIsImNoZWNrSWZNZXRhTWFza0lzQ29ubmVjdGVkIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJsZW5ndGgiLCJjb25uZWN0TWV0YW1hc2siLCJhbGVydCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1haW4iLCJuYXYiLCJocmVmIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});