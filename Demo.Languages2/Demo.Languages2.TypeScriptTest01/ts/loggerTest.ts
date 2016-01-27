/// <reference path="../scripts/typings/toastr/toastr.d.ts" />

import toastr = require("toastr");

export class ClickLogger {
	constructor() {
		document.addEventListener('click', this.eventListener);
	}

	eventListener(e: Event) {
		// 3 (Bubbling Phase)
		var phase = e.eventPhase;

		var tag = (<HTMLElement>e.target).tagName;

		//console.log('Click event in phase ' + phase +
		toastr.info('Click event in phase ' + phase +
			' detected on element ' + tag + ' by ClickLogger.');
	}
}