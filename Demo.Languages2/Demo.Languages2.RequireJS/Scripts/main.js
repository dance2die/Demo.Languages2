require.config({
	paths: {
		jquery: "jquery-2.1.4.min"
	}
});


define("task1", [], function() {
	"use strict";

	function alert1(msg) {
		alert(msg);
	}

	return{
		alert1: alert1
	}
});


require(["jquery", "task1"], function($, task1) {
	task1.alert1("Hello RequireJS World!!!");
});


