module Polymorphism {
	export interface Vehicle {
		moveTo(x: number, y: number);
	}

	export class Car implements Vehicle {
		moveTo(x: number, y: number) {
			console.log('Driving to ' + x + ' ' + y);
		}
	}

	export class SportsCar extends Car {

	}

	export class Airplane {
		moveTo(x: number, y: number) {
			console.log('Flying to ' + x + ' ' + y);
		}
	}

	export class Runner {
		navigate(vehicle: Vehicle) {
			vehicle.moveTo(59.9436499, 10.7167959);
		}
	}

}