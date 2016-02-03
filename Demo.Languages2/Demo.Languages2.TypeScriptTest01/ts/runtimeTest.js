/// <reference path="../scripts/typings/toastr/toastr.d.ts" />
define(["require", "exports", "toastr"], function (require, exports, toastr) {
    var runtimeTestRunner = (function () {
        function runtimeTestRunner() {
        }
        runtimeTestRunner.prototype.test1 = function () {
            var numbers = [3, 11, 5, 7, 2];
            // A fragile way of finding the maximum number 
            // var max = Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
            // A solid way to find the maximum
            var max = Math.max.apply(null, numbers);
            // 11
            toastr.info("max among 3, 11, 5, 7, 2 is " + max);
        };
        return runtimeTestRunner;
    })();
    exports.runtimeTestRunner = runtimeTestRunner;
});
//# sourceMappingURL=runtimetest.js.map