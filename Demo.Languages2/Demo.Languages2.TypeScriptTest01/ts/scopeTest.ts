/// <reference path="../scripts/typings/toastr/toastr.d.ts" />

import toastr = require("toastr");

export class scopeTestRunner {
	scopeTest1() {
		var scope = 1;

		{
			var scope = 2;
			toastr.info("Inner: " + scope);
		}

		toastr.info("Outter: " + scope);
	}

	scopeTest2() {
		var scope = 1;

		(() => {
			var scope = 2;
			toastr.info("Inner: " + scope);
		})();

		toastr.info("Outter: " + scope);
	}

	scopeTest3() {
		var scope = 1;

		{
			let scope = 2;
			toastr.info("Inner: " + scope);
		}

		toastr.info("Outter: " + scope);
	}
}