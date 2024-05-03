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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_addItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/addItem.js */ \"./components/addItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst listitems = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token } = router.query;\n    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    const { name } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    const [addItemPopUp, setaddItemPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [accountID, setAccountID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [itemList, setitemList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkItemList, setCheckItemList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function getItems(x) {\n        fetch(\"http://localhost:8080/getItems?listID=\" + x).then((response)=>{\n            if (response.status === 200) {\n                return response.json();\n            } else {\n                throw new Error(response.status);\n            }\n        }).then((result)=>{\n            console.log(result);\n            setitemList(result);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    function getCheckedItems(x) {\n        fetch(\"http://localhost:8080/getCheckedItems?listID=\" + x).then((response)=>{\n            if (response.status === 200) {\n                return response.json();\n            } else {\n                throw new Error(response.status);\n            }\n        }).then((result)=>{\n            setCheckItemList(result);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }\n    function addCheckedItem(task) {\n        fetch(\"http://localhost:8080/addCheckedItem\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                itemName: task,\n                listID: id\n            })\n        }).then((response)=>{\n            console.log(response);\n            if (response.ok) {\n                console.log(\"Checked item\");\n                getCheckedItems(id);\n            } else {\n                console.error(\"Error1:\", response.statusText);\n            }\n        }).catch((error)=>{\n            console.error(\"Error2:\", error);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(token);\n        if (accountID === 0) {\n            fetch(\"http://localhost:8080/authenticate?token=\" + token).then((response)=>{\n                if (response.status === 200) {\n                    return response.json();\n                } else {\n                    throw new Error(response.status);\n                }\n            }).then((result)=>{\n                getItems(id);\n                getCheckedItems;\n                setAccountID(result[0].account_id);\n            }).catch((error)=>{\n                console.log(error);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"h2List\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                itemList.length + checkItemList.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"listItemsBox\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: [\n                        itemList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"itemBox\",\n                                    onClick: ()=>{\n                                        addCheckedItem(item.task);\n                                    },\n                                    children: item.task\n                                }, item.id, false, {\n                                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, undefined)),\n                        checkItemList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"checkedItemBox\",\n                                    onClick: ()=>{},\n                                    children: item.task\n                                }, item.id, false, {\n                                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_addItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    addItemPopUp: addItemPopUp,\n                    setaddItemPopUp: setaddItemPopUp,\n                    token: token,\n                    id: id,\n                    getItems: getItems\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/list\",\n                    className: \"signUpBtn\",\n                    style: addItemPopUp === true ? {\n                        filter: \"blur(5px)\"\n                    } : {},\n                    children: \"Mark as Complete\"\n                }, void 0, false, {\n                    fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/theobertilsson/Documents/ITHS/Fullstack/CheckMate/frontend/pages/listitems/[name].jsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(listitems, \"NNTqD0AjQfQYsy6xU/twdao3NCM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (listitems);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQWlKNUIsK0RBQWVHLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGl0ZW1zL1tuYW1lXS5qc3g/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQWRkSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZGRJdGVtLmpzXCI7XG5cbmNvbnN0IGxpc3RpdGVtcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUm91dGVyKCkucXVlcnk7XG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlUm91dGVyKCkucXVlcnk7XG4gIGNvbnN0IFthZGRJdGVtUG9wVXAsIHNldGFkZEl0ZW1Qb3BVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY2NvdW50SUQsIHNldEFjY291bnRJRF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2l0ZW1MaXN0LCBzZXRpdGVtTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaGVja0l0ZW1MaXN0LCBzZXRDaGVja0l0ZW1MaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgZnVuY3Rpb24gZ2V0SXRlbXMoeCkge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldEl0ZW1zP2xpc3RJRD1cIiArIHgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgc2V0aXRlbUxpc3QocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdldENoZWNrZWRJdGVtcyh4KSB7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZ2V0Q2hlY2tlZEl0ZW1zP2xpc3RJRD1cIiArIHgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0Q2hlY2tJdGVtTGlzdChyZXN1bHQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkQ2hlY2tlZEl0ZW0odGFzaykge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FkZENoZWNrZWRJdGVtXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbU5hbWU6IHRhc2ssXG4gICAgICAgIGxpc3RJRDogaWQsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2VkIGl0ZW1cIik7XG4gICAgICAgICAgZ2V0Q2hlY2tlZEl0ZW1zKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IxOlwiLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yMjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgaWYgKGFjY291bnRJRCA9PT0gMCkge1xuICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aGVudGljYXRlP3Rva2VuPVwiICsgdG9rZW4pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgZ2V0SXRlbXMoaWQpO1xuICAgICAgICAgIGdldENoZWNrZWRJdGVtc1xuICAgICAgICAgIHNldEFjY291bnRJRChyZXN1bHRbMF0uYWNjb3VudF9pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoMkxpc3RcIlxuICAgICAgICAgIHN0eWxlPXthZGRJdGVtUG9wVXAgPT09IHRydWUgPyB7IGZpbHRlcjogXCJibHVyKDVweClcIiB9IDoge319XG4gICAgICAgID5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge2l0ZW1MaXN0Lmxlbmd0aCArIGNoZWNrSXRlbUxpc3QubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0SXRlbXNCb3hcIlxuICAgICAgICAgICAgc3R5bGU9e2FkZEl0ZW1Qb3BVcCA9PT0gdHJ1ZSA/IHsgZmlsdGVyOiBcImJsdXIoNXB4KVwiIH0gOiB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbUxpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtQm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tlZEl0ZW0oaXRlbS50YXNrKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGFza31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtjaGVja0l0ZW1MaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tlZEl0ZW1Cb3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50YXNrfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxBZGRJdGVtXG4gICAgICAgICAgYWRkSXRlbVBvcFVwPXthZGRJdGVtUG9wVXB9XG4gICAgICAgICAgc2V0YWRkSXRlbVBvcFVwPXtzZXRhZGRJdGVtUG9wVXB9XG4gICAgICAgICAgdG9rZW49e3Rva2VufVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBnZXRJdGVtcz17Z2V0SXRlbXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9saXN0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWduVXBCdG5cIlxuICAgICAgICAgIHN0eWxlPXthZGRJdGVtUG9wVXAgPT09IHRydWUgPyB7IGZpbHRlcjogXCJibHVyKDVweClcIiB9IDoge319XG4gICAgICAgID5cbiAgICAgICAgICBNYXJrIGFzIENvbXBsZXRlXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RpdGVtcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIkFkZEl0ZW0iLCJsaXN0aXRlbXMiLCJyb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwiYWRkSXRlbVBvcFVwIiwic2V0YWRkSXRlbVBvcFVwIiwiYWNjb3VudElEIiwic2V0QWNjb3VudElEIiwiaXRlbUxpc3QiLCJzZXRpdGVtTGlzdCIsImNoZWNrSXRlbUxpc3QiLCJzZXRDaGVja0l0ZW1MaXN0IiwiZ2V0SXRlbXMiLCJ4IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImdldENoZWNrZWRJdGVtcyIsImFkZENoZWNrZWRJdGVtIiwidGFzayIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW1OYW1lIiwibGlzdElEIiwib2siLCJzdGF0dXNUZXh0IiwiYWNjb3VudF9pZCIsIm1haW4iLCJoMiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZmlsdGVyIiwibGVuZ3RoIiwiZGl2IiwibWFwIiwiaXRlbSIsIkZyYWdtZW50IiwicCIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/listitems/[name].jsx\n"));

/***/ })

});