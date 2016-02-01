define(["require", "exports"], function (require, exports) {
    var Shape;
    (function (Shape) {
        var Rectangle = (function () {
            function Rectangle(width, height) {
                this.width = width;
                this.height = height;
            }
            Rectangle.prototype.getArea = function () {
                return this.width * this.height;
            };
            return Rectangle;
        })();
        Shape.Rectangle = Rectangle;
    })(Shape = exports.Shape || (exports.Shape = {}));
});
//# sourceMappingURL=Shape.js.map