module.exports = class ElementHelper {

    waitForElementVisible(element){
        browser.wait(protractor.ExpectedConditions.visibilityOf(element));
    }

    waitForElementClickable(element){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element));
    }

    waitAndClick(element) {
        return this.waitForElementClickable.then(() => {
                return element.click();
            });
    };
}