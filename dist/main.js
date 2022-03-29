/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./JetBrainsMono-Regular.ttf */ "./src/JetBrainsMono-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./SourceSansPro-Regular.ttf */ "./src/SourceSansPro-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'JetBrains';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf')\n    }\n@font-face {\n    font-family: 'SourceSansPro';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n    }\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody{\n    font-size: 10px;\n    text-align: center;\n    font-family: 'SourceSansPro', sans-serif;\n}\n\n#content {\n    min-height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: 100%;\n}\n\n/************** Header **************/\n\nheader {\n    display: flex;\n    min-width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    background-color: black;\n    color: white;\n}\n\nheader > span {\n    font-family: 'JetBrains', monospace;\n    font-size: 1.5rem;\n}\n\nheader ul {\n    display: flex;\n    list-style: none;\n    justify-content: flex-end;\n    gap: 50px;\n    flex-basis: 40%;\n    margin-right: 20px;\n}\n\nheader ul li {\n    font-size: 1rem;\n}\n\n/************** HOMEPAGE **************/\n\n.homeContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.leftImg {\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n}\n\n.homeContent {\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 40px;\n}\n\n.restaurantName {\n    font-family: 'JetBrains', monospace;\n    font-size: 5rem;\n    padding-bottom: 40px;\n}\n\n.shortTagline {\n    font-style: italic;\n    font-size: 2rem;\n    padding-bottom: 20px;\n}\n\n.longTagline {\n    font-size: 1.5rem;\n}\n\n/*************** MENU ****************/\n\n.menuContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.menuContainer h1 {\n    padding: 20px 0 40px;\n    font-size: 2rem;\n}\n\n.menuItemsContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n.menuItemCard {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 300px;\n}\n\n.menuItemCard h2 {\n    font-size: 1.25rem;\n}\n\n.menuItemCard p {\n    font-size: 1rem;\n    font-style: italic;\n}\n\n.menuItemCard img {\n    width: 75%;\n    height: 75%;\n    border-radius: 10px;\n}\n\n/************** CONTACT ***************/\n\n.contactContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.contactInfo {\n    grid-column: 1 / 2;\n    font-size: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.contactInfo h1 {\n    font-size: 3rem;\n    padding-bottom: 40px;\n}\n\n.contactInfo h2 {\n    font-size: 1.5rem;\n}\n\n.contactInfo h2 + p {\n    padding-bottom: 20px;\n}\n\n.rightImg {\n    grid-column: 2 / 3;\n    align-self: stretch;\n    width: 100%;\n    height: 100%;\n}\n\n\n/************** FOOTER ***************/\n\nfooter {\n    grid-row: 3 / 4;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    background-color: maroon;\n}\n\nfooter a {\n    font-size: 1rem;\n    color: white;\n    text-decoration: none;\n}\n\n\n@media screen and (max-width: 800px) {\n    .homeContainer {\n        grid-template-columns: 4fr 1fr;\n    }\n\n    .restaurantName {\n        font-size: 4rem;\n    }\n\n    .shortTagline {\n        font-size: 1.5rem;\n    }\n\n    .longTagline {\n        font-size: 1rem;\n    }\n\n    .contactInfo h1 {\n        font-size: 2rem;\n    }\n\n    .contactInfo h2 {\n        font-size: 1.25rem;\n    }\n\n    .contactInfo p {\n        font-size: 1rem;\n    }\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB;IACA;AACJ;IACI,4BAA4B;IAC5B,0DAAqD;IACrD;AACJ;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iCAAiC;IACjC,2BAA2B;AAC/B;;AAEA,qCAAqC;;AAErC;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA,uCAAuC;;AAEvC;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,sCAAsC;;AAEtC;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB;;AAEA,uCAAuC;;AAEvC;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;;AAGA,sCAAsC;;AAEtC;IACI,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,qBAAqB;AACzB;;;AAGA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;AAEJ","sourcesContent":["@font-face {\n    font-family: 'JetBrains';\n    src: url('./JetBrainsMono-Regular.ttf') format('ttf')\n    }\n@font-face {\n    font-family: 'SourceSansPro';\n    src: url('./SourceSansPro-Regular.ttf') format('ttf');\n    }\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody{\n    font-size: 10px;\n    text-align: center;\n    font-family: 'SourceSansPro', sans-serif;\n}\n\n#content {\n    min-height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: 100%;\n}\n\n/************** Header **************/\n\nheader {\n    display: flex;\n    min-width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    background-color: black;\n    color: white;\n}\n\nheader > span {\n    font-family: 'JetBrains', monospace;\n    font-size: 1.5rem;\n}\n\nheader ul {\n    display: flex;\n    list-style: none;\n    justify-content: flex-end;\n    gap: 50px;\n    flex-basis: 40%;\n    margin-right: 20px;\n}\n\nheader ul li {\n    font-size: 1rem;\n}\n\n/************** HOMEPAGE **************/\n\n.homeContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.leftImg {\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n}\n\n.homeContent {\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 40px;\n}\n\n.restaurantName {\n    font-family: 'JetBrains', monospace;\n    font-size: 5rem;\n    padding-bottom: 40px;\n}\n\n.shortTagline {\n    font-style: italic;\n    font-size: 2rem;\n    padding-bottom: 20px;\n}\n\n.longTagline {\n    font-size: 1.5rem;\n}\n\n/*************** MENU ****************/\n\n.menuContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.menuContainer h1 {\n    padding: 20px 0 40px;\n    font-size: 2rem;\n}\n\n.menuItemsContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n.menuItemCard {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 300px;\n}\n\n.menuItemCard h2 {\n    font-size: 1.25rem;\n}\n\n.menuItemCard p {\n    font-size: 1rem;\n    font-style: italic;\n}\n\n.menuItemCard img {\n    width: 75%;\n    height: 75%;\n    border-radius: 10px;\n}\n\n/************** CONTACT ***************/\n\n.contactContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.contactInfo {\n    grid-column: 1 / 2;\n    font-size: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.contactInfo h1 {\n    font-size: 3rem;\n    padding-bottom: 40px;\n}\n\n.contactInfo h2 {\n    font-size: 1.5rem;\n}\n\n.contactInfo h2 + p {\n    padding-bottom: 20px;\n}\n\n.rightImg {\n    grid-column: 2 / 3;\n    align-self: stretch;\n    width: 100%;\n    height: 100%;\n}\n\n\n/************** FOOTER ***************/\n\nfooter {\n    grid-row: 3 / 4;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    background-color: maroon;\n}\n\nfooter a {\n    font-size: 1rem;\n    color: white;\n    text-decoration: none;\n}\n\n\n@media screen and (max-width: 800px) {\n    .homeContainer {\n        grid-template-columns: 4fr 1fr;\n    }\n\n    .restaurantName {\n        font-size: 4rem;\n    }\n\n    .shortTagline {\n        font-size: 1.5rem;\n    }\n\n    .longTagline {\n        font-size: 1rem;\n    }\n\n    .contactInfo h1 {\n        font-size: 2rem;\n    }\n\n    .contactInfo h2 {\n        font-size: 1.25rem;\n    }\n\n    .contactInfo p {\n        font-size: 1rem;\n    }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _images_right_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/right.jpg */ "./src/images/right.jpg");


