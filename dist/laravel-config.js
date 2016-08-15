(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravelConfig"] = factory();
	else
		root["laravelConfig"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var configData = {};

	var Config = {
	    get: function get(propertyName, defaultValue) {
	        if (typeof configData[propertyName] !== 'undefined') {
	            return configData[propertyName];
	        }

	        // Config property not set

	        if (arguments.length > 1) {
	            return defaultValue;
	        } else {
	            return null;
	        }
	    },

	    addConfig: function addConfig(data) {
	        for (var propertyName in data) {
	            configData[propertyName] = data[propertyName];
	        }
	    }
	};

	if (typeof window !== 'undefined') {
	    var configDataElement = window.document.getElementById('facades-data-config');

	    if (configDataElement) {
	        Config.addConfig(JSON.parse(configDataElement.innerHTML));
	    }
	}

	exports.default = Config;

/***/ }
/******/ ])
});
;