require(tests, function () {
    'use strict';
    var jasmineEnv = jasmine.getEnv(),
        htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.updateInterval = 1000;
    jasmineEnv.specFilter = htmlReporter.specFilter;
    jasmineEnv.execute();
});
