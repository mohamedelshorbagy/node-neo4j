/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/controllers/social.js":
/*!***********************************!*\
  !*** ./app/controllers/social.js ***!
  \***********************************/
/*! exports provided: ctrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctrls\", function() { return ctrls; });\n/* harmony import */ var _services_social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/social */ \"./app/services/social.js\");\n\nconst {\n  all\n} = _services_social__WEBPACK_IMPORTED_MODULE_0__[\"services\"];\nconst ctrls = {\n  all(req, res, next) {\n    const {\n      name = \"Facebook\"\n    } = req.params;\n    return all(name).then(response => {\n      let records = response['records'];\n      records = records.map(record => ({\n        user: record._fields[0].properties,\n        type: record._fields[0].labels.join(',')\n      }));\n      return res.status(200).json({\n        success: true,\n        data: records\n      });\n    }).catch(err => {\n      console.log(err);\n      return res.status(200).json({\n        success: true,\n        message: 'Something went wrong!'\n      });\n    });\n  }\n\n};\n\n//# sourceURL=webpack:///./app/controllers/social.js?");

/***/ }),

/***/ "./app/controllers/user.js":
/*!*********************************!*\
  !*** ./app/controllers/user.js ***!
  \*********************************/
/*! exports provided: ctrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctrls\", function() { return ctrls; });\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user */ \"./app/services/user.js\");\n\nconst {\n  all\n} = _services_user__WEBPACK_IMPORTED_MODULE_0__[\"services\"];\nconst ctrls = {\n  all(req, res, next) {\n    const {\n      name = \"Shorbagy\"\n    } = req.params;\n    return all(name).then(response => {\n      let {\n        records\n      } = response;\n      records = records.map(record => ({\n        user: { ...record._fields[0].properties\n        },\n        relationship: record._fields[1].type\n      }));\n      return res.status(200).json({\n        success: true,\n        data: records\n      });\n    }).catch(err => {\n      console.log(err);\n      return res.status(200).json({\n        success: true,\n        message: 'Something went wrong!'\n      });\n    });\n  }\n\n};\n\n//# sourceURL=webpack:///./app/controllers/user.js?");

/***/ }),

/***/ "./app/services/social.js":
/*!********************************!*\
  !*** ./app/services/social.js ***!
  \********************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"services\", function() { return services; });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/db */ \"./config/db.js\");\n\nconst services = {\n  all(name) {\n    /* insert your interaction & logic with db here */\n    return _config_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(`match (n: Social { name: \"${name}\" })-[r: Joined]-(b) return b`);\n  }\n\n};\n\n//# sourceURL=webpack:///./app/services/social.js?");

/***/ }),

/***/ "./app/services/user.js":
/*!******************************!*\
  !*** ./app/services/user.js ***!
  \******************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"services\", function() { return services; });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/db */ \"./config/db.js\");\n\nconst services = {\n  all(name) {\n    return _config_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(`match (n:Person { name: \"${name}\" })-[r]-(b) return b,r`);\n  }\n\n};\n\n//# sourceURL=webpack:///./app/services/user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  PORT: 3000,\n  DB: 'mongodb://localhost:27017/babel-node'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./config/config.js\");\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ne4jDB = neo4j_driver__WEBPACK_IMPORTED_MODULE_1__[\"v1\"];\nlet session;\nconst driver = ne4jDB.driver(\"bolt://localhost:7687\", ne4jDB.auth.basic('neo4j', 'root'));\nsession = driver.session();\n\nif (session) {\n  console.log('Database Connected');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (session);\n\n//# sourceURL=webpack:///./config/db.js?");

/***/ }),

/***/ "./config/express.js":
/*!***************************!*\
  !*** ./config/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use(morgan__WEBPACK_IMPORTED_MODULE_1__('dev'));\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0__[\"urlencoded\"]({\n    extended: false\n  }));\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0__[\"json\"]());\n  app.use(cors__WEBPACK_IMPORTED_MODULE_2__());\n  app.use(helmet__WEBPACK_IMPORTED_MODULE_3__());\n  app.use(compression__WEBPACK_IMPORTED_MODULE_4__());\n});\n\n//# sourceURL=webpack:///./config/express.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social */ \"./routes/social.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./routes/user.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use('/api/social', _social__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  app.use('/api/user', _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/social.js":
/*!**************************!*\
  !*** ./routes/social.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_controllers_social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/controllers/social */ \"./app/controllers/social.js\");\n\n\nconst {\n  all\n} = _app_controllers_social__WEBPACK_IMPORTED_MODULE_1__[\"ctrls\"];\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.get('/getAttached/:name', all);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/social.js?");

/***/ }),

/***/ "./routes/user.js":
/*!************************!*\
  !*** ./routes/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_controllers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/controllers/user */ \"./app/controllers/user.js\");\n\n\nconst {\n  all\n} = _app_controllers_user__WEBPACK_IMPORTED_MODULE_1__[\"ctrls\"];\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.get('/findRelationship/:name', all);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/user.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/express */ \"./config/express.js\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/db */ \"./config/db.js\");\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\nconst {\n  PORT\n} = _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nObject(_config_express__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app); // dbInit(ne4jDB);\n\nObject(_routes_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\napp.listen(PORT, () => {\n  console.log(`App is running at: localhost:${PORT}`);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./server.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./server.js */\"./server.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "neo4j-driver":
/*!*******************************!*\
  !*** external "neo4j-driver" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"neo4j-driver\");\n\n//# sourceURL=webpack:///external_%22neo4j-driver%22?");

/***/ })

/******/ });