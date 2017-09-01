const ElementHelper = require('./helpers/ElementHelper.js');
const PageFactory = require('./pages/PageFactory.js');
const Logger = require('./helpers/LoggerHelper.js');
const Reporter = require('./helpers/Reporter.js');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    chromeDriver: 'webdriver/chromedriver',
    framework: 'jasmine2',
    capabilities: {
        'browserName': process.env.BROWSER,
    },
    //seleniumServerJar: 'selenium-server-standalone-3.4.0.jar',
    specs: ['scenarios/FilterForm.js'],
    onPrepare () {
        global.elementHelper = new ElementHelper();
        global.logger = new Logger();
        global.pageFactory = new PageFactory();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {displayStacktrace: true}
        }));
        jasmine.getEnv().addReporter(Reporter.getReporter());
    },

    beforeLaunch () {
        Reporter.beforeLaunch();
    },

    afterLaunch (exitCode){
        Reporter.afterLaunch(exitCode);
    }

};