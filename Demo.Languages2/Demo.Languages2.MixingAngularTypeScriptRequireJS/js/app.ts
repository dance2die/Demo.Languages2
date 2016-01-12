/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
export class AngularBootstrap {
	runAngular() {
		angular.module("app", [])
			.controller("mainCtrl", ["$scope", ($scope) => {
				$scope.result = "this is a result from AngularJS";
			}]);
	}
}