const logger = require('./LoggerHelper.js');
module.exports = class ElementHelper {

    waitForElementVisible(element){
        const log = `waitForElementVisible: ${element.locator()}`;
        logger.debug(log);
        browser.wait(protractor.ExpectedConditions.visibilityOf(element));
    }

    waitForElementClickable(element){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element));
    }

    waitAndClick(element) {
        const log = `waitAndClick: ${element.locator()}`;
        logger.info(log);
        return this.waitForElementClickable.then(() => {
                return element.click();
            });
    };
}