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
