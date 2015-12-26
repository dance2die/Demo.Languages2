/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/toastr/toastr.d.ts" />
/// <reference path="scripts/bestcommontype.ts" />

module Shape {
	export interface IRectangle {
		width: number;
		height: number;
		getArea(): number;
	}

	export class Rectangle implements IRectangle {
		constructor(public width: number, public height: number) {
		}

		getArea(): number {
			return this.width * this.height;
		}
	}
}

module Program {
	import Rectangle = Shape.Rectangle;
	import IRectangle = Shape.IRectangle;
	import BestCommonExampleClass = BestCommonExample.BestCommonExampleClass;

	function main() {
		////toastr.info("This is a toastr");

		//var rect: IRectangle = new Rectangle(10, 4);
		//var area: number = rect.getArea();
		//toastr.info("area = " + area.toString());

		var example1: BestCommonExampleClass = new BestCommonExampleClass();
		example1.run();
	}

	$(() =>{
		main();
	});
}