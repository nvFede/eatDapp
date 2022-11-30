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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [walletAccount, setWalletAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const checkIfMetaMaskIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Check if Metamask is installed.\");\n        } else {\n            const accounts = await ethereum.request({\n                method: \"eth_accounts\"\n            });\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n            const signer = provider.getSigner();\n            if (accounts.length != 0) {\n                setWalletAccount(accounts[0]);\n            } else {\n                console.log(\"No authorized account\");\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfMetaMaskIsConnected();\n    }, []);\n    const connectMetamask = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(accounts[0]);\n            setWalletAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"border-b p-6 flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/logodapp.png\",\n                                    width: 180\n                                }, void 0, false, {\n                                    fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            !walletAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 reounded\",\n                                onClick: connectMetamask,\n                                children: \"Iniciar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this),\n                            walletAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 flex gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/add-dish\",\n                                        children: \"Add Dishes\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/my-dishes\",\n                                        children: \"My Dishes\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/recipies/web/pages/_app.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"VXQIPJc1ukKwWc2r9f2NxUsCqds=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNGO0FBQ3NCO0FBQ25CO0FBQ0Q7QUFFL0IsU0FBU00sTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUNiLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1RLDZCQUE2QixVQUFZO1FBQzdDLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdDO1FBRXJCLElBQUksQ0FBQ0QsVUFBVTtZQUNiRSxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBRVAsTUFBTUMsV0FBVyxNQUFNSixTQUFTSyxPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBZTtZQUVqRSxNQUFNQyxXQUFXLElBQUlmLGlFQUE2QixDQUFDUTtZQUNuRCxNQUFNVSxTQUFTSCxTQUFTSSxTQUFTO1lBRWpDLElBQUlQLFNBQVNRLE1BQU0sSUFBSSxHQUFHO2dCQUN4QmQsaUJBQWlCTSxRQUFRLENBQUMsRUFBRTtZQUM5QixPQUFPO2dCQUNMRixRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0QsQ0FBQztJQUVIO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZFM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNYyxrQkFBa0IsVUFBWTtRQUNsQyxJQUFJO1lBQ0YsTUFBTSxFQUFFYixTQUFRLEVBQUUsR0FBR0M7WUFDckIsSUFBSSxDQUFDRCxVQUFVO2dCQUNiYyxNQUFNO2dCQUNOO1lBQ0YsQ0FBQztZQUVELE1BQU1WLFdBQVcsTUFBTUosU0FBU0ssT0FBTyxDQUFDO2dCQUN0Q0MsUUFBUTtZQUNWO1lBQ0FKLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLEVBQUU7WUFDdkJOLGlCQUFpQk0sUUFBUSxDQUFDLEVBQUU7UUFDOUIsRUFBRSxPQUFPVyxPQUFPO1lBQ2RiLFFBQVFDLEdBQUcsQ0FBQ1k7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO2tCQU1DLDRFQUFDQTtzQkFDQyw0RUFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMvQixrREFBSUE7Z0NBQUNnQyxNQUFLOzBDQUNULDRFQUFDQztvQ0FBSUMsS0FBSTtvQ0FBd0JDLE9BQU87Ozs7Ozs7Ozs7OzRCQUV4QyxDQUFDMUIsK0JBQ0QsOERBQUMyQjtnQ0FBT0wsV0FBVTtnQ0FBOEVNLFNBQVNaOzBDQUFpQjs7Ozs7OzRCQUkzSGhCLCtCQUNDLDhEQUFDbUI7Z0NBQUlHLFdBQVU7O2tEQUNiLDhEQUFDL0Isa0RBQUlBO3dDQUFDZ0MsTUFBSztrREFBSTs7Ozs7O2tEQUNmLDhEQUFDaEMsa0RBQUlBO3dDQUFDZ0MsTUFBSztrREFBWTs7Ozs7O2tEQUN2Qiw4REFBQ2hDLGtEQUFJQTt3Q0FBQ2dDLE1BQUs7a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJOUIsOERBQUN6Qjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBN0VTRjtLQUFBQTtBQStFVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbd2FsbGV0QWNjb3VudCwgc2V0V2FsbGV0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjaGVja0lmTWV0YU1hc2tJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrIGlmIE1ldGFtYXNrIGlzIGluc3RhbGxlZC5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT0gMCkge1xuICAgICAgc2V0V2FsbGV0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50XCIpO1xuICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZNZXRhTWFza0lzQ29ubmVjdGVkKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb25uZWN0TWV0YW1hc2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2tcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgc2V0V2FsbGV0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIHshd2FsbGV0QWNjb3VudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICApfSAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcC02IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xvZ29kYXBwLnBuZ1wiIHdpZHRoPXsxODB9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7ICF3YWxsZXRBY2NvdW50ICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgYWN0aXZlOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcmVvdW5kZWRcIiBvbkNsaWNrPXtjb25uZWN0TWV0YW1hc2t9PlxuICAgICAgICAgICAgICAgIEluaWNpYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3dhbGxldEFjY291bnQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBnYXAtNVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkZC1kaXNoXCI+QWRkIERpc2hlczwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LWRpc2hlc1wiPk15IERpc2hlczwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSBcbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkltYWdlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3YWxsZXRBY2NvdW50Iiwic2V0V2FsbGV0QWNjb3VudCIsImNoZWNrSWZNZXRhTWFza0lzQ29ubmVjdGVkIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJsZW5ndGgiLCJjb25uZWN0TWV0YW1hc2siLCJhbGVydCIsImVycm9yIiwiZGl2IiwibWFpbiIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});