/// <reference path="../scripts/typings/toastr/toastr.d.ts" />

import toastr = require("toastr");

export class scopeTestRunner {
	run() {
		var scope = 1;

		{
			var scope = 2;
			toastr.info("Inner: " + scope);
		}

		toastr.info("Outter: " + scope);
	}
}