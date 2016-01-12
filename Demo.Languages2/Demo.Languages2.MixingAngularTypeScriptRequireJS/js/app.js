define(["require", "exports"], function (require, exports) {
    /// <reference path="../scripts/typings/angularjs/angular.d.ts" />
    var AngularBootstrap = (function () {
        function AngularBootstrap() {
        }
        AngularBootstrap.prototype.runAngular = function () {
            angular.module("app", [])
                .controller("mainCtrl", ["$scope", function ($scope) {
                    $scope.result = "this is a result from AngularJS";
                }]);
        };
        return AngularBootstrap;
    })();
    exports.AngularBootstrap = AngularBootstrap;
});
//# sourceMappingURL=app.js.map