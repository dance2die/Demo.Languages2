//module app2 {
//	declare var require: any;

//	//import Rectangle = require("./Shape.ts");
//	//import { RecTangle } from require("Shape");
//	//import Rectangle = require("Shape");
//	import Rectangle = Shape.Rectangle;

//	function main() {
//		var rect: Rectangle = new Rectangle(10, 4);
//		var area: number = rect.getArea();
//		toastr.info("app2.main.area = " + area.toString());
//	}

//	export class Runner {
//		run() {
//			main();
//		}
//	}
//}

// http://www.edcourtenay.co.uk/musings-of-an-idiot/2014/11/26/typescript-requirejs-and-jquery
import g = require("Greeter");

var greeter = new g.Greeter("#content");
greeter.start();
