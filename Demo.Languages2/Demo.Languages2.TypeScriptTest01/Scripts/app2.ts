import Shape1 = require("Shape");
import toastr = require("toastr");
import Rectangle = Shape1.Shape.Rectangle;

function main() {
	var rect: Shape1.Shape.Rectangle = new Rectangle(10, 4);
	var area: number = rect.getArea();
	toastr.info("app2.main.area = " + area.toString());
}

export class Runner {
	run() {
		main();
	}
}

//// http://www.edcourtenay.co.uk/musings-of-an-idiot/2014/11/26/typescript-requirejs-and-jquery
//import g = require("Greeter");

//var greeter = new g.Greeter("#content");
//greeter.start();


