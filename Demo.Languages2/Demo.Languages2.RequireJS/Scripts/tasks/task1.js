// "task1" defined using CommonJS syntax
define("task1", function (require, exports, module) {
	//var $ = require("jquery");
	var toastr = require('toastr');

	exports.alert1 = function (msg) {
		$.each([1, 2, 3], function (index, value) {
			toastr.info(msg + " " + value.toString());
		});
	}
});