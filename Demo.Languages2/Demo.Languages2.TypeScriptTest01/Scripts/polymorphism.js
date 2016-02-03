var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Polymorphism;
(function (Polymorphism) {
    var Car = (function () {
        function Car() {
        }
        Car.prototype.moveTo = function (x, y) {
            console.log('Driving to ' + x + ' ' + y);
        };
        return Car;
    })();
    Polymorphism.Car = Car;
    var SportsCar = (function (_super) {
        __extends(SportsCar, _super);
        function SportsCar() {
            _super.apply(this, arguments);
        }
        return SportsCar;
    })(Car);
    Polymorphism.SportsCar = SportsCar;
    var Airplane = (function () {
        function Airplane() {
        }
        Airplane.prototype.moveTo = function (x, y) {
            console.log('Flying to ' + x + ' ' + y);
        };
        return Airplane;
    })();
    Polymorphism.Airplane = Airplane;
    var Runner = (function () {
        function Runner() {
        }
        Runner.prototype.navigate = function (vehicle) {
            vehicle.moveTo(59.9436499, 10.7167959);
        };
        return Runner;
    })();
    Polymorphism.Runner = Runner;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=polymorphism.js.map