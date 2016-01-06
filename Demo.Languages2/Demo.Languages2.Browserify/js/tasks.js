"use strict";

var $ = require("jquery");
var taskData = require("./taskData");
var taskRenderer = require("./taskRenderer");

exports.add = function() {
	taskRenderer.renderNew();
}

exports.remove = function() {
	taskData.clear();
	exports.render();
}

exports.clear = function() {
	taskData.clear();
	exports.render();
}

exports.save = function() {
	var tasks = [];
	taskData.save(tasks);
}

exports.cancel = function() {
	exports.render();
}

exports.render = function() {
	taskRenderer.renderTasks(taskData.load());
}



