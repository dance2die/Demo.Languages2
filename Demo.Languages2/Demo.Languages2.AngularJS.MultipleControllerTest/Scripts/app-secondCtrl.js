angular.module("app")
	.controller("secondCtrl", ['$scope', '$http', function ($scope, $http) {
		$scope.button2Click = function () {
			alert("button2 clicked");
		}
	}]);