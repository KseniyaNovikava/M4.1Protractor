const ElementHelper = require('./helpers/ElementHelper.js');
const PageFactory = require('./pages/PageFactory.js');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    chromeDriver: 'webdriver/chromedriver',
    framework: 'jasmine2',
    multiCapabilities: [{
        browserName: 'chrome',
        maxInstances: 2,
        shardTestFiles: true,
    }, {
        browserName: 'firefox',
        maxInstances: 2,
        shardTestFiles: true,
    }],
    specs: ['scenarios/*'],
    onPrepare: function () {
        global.elementHelper = new ElementHelper();
        global.pageFactory = new PageFactory();
    }
};