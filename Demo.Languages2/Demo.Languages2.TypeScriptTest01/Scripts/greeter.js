define(["require", "exports", "jquery"], function (require, exports, $) {
    var Greeter = (function () {
        function Greeter(selector) {
            this.selector = selector;
            this.displayTime();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.displayTime(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        Greeter.prototype.displayTime = function () {
            $(this.selector).text("The time is: " + new Date().toUTCString());
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
});
//# sourceMappingURL=greeter.js.map