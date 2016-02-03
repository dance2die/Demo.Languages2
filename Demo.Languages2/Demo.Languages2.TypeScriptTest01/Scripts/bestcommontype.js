/// <reference path="typings/toastr/toastr.d.ts" />
var BestCommonExample;
(function (BestCommonExample) {
    var bestCommonTypeExample = [
        { a: 'A', b: 1, c: true },
        { a: 'B', b: 2 },
        { b: 3 }
    ];
    var BestCommonExampleClass = (function () {
        function BestCommonExampleClass() {
        }
        BestCommonExampleClass.prototype.run = function () {
            for (var i = 0; i < bestCommonTypeExample.length; i++) {
                var value = bestCommonTypeExample[i];
                // The property 'a' does not exist on value of type '{ b: number }'.
                //console.log(value.a);
                // OK
                console.log(value.b);
            }
        };
        return BestCommonExampleClass;
    })();
    BestCommonExample.BestCommonExampleClass = BestCommonExampleClass;
})(BestCommonExample || (BestCommonExample = {}));
//# sourceMappingURL=bestcommontype.js.map