function contactPage() {
    const container = document.createElement("div");
    container.classList.add('contactContainer');


    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo')

    const contactInfoHeading = document.createElement('h1');
    contactInfoHeading.innerText = 'CONTACT US';
    contactInfo.appendChild(contactInfoHeading);

    const addressHeading = document.createElement('h2');
    addressHeading.innerText = 'Address';
    contactInfo.appendChild(addressHeading);

    const address = document.createElement('p');
    address.innerText = '123 Street Avenue, Lost City, Hidden Kingdom';
    contactInfo.appendChild(address);

    const phoneHeading = document.createElement('h2');
    phoneHeading.innerText = 'Phone Number';
    contactInfo.appendChild(phoneHeading);

    const phone = document.createElement('p');
    phone.innerText = '(098) 123 7654';
    contactInfo.appendChild(phone);

    const emailHeading = document.createElement('h2');
    emailHeading.innerText = 'Email';
    contactInfo.appendChild(emailHeading);

    const email = document.createElement('p');
    email.innerText = 'contact-our-restaurant@email.com';
    contactInfo.appendChild(email);

    const rightCoverImg = new Image();
    rightCoverImg.src = _images_right_jpg__WEBPACK_IMPORTED_MODULE_0__;
    rightCoverImg.classList.add('rightImg');


    container.append(contactInfo, rightCoverImg);

    return container;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _images_left_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/left.jpg */ "./src/images/left.jpg");


