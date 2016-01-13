/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
import angular = require("angular");
import toastr = require("toastr");

export class AngularBootstrap {
	init() {
		angular.module("app", [])
			.controller("mainCtrl", ["$scope", "$timeout", ($scope, $timeout) => {
				$timeout(() => {
					$scope.result = "this is a result from AngularJS";
					toastr.info($scope.result);
				});
			}]);
	}
}