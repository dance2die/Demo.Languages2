(function() {
	angular.module("app")
		.directive("areaOne", function(appSettings) {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: appSettings.Urls.baseUrl + 'Scripts/templates/area1.html',
				controller: function ($scope) {
					$scope.button1Click = function () {
						alert("button1 clicked");
					}
				}
			}
		});
})();