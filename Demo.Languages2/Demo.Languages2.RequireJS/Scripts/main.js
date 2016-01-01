require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.1.4.min",
		toastr: "toastr.min",
		task1: "tasks/task1"
	},
	shim : {
		underscore : {
			exports: "_"
		},
		jquery: {
			exports: "$"
		}
	},
	waitSeconds: 0,
	deps: ["config"],
	callback: function(config) {
		alert("config loaded " + config.githubUrl);
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

require(["task1", "config"], function (task1, config) {
	task1.alert1(config.msg + " from " + config.githubUrl);
});


