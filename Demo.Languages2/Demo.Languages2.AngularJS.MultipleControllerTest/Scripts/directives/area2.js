(function () {
	angular.module("app")
		.directive("areaTwo", function (appSettings) {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: appSettings.Urls.baseUrl + 'Scripts/templates/area2.html',
				controller: function ($scope) {
					$scope.button2Click = function () {
						alert("button2 clicked");
					}
				}
			}
		});
})();