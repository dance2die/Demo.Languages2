require.config({
	paths: {
		jquery: "../Scripts/jquery-2.1.4.min",
		toastr: "../Scripts/toastr.min",
		angular: "../Scripts/angular.min",
		alertify: "../Scripts/alertify/alertify.min"
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


require(["toastr", "app", "alertify"], function (toastr, app, alertify) {
	//toastr.info("Hello world");

	//var angularBootstrap = new app.AngularBootstrap();
	//angularBootstrap.init();

	alertify.log("alertify.log");
	alertify.success("Saved successfully.");
	alertify.error("Error notification");
});