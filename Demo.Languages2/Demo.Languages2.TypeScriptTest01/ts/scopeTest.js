/// <reference path="../scripts/typings/toastr/toastr.d.ts" />
define(["require", "exports", "toastr"], function (require, exports, toastr) {
    var scopeTestRunner = (function () {
        function scopeTestRunner() {
        }
        scopeTestRunner.prototype.run = function () {
            var scope = 1;
            {
                var scope = 2;
                toastr.info("Inner: " + scope);
            }
            toastr.info("Outter: " + scope);
        };
        return scopeTestRunner;
    })();
    exports.scopeTestRunner = scopeTestRunner;
});
//# sourceMappingURL=scopeTest.js.map