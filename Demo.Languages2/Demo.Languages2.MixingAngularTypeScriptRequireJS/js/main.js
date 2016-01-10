/// <reference path="../scripts/typings/requirejs/require.d.ts" />
var config = {
    paths: {
        jquery: "../Scripts/jquery-2.1.4.min",
        toastr: "../Scripts/toastr.min"
    },
    shim: {
        jquery: {
            exports: "$"
        }
    },
    waitSeconds: 0
};
require.config(config);
require(["toastr"], function (toastr) {
    toastr.info("Hello world");
});
//# sourceMappingURL=main.js.map