function homepage() {
    const container = document.createElement("div");
    container.classList.add('homeContainer');

    const leftCoverImg = new Image();
    leftCoverImg.src = _images_left_jpg__WEBPACK_IMPORTED_MODULE_0__;
    leftCoverImg.classList.add('leftImg');

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent');

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = 'TOKIO RESTAURANT';
    homeContent.appendChild(restaurantName);
    restaurantName.classList.add('restaurantName');

    const shortTagline = document.createElement("p");
    shortTagline.innerText = "From sea to sushi.";
    homeContent.appendChild(shortTagline);
    shortTagline.classList.add('shortTagline');

    const longTagline = document.createElement("p");
    longTagline.innerText = "With sushi, it's all about balance. A thick slice of fish, thin slice of fish, overcooked rice, undercooked rice, too much rice vinegar, too little rice vinegar—one has to impeccably balance the ingredients to craft perfection.";
    homeContent.appendChild(longTagline);
    longTagline.classList.add('longTagline');



    container.append(leftCoverImg, homeContent);

    return container;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_platter_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/platter.jpg */ "./src/images/platter.jpg");
/* harmony import */ var _images_uni_maki_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/uni-maki.jpg */ "./src/images/uni-maki.jpg");
/* harmony import */ var _images_miso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/miso.jpg */ "./src/images/miso.jpg");
/* harmony import */ var _images_nigiri_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/nigiri.jpg */ "./src/images/nigiri.jpg");
/* harmony import */ var _images_california_maki_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/california-maki.jpg */ "./src/images/california-maki.jpg");
/* harmony import */ var _images_sashimi_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sashimi.jpg */ "./src/images/sashimi.jpg");
/* harmony import */ var _images_ikura_maki_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/ikura-maki.jpg */ "./src/images/ikura-maki.jpg");
/* harmony import */ var _images_ebi_maki_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/ebi-maki.jpg */ "./src/images/ebi-maki.jpg");
/* harmony import */ var _images_temaki_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/temaki.jpg */ "./src/images/temaki.jpg");
/* harmony import */ var _images_masago_maki_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/masago-maki.jpg */ "./src/images/masago-maki.jpg");
/* harmony import */ var _images_tobiko_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/tobiko.jpg */ "./src/images/tobiko.jpg");
/* harmony import */ var _images_futomaki_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/futomaki.jpg */ "./src/images/futomaki.jpg");














