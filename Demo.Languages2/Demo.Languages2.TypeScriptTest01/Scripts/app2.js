define(["require", "exports", "Shape", "toastr"], function (require, exports, Shape1, toastr) {
    var Rectangle = Shape1.Shape.Rectangle;
    function main() {
        var rect = new Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("app2.main.area = " + area.toString());
    }
    var Runner = (function () {
        function Runner() {
        }
        Runner.prototype.run = function () {
            main();
        };
        return Runner;
    })();
    exports.Runner = Runner;
});
//// http://www.edcourtenay.co.uk/musings-of-an-idiot/2014/11/26/typescript-requirejs-and-jquery
//import g = require("Greeter");
//var greeter = new g.Greeter("#content");
//greeter.start();
//# sourceMappingURL=app2.js.map