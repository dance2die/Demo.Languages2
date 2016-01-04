/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="shape.ts" />

module app2 {
	declare var require: any;

	import Rectangle = require("./Shape.ts");
	//import Rectangle = Shape.Rectangle;

	function main() {
		var rect: Rectangle = new Rectangle(10, 4);
		var area: number = rect.getArea();
		toastr.info("app2.main.area = " + area.toString());
	}

	export class Runner {
		run() {
			main();
		}
	}
}
