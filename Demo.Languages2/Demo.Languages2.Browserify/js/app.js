"use strict";

var $ = require("jquery");
var tasks = require("./tasks");

function addTask() {
	tasks.add();
}

function deleteAllTasks() {
	tasks.clear();
}

function saveChanges() {
	tasks.save();
}

function cancelChanges() {
	tasks.cancel();
}

function removeTask(clickEvent) {
	tasks.remove(clickEvent);
}

function registerEventHanlders() {
	$("#newButton").on("click", addTask);
	$("#deleteButton").on("click", deleteAllTasks);
	$("#saveButton").on("click", saveChanges);
	$("#cancelButton").on("click", cancelChanges);
}

registerEventHanlders();
tasks.render();
alert("changed");