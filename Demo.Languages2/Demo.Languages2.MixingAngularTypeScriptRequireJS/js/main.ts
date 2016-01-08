/// <reference path="../scripts/typings/requirejs/require.d.ts" />
var config: RequireConfig = {
	paths: {
		jquery: "../Scripts/jquery-2.1.4.min",
		toastr: "../Scripts/toastr.min"
	},
	shim : {
		jquery: {
			exports: "$"
		}
	},
	waitSeconds: 0
};
require.config(config);

require(["toastr"], (toastr) => {
	toastr.info("Hello world");
});