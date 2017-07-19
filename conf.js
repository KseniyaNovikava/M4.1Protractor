const ElementHelper = require('./helpers/ElementHelper.js');
const PageFactory = require('./pages/PageFactory.js');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    chromeDriver: 'webdriver/chromedriver',
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome',
    },
    //seleniumServerJar: 'selenium-server-standalone-3.4.0.jar',
    specs: ['scenarios/Actions.js'],
    onPrepare: function () {
        global.elementHelper = new ElementHelper();
        global.pageFactory = new PageFactory();
    }
};