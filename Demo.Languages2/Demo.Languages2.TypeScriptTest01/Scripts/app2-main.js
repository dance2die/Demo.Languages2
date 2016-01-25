/// <reference path="typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "Scripts/",
    paths: {
        jquery: "jquery-2.1.4.min",
        toastr: "toastr.min",
        polymorphism: "Polymorphism",
        app2: "app2",
        scopeTest: "../ts/scopeTest"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        jquery: {
            exports: "$"
        }
    },
    waitSeconds: 0,
    urlArgs: "bust=" + (new Date()).getTime()
});
require(["app2", "scopeTest"], function (app2, scopeTest) {
    //var runner = new app2.Runner();
    //runner.run();
    var runner2 = new scopeTest.scopeTestRunner();
    runner2.run();
});
//# sourceMappingURL=app2-main.js.map