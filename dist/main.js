"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodule2_capstone"] = self["webpackChunkmodule2_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-color: #f0eef2;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 6px;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nnav ul li {\r\n  margin: 0 1rem;\r\n}\r\n\r\n.logo img {\r\n  height: 50px;\r\n}\r\n\r\nfooter {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.character-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding: 0 20px;\r\n  height: 90vh;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 42vh;\r\n  width: 23vw;\r\n  margin: 15px;\r\n  padding: 6px;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.card-title {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 0.9rem;\r\n  width: 23vw;\r\n  padding: 4px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card-title img {\r\n  height: 24px;\r\n  width: 24px;\r\n  margin-right: 10%;\r\n}\r\n\r\n.card-description {\r\n  width: 23vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 0.9rem;\r\n  text-align: right;\r\n}\r\n\r\n.card-description button {\r\n  height: 30px;\r\n  width: 15vw;\r\n  margin-top: 10px;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  border: none;\r\n  background-color: #333;\r\n  color: #fff;\r\n  font-size: 0.9rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.count-div {\r\n  width: 23vw;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-right: 18%;\r\n  padding: 2px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.popup-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(5px);\r\n  z-index: 9999;\r\n  pointer-events: none;\r\n  display: none;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 50%;\r\n  max-width: 600px;\r\n  height: 90%;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\r\n  z-index: 10000;\r\n}\r\n\r\n.popup-container .closeBtn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #999;\r\n  cursor: pointer;\r\n}\r\n\r\n#picture {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.comment-container h2,\r\n.comment-container h3 {\r\n  text-align: center;\r\n}\r\n\r\n.character-info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.character-info li {\r\n  list-style: none;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nform input,\r\nform textarea {\r\n  border: 2px solid black;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n::placeholder {\r\n  font-weight: 700;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.submitComment {\r\n  background-color: white;\r\n  width: 7rem;\r\n  height: 3rem;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  box-shadow: 3px 5px 5px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module2-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module2-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module2-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module2-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module2-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderLayout.js */ \"./src/modules/renderLayout.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// eslint-disable-next-line no-unused-vars\n// import { fetchCharacterData, getCharacterImagesAndIds } from './modules/fetchApi.js';\n\n\n\n(0,_modules_renderLayout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://module2-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetchApi.js":
/*!*********************************!*\
  !*** ./src/modules/fetchApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCharacterData: () => (/* binding */ fetchCharacterData),\n/* harmony export */   getCharacterImagesAndIds: () => (/* binding */ getCharacterImagesAndIds)\n/* harmony export */ });\nconst projectId = '4u0VrRiLUtdCxXpkdeya';\n// eslint-disable-next-line no-unused-vars\nconst baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${projectId}`;\n\nasync function fetchCharacterData() {\n  const url = 'https://rickandmortyapi.com/api/character';\n  const response = await fetch(url);\n  const data = await response.json();\n  return data.results;\n}\n\nasync function getCharacterImagesAndIds() {\n  const characterData = await fetchCharacterData();\n  const characters = characterData.slice(0, 6); // Get the first 6 characters\n  const characterInfo = characters.map((character) => ({\n    id: character.id,\n    image: character.image,\n    name: character.name,\n    gender: character.gender,\n    species: character.species,\n    status: character.status,\n  }));\n  return characterInfo;\n}\n\n\n//# sourceURL=webpack://module2-capstone/./src/modules/fetchApi.js?");

/***/ }),

