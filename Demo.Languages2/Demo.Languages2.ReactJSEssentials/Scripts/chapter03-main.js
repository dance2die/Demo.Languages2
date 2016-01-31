require.config({
	baseUrl: "Scripts/",
	paths: {
		jquery: "jquery-2.2.0.min",
		alertify: "alertify/alertify.min"
	},
	shim: {
		jquery: {
			exports: "$"
		}
	}
});

require([], function () {
	//alertify.info("Hello Chapter03-main.js!");
	$.each([1, 2, 3], function(index, value) {
		console.log("index = " + index + "; value = " + value);
	});
});

