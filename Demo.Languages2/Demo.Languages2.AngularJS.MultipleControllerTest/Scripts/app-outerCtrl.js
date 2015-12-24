angular.module("app")
	.controller("outerCtrl", ['$scope', '$http', function ($scope, $http) {
		$scope.testText = "Hello World!";

		$scope.items = ['a', 'b', 'c'];

		$scope.reverse = function(list) {
			var reversedList = reverse(list);
			reversedList.forEach(function (item) {
				$("#reversedListResult").append(item);
			});
		}
	}]);