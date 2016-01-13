require.config({
	paths: {
		jquery: "../Scripts/jquery-2.1.4.min",
		toastr: "../Scripts/toastr.min",
		angular: "../Scripts/angular.min"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		angular: {
			exports: "angular"
		}
	},
	waitSeconds: 0
});

//import app = require("app");


require(["toastr", "app"], function(toastr, app) {
	toastr.info("Hello world");

	var angularBootstrap = new app.AngularBootstrap();
	angularBootstrap.init();
});