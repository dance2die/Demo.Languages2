(function() {
	angular.module("app")
		.directive("areaOne", function() {
			return {
				restrict: 'E',
				templateUrl: '~/templates/area1.html',
				controller: function ($scope) {
					$scope.button1Click = function () {
						alert("button1 clicked");
					}
				}
			}
		});
})();