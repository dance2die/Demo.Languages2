declare var require; //: (input: any) => any;

require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.1.4.min",
		toastr: "toastr.min",
		polymorphism: "Polymorphism"
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


require(["app2"], (app2) => {
	app2.Runner.run();
});

