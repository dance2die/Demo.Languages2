angular.module("app")
	.controller("outerCtrl", ['$scope', '$http', function ($scope, $http) {
		$scope.testText = "Hello World!";
	}])