/***/ "./src/modules/renderLayout.js":
/*!*************************************!*\
  !*** ./src/modules/renderLayout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderLayout)\n/* harmony export */ });\n/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchApi.js */ \"./src/modules/fetchApi.js\");\n/* harmony import */ var _assets_like_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/like.png */ \"./src/assets/like.png\");\n\n\n// import logo from '../assets/logo1.png';\n\n(0,_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__.getCharacterImagesAndIds)();\nfunction renderLayout() {\n  // Create header with logo\n  const logoImg = document.createElement('h2');\n  logoImg.classList.add('likes');\n  logoImg.innerHTML = '<i class=\"fa fa-heart-o\">';\n\n  // Create the basic layout of each character card\n  const createCharacterCard = (character) => {\n    // Create the like image\n    const likeImg = new Image();\n    likeImg.src = _assets_like_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    // Create the card image\n    const cardImage = document.createElement('img');\n    cardImage.classList.add('card-image');\n    cardImage.src = character.image;\n    card.appendChild(cardImage);\n\n    const cardContent = document.createElement('div');\n    cardContent.classList.add('card-content');\n    card.appendChild(cardContent);\n\n    const cardTitle = document.createElement('div');\n    cardTitle.classList.add('card-title');\n    const name = document.createElement('h2');\n    name.textContent = character.name;\n    cardTitle.appendChild(name);\n    cardTitle.appendChild(likeImg); // Append the like image to the card title\n    cardContent.appendChild(cardTitle);\n\n    const cardDescription = document.createElement('div');\n    cardDescription.classList.add('card-description');\n    const likesCount = document.createElement('p');\n    likesCount.textContent = '5 likes';\n    const countDiv = document.createElement('div');\n    countDiv.classList.add('count-div');\n    countDiv.appendChild(likesCount);\n    cardDescription.appendChild(countDiv);\n    const commentButton = document.createElement('button');\n    commentButton.classList.add('comment-button');\n    commentButton.textContent = 'Comments';\n    cardDescription.appendChild(commentButton);\n    const reservationButton = document.createElement('button');\n    reservationButton.classList.add('reservation-button');\n    reservationButton.textContent = 'Reservations';\n    cardDescription.appendChild(reservationButton);\n    cardContent.appendChild(cardDescription);\n\n    return card;\n  };\n\n  const appendCharacterCards = async () => {\n    const characters = await (0,_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__.getCharacterImagesAndIds)();\n    const characterContainer = document.querySelector('.character-container');\n    // create the loop to render the cards\n    characters.forEach((character) => {\n      const characterCard = createCharacterCard(character); // add the earlier created card layout.\n      characterContainer.appendChild(characterCard); // append the card to the container.\n    });\n\n    // opening comment popup page\n    const commentBtn = document.querySelectorAll('.comment-button');\n\n    commentBtn.forEach((e) => {\n      e.addEventListener('click', async () => {\n        // finding index\n        const id = [].indexOf.call(\n          e.parentNode.parentNode.parentNode.parentNode.childNodes,\n          e.parentNode.parentNode.parentNode,\n        );\n\n        const modal = document.getElementById('comment-modal');\n        const overlay = document.createElement('comment-overlay');\n        overlay.classList.add('popup-overlay');\n        modal.parentNode.insertBefore(overlay, modal);\n\n        modal.style.display = 'block';\n        overlay.style.display = 'block';\n        document.body.classList.add('popup-active');\n        modal.innerHTML = '';\n        const popupContainer = document.createElement('div');\n        popupContainer.classList.add('popup-container');\n        popupContainer.innerHTML = `\n  <div class=\"comment-container\">\n      <img src=\"${characters[id].image}\" id=\"picture\" alt=\"\">\n      <button class=\"closeBtn\"><i class=\"fa fa-close\"></i></button>\n  <h2>${characters[id].name}</h2>\n  <ul class=\"character-info\">\n      <li>ID: ${characters[id].id}</li>\n      <li>Species: ${characters[id].species}</li>\n      <li>Gender: ${characters[id].gender}</li>\n      <li>Status: ${characters[id].status}</li>\n  </ul>\n  <section>\n  <div class=\"comments\">\n  <h3>Comments</h3>\n  </div>\n  <h3>Add a comment</h3>\n  <form action=\"\">\n      <div><input type=\"text\" id=\"name\" placeholder=\"Your name\"></div>\n      <div><textarea type=\"text\" id=\"comments\" placeholder=\"Your insights\" rows=\"4\" maxlength=\"500\"></textarea></div>\n      <button type=\"submit\" class=\"submitComment\">Comment</button>\n  </form>\n  </section>\n</div>\n  `;\n        modal.append(popupContainer);\n\n        // closing comment popup\n        const closeBtn = document.querySelector('.closeBtn');\n        closeBtn.addEventListener('click', () => {\n          modal.style.display = 'none';\n          overlay.style.display = 'none';\n          document.body.classList.remove('popup-active');\n        });\n      });\n    });\n  };\n\n  appendCharacterCards();\n}\n\n\n//# sourceURL=webpack://module2-capstone/./src/modules/renderLayout.js?");

/***/ }),

/***/ "./src/assets/like.png":
/*!*****************************!*\
  !*** ./src/assets/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34dd4745ccb7bc853fc5.png\";\n\n//# sourceURL=webpack://module2-capstone/./src/assets/like.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);