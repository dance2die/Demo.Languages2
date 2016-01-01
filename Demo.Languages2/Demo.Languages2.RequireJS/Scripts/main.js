﻿require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.1.4.min",
		toastr: "toastr.min"
	},
	shim : {
		underscore : {
			exports: "_"
		},
		jquery: {
			exports: "$"
		}
	}
});


// "task1" using AMD (Asynchronous Module Declaration) syntax
//define("task1", ["toastr"], function (toastr) {
//	"use strict";

//	function alert1(msg) {
//		//alert(msg);
//		toastr.info(msg);
//	}

//	return{
//		alert1: alert1
//	}
//});


// "task1" defined using CommonJS syntax
define("task1", function(require, exports, module) {
	//var $ = require("jquery");
	var toastr = require('toastr');

	exports.alert1 = function (msg) {
		$.each([1, 2, 3], function(index, value) {
			toastr.info(msg + " " + value.toString());
		});
	}
});


require(["task1"], function(task1) {
	task1.alert1("Hello RequireJS World!!!");
});


