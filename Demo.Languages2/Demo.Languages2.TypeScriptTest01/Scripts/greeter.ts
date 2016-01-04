import $ = require("jquery");

export class Greeter {
	timerToken: number;

	constructor(private selector: string) {
		this.displayTime();
	}

	start() {
		this.timerToken = setInterval(() => this.displayTime(), 500);
	}

	stop() {
		clearTimeout(this.timerToken);
	}

	private displayTime() {
		$(this.selector).text("The time is: " + new Date().toUTCString());
	}
}