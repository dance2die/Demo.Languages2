/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/toastr/toastr.d.ts" />
/// <reference path="scripts/bestcommontype.ts" />
/// <reference path="scripts/polymorphism.ts" />

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
	import Runner = Polymorphism.Runner;
	import SportsCar = Polymorphism.SportsCar;
	import Airplane = Polymorphism.Airplane;
	import Rectangle = Shape.Rectangle;

	function main() {
		////toastr.info("This is a toastr");

		var rect: Rectangle = new Rectangle(10, 4);
		var area: number = rect.getArea();
		toastr.info("area = " + area.toString());

		var example: Examples = new Examples();
		//example.testBestCommonType();
		//example.testWidenedType();
		//example.testPolymorphism();
		example.testTypeConstraint();
	}

	//declare class jQuery {
	//	html(html: string): void;
	//}
	//declare function $(query: string) : jQuery;

	export interface HasName {
		name: string;
	}

	export class Personalization {
		static greet<T extends HasName>(obj: T) {
			return 'Hello ' + obj.name;
		}
	}

	class Examples {

		testBestCommonType() {
			var bestCommonTypeExample = [
				{ a: 'A', b: 1, c: true },
				{ a: 'B', b: 2 },
				{ b: 3 }
			];

			for (var i = 0; i < bestCommonTypeExample.length; i++) {
				var value = bestCommonTypeExample[i];

				// The property 'a' does not exist on value of type '{ b: number }'.
				//console.log(value.a);

				// OK
				console.log(value.b);

				// The property 'c' does not exist on value of type '{ b: number }'.
				//console.log(value.c);
			}
		}

		testTypeConstraint() {
			console.log(Personalization.greet({ name: "Mike" }));
		}

		testWidenedType() {
			function example() { return null; }

			var widened = example();
			console.log(typeof widened);
		}

		testPolymorphism() {
			var runner: Polymorphism.Runner = new Runner();
			runner.navigate(new SportsCar());
			runner.navigate(new Airplane());
		}
	}

	$(() =>{
		main();
	});
}