function menuPage() {
    const container = document.createElement('div');
    container.classList.add('menuContainer');



    const menu = document.createElement('h1');
    menu.innerText = "Menu";
    container.appendChild(menu);

    const menuItemsContainer = document.createElement('div');
    container.appendChild(menuItemsContainer);
    menuItemsContainer.classList.add('menuItemsContainer');

    class MenuItem {
        constructor(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }

        addToMenu() {
            let menuItemCard = document.createElement('div');
            menuItemCard.classList.add('menuItemCard');

            let menuItemName = document.createElement('h2');
            menuItemName.innerText = this.name;
            menuItemCard.appendChild(menuItemName);

            let menuItemImage = new Image();
            menuItemImage.src = this.image;
            menuItemCard.appendChild(menuItemImage);

            let menuItemPrice = document.createElement('p');
            menuItemPrice.innerText = this.price;
            menuItemCard.appendChild(menuItemPrice);

            menuItemsContainer.append(menuItemCard);
        }
    }
    let platter = new MenuItem('All Out Sushi Platter', '$1,000.00', _images_platter_jpg__WEBPACK_IMPORTED_MODULE_0__);
    let uniMaki = new MenuItem('Uni Maki', '$100.00', _images_uni_maki_jpg__WEBPACK_IMPORTED_MODULE_1__);
    let miso = new MenuItem('Miso Soup', '$75.00', _images_miso_jpg__WEBPACK_IMPORTED_MODULE_2__);
    let nigiri = new MenuItem('Salmon Nigiri', '$125.00', _images_nigiri_jpg__WEBPACK_IMPORTED_MODULE_3__);
    let californiaMaki = new MenuItem('California Maki', '$90.00', _images_california_maki_jpg__WEBPACK_IMPORTED_MODULE_4__);
    let sashimi = new MenuItem('Sashimi', '$140.00', _images_sashimi_jpg__WEBPACK_IMPORTED_MODULE_5__);
    let ikuraMaki = new MenuItem('Ikura Maki', '$110.00', _images_ikura_maki_jpg__WEBPACK_IMPORTED_MODULE_6__);
    let ebiMaki = new MenuItem('Ebi Maki', '$95.00', _images_ebi_maki_jpg__WEBPACK_IMPORTED_MODULE_7__);
    let temaki = new MenuItem('Temaki', '$100.00', _images_temaki_jpg__WEBPACK_IMPORTED_MODULE_8__);
    let masagoMaki = new MenuItem('Masago Maki', '$105.00', _images_masago_maki_jpg__WEBPACK_IMPORTED_MODULE_9__);
    let tobikoMaki = new MenuItem('Tobiko Maki', '$110.00', _images_tobiko_jpg__WEBPACK_IMPORTED_MODULE_10__);
    let futomaki = new MenuItem('Futomaki', '$105.00', _images_futomaki_jpg__WEBPACK_IMPORTED_MODULE_11__);


    let menuItems = [
        platter,
        uniMaki,
        miso,
        nigiri,
        californiaMaki,
        sashimi,
        ikuraMaki,
        ebiMaki,
        temaki,
        masagoMaki,
        tobikoMaki,
        futomaki
    ];

    menuItems.forEach(menuItem => {
        menuItem.addToMenu();
    });

    return container;
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createMainContainer": () => (/* binding */ createMainContainer),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function createHeader() {

    const header = document.createElement('header');

    const logo = document.createElement('span');
    logo.innerText = 'TOKIO RESTAURANT';
    header.appendChild(logo);

    const nav = document.createElement('ul');


    const home = document.createElement('li');
    home.innerText = "HOME";
    nav.appendChild(home);
    home.id = 'home';
    home.style.cursor = 'pointer';

    const menu = document.createElement('li');
    menu.innerText = "MENU";
    nav.appendChild(menu);
    menu.id = 'menu'
    menu.style.cursor = 'pointer';

    const contact = document.createElement('li');
    contact.innerText = "CONTACT";
    nav.appendChild(contact);
    contact.id = 'contact';
    contact.style.cursor = 'pointer';

    header.appendChild(nav);
    return header;
}

function createMainContainer() {
    const main = document.createElement('main');

    return main;

}

function createFooter() {
    const footer = document.createElement('footer');


    const freepik = document.createElement('span');
    freepik.innerHTML = "<a href='https://www.freepik.com/vectors/food'>Food vector created by macrovector - www.freepik.com</a>";
    footer.appendChild(freepik);

    const odin = document.createElement('span');
    odin.innerHTML = "<a href='https://www.theodinproject.com/'>The Odin Project</a>";
    footer.appendChild(odin);

    return footer;
}



/***/ }),

/***/ "./src/JetBrainsMono-Regular.ttf":
/*!***************************************!*\
  !*** ./src/JetBrainsMono-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f9e93f2a12b4e3eb262.ttf";

/***/ }),

/***/ "./src/SourceSansPro-Regular.ttf":
/*!***************************************!*\
  !*** ./src/SourceSansPro-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df87f53caf449a3b7572.ttf";

/***/ }),

/***/ "./src/images/california-maki.jpg":
/*!****************************************!*\
  !*** ./src/images/california-maki.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6744481698a2ec52c7d0.jpg";

/***/ }),

/***/ "./src/images/ebi-maki.jpg":
/*!*********************************!*\
  !*** ./src/images/ebi-maki.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba26f6eef21e0caad696.jpg";

/***/ }),

/***/ "./src/images/futomaki.jpg":
/*!*********************************!*\
  !*** ./src/images/futomaki.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18c5e6057c7c344f288e.jpg";

/***/ }),

/***/ "./src/images/ikura-maki.jpg":
/*!***********************************!*\
  !*** ./src/images/ikura-maki.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b78d70c4838603f78d3d.jpg";

/***/ }),

