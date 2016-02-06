require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.1.4.min",
		alertify: "alertify/alertify.min",
		task1: "tasks/task1",
		bootstrap: "bootstrap.min"
	},
	shim: {
		jquery: {
			exports: "$"
		}
	}
});

require(["task1"], function (task1) {
	task1.alert1();
	//console.log("bootstrap.length = " + bootstrap.length);
});


