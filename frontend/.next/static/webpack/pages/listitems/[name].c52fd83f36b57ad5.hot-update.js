"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listitems/[name]",{

/***/ "./pages/listitems/[name].jsx":
/*!************************************!*\
  !*** ./pages/listitems/[name].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_addItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/addItem.js */ \"./components/addItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst listitems = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token } = router.query;\n    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    const { name } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    const [addItemPopUp, setaddItemPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [accountID, setAccountID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [itemList, setitemList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkItemList, setCheckItemList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function getItems(x) {\n        fetch(\"http://localhost:8080/getItems?listID=\" + x).then((response)=>{\n            if (response.status === 200) {\n                return response.json();\n            } else {\n                throw new Error(response.status);\n            }\n        }).then((result)=>{\n            console.log(result);\n            setitemList(result);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    function getCheckedItems(x) {\n        fetch(\"http://localhost:8080/getCheckedItems?listID=\" + x).then((response)=>{\n            if (response.status === 200) {\n                return response.json();\n            } else {\n                throw new Error(response.status);\n            }\n        }).then((result)=>{\n            setCheckItemList(result);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    function addCheckedItem(itemID) {\n        fetch(\"http://localhost:8080/getCheckedItem?itemID=\" + itemID).then((response)=>{\n            if (response.status === 200) {\n                return response.json();\n            } else {\n                throw new Error(response.status);\n            }\n        }).then((result)=>{}).catch((error)=>{\n            console.log(error);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(token);\n        if (accountID === 0) {\n            fetch(\"http://localhost:8080/authenticate?token=\" + token).then((response)=>{\n                if (response.status === 200) {\n                    return response.json();\n                } else {\n                    throw new Error(response.status);\n                }\n            }).then((result)=>{\n                getItems(id);\n                getCheckedItems(id);\n                setAccountID(result[0].account_id);\n            }).catch((error)=>{\n                console.log(error);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"h2List\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                itemList.length + checkItemList.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"listItemsBox\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: [\n                        itemList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"itemBox\",\n                                    onClick: ()=>{\n                                        addCheckedItem(item.task);\n                                    },\n                                    children: item.task\n                                }, item.id, false, {\n                                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)),\n                        checkItemList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"checkedItemBox\",\n                                    onClick: ()=>{},\n                                    children: item.id\n                                }, item.id, false, {\n                                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_addItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    addItemPopUp: addItemPopUp,\n                    setaddItemPopUp: setaddItemPopUp,\n                    token: token,\n                    id: id,\n                    getItems: getItems\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/list\",\n                    className: \"signUpBtn\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: \"Mark as Complete\"\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(listitems, \"NNTqD0AjQfQYsy6xU/twdao3NCM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (listitems);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBWSxJQUFJLENBQUM7OEJBRXpEOUI7Ozs7OztnQkFFRkssU0FBUzBCLE1BQU0sR0FBR3hCLGNBQWN3QixNQUFNLEtBQUssbUJBQzFDLDhEQUFDQztvQkFDQ0osV0FBVTtvQkFDVkMsT0FBTzVCLGlCQUFpQixPQUFPO3dCQUFFNkIsUUFBUTtvQkFBWSxJQUFJLENBQUM7O3dCQUV6RHpCLFNBQVM0QixHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUM3Qyx1REFBYzswQ0FDYiw0RUFBQytDO29DQUVDUixXQUFVO29DQUNWUyxTQUFTO3dDQUNQZCxlQUFlVyxLQUFLSSxJQUFJO29DQUMxQjs4Q0FFQ0osS0FBS0ksSUFBSTttQ0FOTEosS0FBS25DLEVBQUU7Ozs7OytCQUZLbUMsS0FBS25DLEVBQUU7Ozs7O3dCQVk3QlEsY0FBYzBCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEIsOERBQUM3Qyx1REFBYzswQ0FDYiw0RUFBQytDO29DQUVDUixXQUFVO29DQUNWUyxTQUFTLEtBQ1Q7OENBRUNILEtBQUtuQyxFQUFFO21DQUxIbUMsS0FBS25DLEVBQUU7Ozs7OytCQUZLbUMsS0FBS25DLEVBQUU7Ozs7Ozs7Ozs7OzhCQWNsQyw4REFBQ0wsOERBQU9BO29CQUNOTyxjQUFjQTtvQkFDZEMsaUJBQWlCQTtvQkFDakJMLE9BQU9BO29CQUNQRSxJQUFJQTtvQkFDSlUsVUFBVUE7Ozs7Ozs4QkFFWiw4REFBQ2hCLGtEQUFJQTtvQkFDSDhDLE1BQUs7b0JBQ0xYLFdBQVU7b0JBQ1ZDLE9BQU81QixpQkFBaUIsT0FBTzt3QkFBRTZCLFFBQVE7b0JBQVksSUFBSSxDQUFDOzhCQUMzRDs7Ozs7Ozs7Ozs7OztBQU1UO0dBNUlNbkM7O1FBQ1dILGtEQUFTQTtRQUVUQSxrREFBU0E7UUFDUEEsa0RBQVNBOzs7QUEwSTVCLCtEQUFlRyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3RpdGVtcy9bbmFtZV0uanN4Pzc1NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEFkZEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRkSXRlbS5qc1wiO1xuXG5jb25zdCBsaXN0aXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHRva2VuIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xuICBjb25zdCB7IG5hbWUgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xuICBjb25zdCBbYWRkSXRlbVBvcFVwLCBzZXRhZGRJdGVtUG9wVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWNjb3VudElELCBzZXRBY2NvdW50SURdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpdGVtTGlzdCwgc2V0aXRlbUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hlY2tJdGVtTGlzdCwgc2V0Q2hlY2tJdGVtTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGZ1bmN0aW9uIGdldEl0ZW1zKHgpIHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRJdGVtcz9saXN0SUQ9XCIgKyB4KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHNldGl0ZW1MaXN0KHJlc3VsdCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZXRDaGVja2VkSXRlbXMoeCkge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldENoZWNrZWRJdGVtcz9saXN0SUQ9XCIgKyB4KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldENoZWNrSXRlbUxpc3QocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZENoZWNrZWRJdGVtKGl0ZW1JRCkge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldENoZWNrZWRJdGVtP2l0ZW1JRD1cIiArIGl0ZW1JRClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICBpZiAoYWNjb3VudElEID09PSAwKSB7XG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoZW50aWNhdGU/dG9rZW49XCIgKyB0b2tlbilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBnZXRJdGVtcyhpZCk7XG4gICAgICAgICAgZ2V0Q2hlY2tlZEl0ZW1zKGlkKVxuICAgICAgICAgIHNldEFjY291bnRJRChyZXN1bHRbMF0uYWNjb3VudF9pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoMkxpc3RcIlxuICAgICAgICAgIHN0eWxlPXthZGRJdGVtUG9wVXAgPT09IHRydWUgPyB7IGZpbHRlcjogXCJibHVyKDVweClcIiB9IDoge319XG4gICAgICAgID5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge2l0ZW1MaXN0Lmxlbmd0aCArIGNoZWNrSXRlbUxpc3QubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0SXRlbXNCb3hcIlxuICAgICAgICAgICAgc3R5bGU9e2FkZEl0ZW1Qb3BVcCA9PT0gdHJ1ZSA/IHsgZmlsdGVyOiBcImJsdXIoNXB4KVwiIH0gOiB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbUxpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtQm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tlZEl0ZW0oaXRlbS50YXNrKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGFza31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtjaGVja0l0ZW1MaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tlZEl0ZW1Cb3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5pZH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8QWRkSXRlbVxuICAgICAgICAgIGFkZEl0ZW1Qb3BVcD17YWRkSXRlbVBvcFVwfVxuICAgICAgICAgIHNldGFkZEl0ZW1Qb3BVcD17c2V0YWRkSXRlbVBvcFVwfVxuICAgICAgICAgIHRva2VuPXt0b2tlbn1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgZ2V0SXRlbXM9e2dldEl0ZW1zfVxuICAgICAgICAvPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvbGlzdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lnblVwQnRuXCJcbiAgICAgICAgICBzdHlsZT17YWRkSXRlbVBvcFVwID09PSB0cnVlID8geyBmaWx0ZXI6IFwiYmx1cig1cHgpXCIgfSA6IHt9fVxuICAgICAgICA+XG4gICAgICAgICAgTWFyayBhcyBDb21wbGV0ZVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0aXRlbXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJBZGRJdGVtIiwibGlzdGl0ZW1zIiwicm91dGVyIiwidG9rZW4iLCJxdWVyeSIsImlkIiwibmFtZSIsImFkZEl0ZW1Qb3BVcCIsInNldGFkZEl0ZW1Qb3BVcCIsImFjY291bnRJRCIsInNldEFjY291bnRJRCIsIml0ZW1MaXN0Iiwic2V0aXRlbUxpc3QiLCJjaGVja0l0ZW1MaXN0Iiwic2V0Q2hlY2tJdGVtTGlzdCIsImdldEl0ZW1zIiwieCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIkVycm9yIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJnZXRDaGVja2VkSXRlbXMiLCJhZGRDaGVja2VkSXRlbSIsIml0ZW1JRCIsImFjY291bnRfaWQiLCJtYWluIiwiaDIiLCJjbGFzc05hbWUiLCJzdHlsZSIsImZpbHRlciIsImxlbmd0aCIsImRpdiIsIm1hcCIsIml0ZW0iLCJGcmFnbWVudCIsInAiLCJvbkNsaWNrIiwidGFzayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/listitems/[name].jsx\n"));

/***/ })

});