/***/ "./src/images/left.jpg":
/*!*****************************!*\
  !*** ./src/images/left.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dcd4e9004ffc9565650.jpg";

/***/ }),

/***/ "./src/images/masago-maki.jpg":
/*!************************************!*\
  !*** ./src/images/masago-maki.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22907a26cfd48f2e9211.jpg";

/***/ }),

/***/ "./src/images/miso.jpg":
/*!*****************************!*\
  !*** ./src/images/miso.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2c9b8b1c0cc3c489aaa.jpg";

/***/ }),

/***/ "./src/images/nigiri.jpg":
/*!*******************************!*\
  !*** ./src/images/nigiri.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bdac422ebaae594cc56.jpg";

/***/ }),

/***/ "./src/images/platter.jpg":
/*!********************************!*\
  !*** ./src/images/platter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4ecdeff6c0eff190d6.jpg";

/***/ }),

/***/ "./src/images/right.jpg":
/*!******************************!*\
  !*** ./src/images/right.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "397808903897291ec91b.jpg";

/***/ }),

/***/ "./src/images/sashimi.jpg":
/*!********************************!*\
  !*** ./src/images/sashimi.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cd1e660e644adf7ff71.jpg";

/***/ }),

/***/ "./src/images/temaki.jpg":
/*!*******************************!*\
  !*** ./src/images/temaki.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25b7cb43d7e9e2f3ad9f.jpg";

/***/ }),

/***/ "./src/images/tobiko.jpg":
/*!*******************************!*\
  !*** ./src/images/tobiko.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9ce43faa41bdb441dfb.jpg";

/***/ }),

