/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="../ts/scopetest.ts" />
/// <reference path="../ts/runtimetest.ts" />
/// <reference path="../ts/loggertest.ts" />
require.config({
    baseUrl: "Scripts/",
    paths: {
        jquery: "jquery-2.1.4.min",
        toastr: "toastr.min",
        polymorphism: "Polymorphism",
        app2: "app2",
        scopeTest: "../ts/scopeTest",
        runtimeTest: "../ts/runtimeTest",
        loggerTest: "../ts/loggerTest"
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
require(["app2", "scopeTest", "runtimeTest", "loggerTest"], function (app2, scopeTest, runtimeTest, loggerTest) {
    //var runner = new app2.Runner();
    //runner.run();
    var runner2 = new scopeTest.scopeTestRunner();
    //runner2.scopeTest1();
    //runner2.scopeTest2();
    //runner2.scopeTest3();
    var runtimeTestRunner = new runtimeTest.runtimeTestRunner();
    //runtimeTestRunner.test1();
    var clickLogger = new loggerTest.ClickLogger();
    //clickLogger.wireEvents();
});
//# sourceMappingURL=app2-main.js.map