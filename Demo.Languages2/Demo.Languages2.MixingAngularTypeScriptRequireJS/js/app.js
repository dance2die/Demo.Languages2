define(["require", "exports", "angular", "toastr"], function (require, exports, angular, toastr) {
    var AngularBootstrap = (function () {
        function AngularBootstrap() {
        }
        AngularBootstrap.prototype.init = function () {
            angular.module("app", [])
                .controller("mainCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
                    $timeout(function () {
                        $scope.result = "this is a result from AngularJS";
                        toastr.info($scope.result);
                    });
                }]);
        };
        return AngularBootstrap;
    })();
    exports.AngularBootstrap = AngularBootstrap;
});
//# sourceMappingURL=app.js.map