/***/ "./src/images/uni-maki.jpg":
/*!*********************************!*\
  !*** ./src/images/uni-maki.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6e5a138d8e340ad79d8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");








const content = document.getElementById("content");


content.appendChild((0,_page_load_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)());

const mainContainer = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_4__.createMainContainer)();
mainContainer.id = 'mainContainer';
content.appendChild(mainContainer);

mainContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

const home = document.getElementById('home');
home.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
})

const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
})

const contact = document.getElementById('contact');
contact.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})

content.appendChild((0,_page_load_js__WEBPACK_IMPORTED_MODULE_4__.createFooter)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9KZXRCcmFpbnNNb25vLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Tb3VyY2VTYW5zUHJvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpXFxuICAgIH1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICAgIH1cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1BybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi8qKioqKioqKioqKioqKiBIZWFkZXIgKioqKioqKioqKioqKiovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucycsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZmxleC1iYXNpczogNDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmhlYWRlciB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqIEhPTUVQQUdFICoqKioqKioqKioqKioqL1xcblxcbi5ob21lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ubGVmdEltZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhvbWVDb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLnJlc3RhdXJhbnROYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcblxcbi5zaG9ydFRhZ2xpbmUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5sb25nVGFnbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqIE1FTlUgKioqKioqKioqKioqKioqKi9cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51Q29udGFpbmVyIGgxIHtcXG4gICAgcGFkZGluZzogMjBweCAwIDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnVJdGVtc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51SXRlbUNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCBpbWcge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqIENPTlRBQ1QgKioqKioqKioqKioqKioqL1xcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29udGFjdEluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0SW5mbyBoMiArIHAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJpZ2h0SW1nIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKiogRk9PVEVSICoqKioqKioqKioqKioqKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5ob21lQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAucmVzdGF1cmFudE5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zaG9ydFRhZ2xpbmUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvbmdUYWdsaW5lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdEluZm8gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0SW5mbyBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RJbmZvIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEI7SUFDQTtBQUNKO0lBQ0ksNEJBQTRCO0lBQzVCLDBEQUFxRDtJQUNyRDtBQUNKO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQywyQkFBMkI7QUFDL0I7O0FBRUEscUNBQXFDOztBQUVyQztJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLHVDQUF1Qzs7QUFFdkM7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUEsdUNBQXVDOztBQUV2QztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0Esc0NBQXNDOztBQUV0QztJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyc7XFxuICAgIHNyYzogdXJsKCcuL0pldEJyYWluc01vbm8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpXFxuICAgIH1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvJztcXG4gICAgc3JjOiB1cmwoJy4vU291cmNlU2Fuc1Byby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIH1cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1BybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi8qKioqKioqKioqKioqKiBIZWFkZXIgKioqKioqKioqKioqKiovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucycsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZmxleC1iYXNpczogNDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmhlYWRlciB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqIEhPTUVQQUdFICoqKioqKioqKioqKioqL1xcblxcbi5ob21lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ubGVmdEltZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhvbWVDb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLnJlc3RhdXJhbnROYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcblxcbi5zaG9ydFRhZ2xpbmUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5sb25nVGFnbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqIE1FTlUgKioqKioqKioqKioqKioqKi9cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51Q29udGFpbmVyIGgxIHtcXG4gICAgcGFkZGluZzogMjBweCAwIDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnVJdGVtc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51SXRlbUNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCBpbWcge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqIENPTlRBQ1QgKioqKioqKioqKioqKioqL1xcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29udGFjdEluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0SW5mbyBoMiArIHAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJpZ2h0SW1nIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKiogRk9PVEVSICoqKioqKioqKioqKioqKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5ob21lQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAucmVzdGF1cmFudE5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zaG9ydFRhZ2xpbmUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvbmdUYWdsaW5lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdEluZm8gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0SW5mbyBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RJbmZvIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUmlnaHRDb3ZlckltZyBmcm9tIFwiLi9pbWFnZXMvcmlnaHQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKTtcblxuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpXG5cbiAgICBjb25zdCBjb250YWN0SW5mb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RJbmZvSGVhZGluZy5pbm5lclRleHQgPSAnQ09OVEFDVCBVUyc7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9IZWFkaW5nKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhZGRyZXNzSGVhZGluZy5pbm5lclRleHQgPSAnQWRkcmVzcyc7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRpbmcpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9ICcxMjMgU3RyZWV0IEF2ZW51ZSwgTG9zdCBDaXR5LCBIaWRkZW4gS2luZ2RvbSc7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBjb25zdCBwaG9uZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBob25lSGVhZGluZy5pbm5lclRleHQgPSAnUGhvbmUgTnVtYmVyJztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZUhlYWRpbmcpO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUuaW5uZXJUZXh0ID0gJygwOTgpIDEyMyA3NjU0JztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICBjb25zdCBlbWFpbEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGVtYWlsSGVhZGluZy5pbm5lclRleHQgPSAnRW1haWwnO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsSGVhZGluZyk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC5pbm5lclRleHQgPSAnY29udGFjdC1vdXItcmVzdGF1cmFudEBlbWFpbC5jb20nO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGNvbnN0IHJpZ2h0Q292ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICByaWdodENvdmVySW1nLnNyYyA9IFJpZ2h0Q292ZXJJbWc7XG4gICAgcmlnaHRDb3ZlckltZy5jbGFzc0xpc3QuYWRkKCdyaWdodEltZycpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RJbmZvLCByaWdodENvdmVySW1nKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IExlZnRDb3ZlckltZyBmcm9tICcuL2ltYWdlcy9sZWZ0LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250YWluZXInKTtcblxuICAgIGNvbnN0IGxlZnRDb3ZlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxlZnRDb3ZlckltZy5zcmMgPSBMZWZ0Q292ZXJJbWc7XG4gICAgbGVmdENvdmVySW1nLmNsYXNzTGlzdC5hZGQoJ2xlZnRJbWcnKTtcblxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSAnVE9LSU8gUkVTVEFVUkFOVCc7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnROYW1lJyk7XG5cbiAgICBjb25zdCBzaG9ydFRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaG9ydFRhZ2xpbmUuaW5uZXJUZXh0ID0gXCJGcm9tIHNlYSB0byBzdXNoaS5cIjtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChzaG9ydFRhZ2xpbmUpO1xuICAgIHNob3J0VGFnbGluZS5jbGFzc0xpc3QuYWRkKCdzaG9ydFRhZ2xpbmUnKTtcblxuICAgIGNvbnN0IGxvbmdUYWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG9uZ1RhZ2xpbmUuaW5uZXJUZXh0ID0gXCJXaXRoIHN1c2hpLCBpdCdzIGFsbCBhYm91dCBiYWxhbmNlLiBBIHRoaWNrIHNsaWNlIG9mIGZpc2gsIHRoaW4gc2xpY2Ugb2YgZmlzaCwgb3ZlcmNvb2tlZCByaWNlLCB1bmRlcmNvb2tlZCByaWNlLCB0b28gbXVjaCByaWNlIHZpbmVnYXIsIHRvbyBsaXR0bGUgcmljZSB2aW5lZ2Fy4oCUb25lIGhhcyB0byBpbXBlY2NhYmx5IGJhbGFuY2UgdGhlIGluZ3JlZGllbnRzIHRvIGNyYWZ0IHBlcmZlY3Rpb24uXCI7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9uZ1RhZ2xpbmUpO1xuICAgIGxvbmdUYWdsaW5lLmNsYXNzTGlzdC5hZGQoJ2xvbmdUYWdsaW5lJyk7XG5cblxuXG4gICAgY29udGFpbmVyLmFwcGVuZChsZWZ0Q292ZXJJbWcsIGhvbWVDb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IFBsYXR0ZXIgZnJvbSAnLi9pbWFnZXMvcGxhdHRlci5qcGcnO1xuaW1wb3J0IFVuaU1ha2kgZnJvbSAnLi9pbWFnZXMvdW5pLW1ha2kuanBnJztcbmltcG9ydCBNaXNvIGZyb20gJy4vaW1hZ2VzL21pc28uanBnJztcbmltcG9ydCBOaWdpcmkgZnJvbSAnLi9pbWFnZXMvbmlnaXJpLmpwZyc7XG5pbXBvcnQgQ2FsaWZvcm5pYU1ha2kgZnJvbSAnLi9pbWFnZXMvY2FsaWZvcm5pYS1tYWtpLmpwZyc7XG5pbXBvcnQgU2FzaGltaSBmcm9tICcuL2ltYWdlcy9zYXNoaW1pLmpwZyc7XG5pbXBvcnQgSWt1cmFNYWtpIGZyb20gJy4vaW1hZ2VzL2lrdXJhLW1ha2kuanBnJztcbmltcG9ydCBFYmlNYWtpIGZyb20gJy4vaW1hZ2VzL2ViaS1tYWtpLmpwZyc7XG5pbXBvcnQgVGVtYWtpIGZyb20gJy4vaW1hZ2VzL3RlbWFraS5qcGcnO1xuaW1wb3J0IE1hc2Fnb01ha2kgZnJvbSAnLi9pbWFnZXMvbWFzYWdvLW1ha2kuanBnJztcbmltcG9ydCBUb2Jpa29NYWtpIGZyb20gJy4vaW1hZ2VzL3RvYmlrby5qcGcnO1xuaW1wb3J0IEZ1dG9tYWtpIGZyb20gJy4vaW1hZ2VzL2Z1dG9tYWtpLmpwZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcblxuXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbXNDb250YWluZXIpO1xuICAgIG1lbnVJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbXNDb250YWluZXInKTtcblxuICAgIGNsYXNzIE1lbnVJdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9NZW51KCkge1xuICAgICAgICAgICAgbGV0IG1lbnVJdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVudUl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQ2FyZCcpO1xuXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIG1lbnVJdGVtTmFtZS5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcblxuICAgICAgICAgICAgbGV0IG1lbnVJdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG1lbnVJdGVtSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZTtcbiAgICAgICAgICAgIG1lbnVJdGVtQ2FyZC5hcHBlbmRDaGlsZChtZW51SXRlbUltYWdlKTtcblxuICAgICAgICAgICAgbGV0IG1lbnVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBtZW51SXRlbVByaWNlLmlubmVyVGV4dCA9IHRoaXMucHJpY2U7XG4gICAgICAgICAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmQobWVudUl0ZW1DYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcGxhdHRlciA9IG5ldyBNZW51SXRlbSgnQWxsIE91dCBTdXNoaSBQbGF0dGVyJywgJyQxLDAwMC4wMCcsIFBsYXR0ZXIpO1xuICAgIGxldCB1bmlNYWtpID0gbmV3IE1lbnVJdGVtKCdVbmkgTWFraScsICckMTAwLjAwJywgVW5pTWFraSk7XG4gICAgbGV0IG1pc28gPSBuZXcgTWVudUl0ZW0oJ01pc28gU291cCcsICckNzUuMDAnLCBNaXNvKTtcbiAgICBsZXQgbmlnaXJpID0gbmV3IE1lbnVJdGVtKCdTYWxtb24gTmlnaXJpJywgJyQxMjUuMDAnLCBOaWdpcmkpO1xuICAgIGxldCBjYWxpZm9ybmlhTWFraSA9IG5ldyBNZW51SXRlbSgnQ2FsaWZvcm5pYSBNYWtpJywgJyQ5MC4wMCcsIENhbGlmb3JuaWFNYWtpKTtcbiAgICBsZXQgc2FzaGltaSA9IG5ldyBNZW51SXRlbSgnU2FzaGltaScsICckMTQwLjAwJywgU2FzaGltaSk7XG4gICAgbGV0IGlrdXJhTWFraSA9IG5ldyBNZW51SXRlbSgnSWt1cmEgTWFraScsICckMTEwLjAwJywgSWt1cmFNYWtpKTtcbiAgICBsZXQgZWJpTWFraSA9IG5ldyBNZW51SXRlbSgnRWJpIE1ha2knLCAnJDk1LjAwJywgRWJpTWFraSk7XG4gICAgbGV0IHRlbWFraSA9IG5ldyBNZW51SXRlbSgnVGVtYWtpJywgJyQxMDAuMDAnLCBUZW1ha2kpO1xuICAgIGxldCBtYXNhZ29NYWtpID0gbmV3IE1lbnVJdGVtKCdNYXNhZ28gTWFraScsICckMTA1LjAwJywgTWFzYWdvTWFraSk7XG4gICAgbGV0IHRvYmlrb01ha2kgPSBuZXcgTWVudUl0ZW0oJ1RvYmlrbyBNYWtpJywgJyQxMTAuMDAnLCBUb2Jpa29NYWtpKTtcbiAgICBsZXQgZnV0b21ha2kgPSBuZXcgTWVudUl0ZW0oJ0Z1dG9tYWtpJywgJyQxMDUuMDAnLCBGdXRvbWFraSk7XG5cblxuICAgIGxldCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHBsYXR0ZXIsXG4gICAgICAgIHVuaU1ha2ksXG4gICAgICAgIG1pc28sXG4gICAgICAgIG5pZ2lyaSxcbiAgICAgICAgY2FsaWZvcm5pYU1ha2ksXG4gICAgICAgIHNhc2hpbWksXG4gICAgICAgIGlrdXJhTWFraSxcbiAgICAgICAgZWJpTWFraSxcbiAgICAgICAgdGVtYWtpLFxuICAgICAgICBtYXNhZ29NYWtpLFxuICAgICAgICB0b2Jpa29NYWtpLFxuICAgICAgICBmdXRvbWFraVxuICAgIF07XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XG4gICAgICAgIG1lbnVJdGVtLmFkZFRvTWVudSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxvZ28uaW5uZXJUZXh0ID0gJ1RPS0lPIFJFU1RBVVJBTlQnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gXCJIT01FXCI7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGhvbWUuaWQgPSAnaG9tZSc7XG4gICAgaG9tZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBtZW51LmlkID0gJ21lbnUnXG4gICAgbWVudS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3Quc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250YWluZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIHJldHVybiBtYWluO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cblxuICAgIGNvbnN0IGZyZWVwaWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZnJlZXBpay5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvZm9vZCc+Rm9vZCB2ZWN0b3IgY3JlYXRlZCBieSBtYWNyb3ZlY3RvciAtIHd3dy5mcmVlcGlrLmNvbTwvYT5cIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZnJlZXBpayk7XG5cbiAgICBjb25zdCBvZGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG9kaW4uaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vJz5UaGUgT2RpbiBQcm9qZWN0PC9hPlwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChvZGluKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkNvbnRhaW5lciB9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZU1haW5Db250YWluZXIoKTtcbm1haW5Db250YWluZXIuaWQgPSAnbWFpbkNvbnRhaW5lcic7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVwYWdlKCkpO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVwYWdlKCkpO1xufSlcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XG59KVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==