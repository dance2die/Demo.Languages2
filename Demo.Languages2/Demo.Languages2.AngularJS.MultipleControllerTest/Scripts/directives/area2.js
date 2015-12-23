(function() {
	angular.module("app")
		.directive("areaTwo", function () {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: '../templates/area2.html',
				controller: function ($scope) {
					$scope.button2Click = function () {
						alert("button2 clicked");
					}
				}
			}
		});
})();