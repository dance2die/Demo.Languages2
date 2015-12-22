angular.module("app")
	.controller("mainCtrl", ['$scope', '$http', function ($scope, $http) {
		$scope.button1Click = function () {
			alert("button1 clicked");
		}
	}])