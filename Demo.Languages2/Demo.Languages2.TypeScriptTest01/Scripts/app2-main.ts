/// <reference path="typings/requirejs/require.d.ts" />
require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.1.4.min",
		toastr: "toastr.min",
		polymorphism: "Polymorphism",
		app2: "app2"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		jquery: {
			exports: "$"
		}
	},
	waitSeconds: 0,
	urlArgs: "bust=" + (new Date()).getTime()
});


//require(["app2"], (app2) => {
//	app2.Runner.run();
//});

require(["app2"], (app2) => {
	var runner = new app2.Runner();
	runner.run();
});
