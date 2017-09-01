const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
    dest: 'reports/screenshots',
    filename: 'report.html',
    showSummary: true,
    showQuickLinks: true,
    ignoreSkippedSpecs: true,
    reportTitle: "e2e",
    pathBuilder: function (currentSpec, suites, browserCapabilities) {
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});

module.exports = {

    // Setup the report before any tests start
    beforeLaunch () {
        return new Promise((resolve) => {
            reporter.beforeLaunch(resolve);
        });
    },

    // Close the report after all tests finish
    afterLaunch (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    getReporter (){
        return reporter;
    }
}