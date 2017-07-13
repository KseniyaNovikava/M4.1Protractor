const format = require('string-format');

const CUSTOMER_CELL = '//div[@class="board-snapshot-container"]/div/div[text() = "{}"]';

let cell,
    cellTip,
    projectsNumber;

module.exports = class Cell  {

    constructor(cellName) {
         cell = element(by.xpath(format(CUSTOMER_CELL, cellName)));
         cellTip = element(by.cssContainingText(".board-snapshot-tooltip-title", cellName));
         projectsNumber = element(by.css('[ng-show="$ctrl.bubbleAll.projectCount"]'));
    }

    clickCell() {
        return elementHelper.waitAndClick(cell);
    };

    mouseMoveToCell() {
        return  browser.actions().mouseMove(cell).perform();
    };

    isPresentCellTip() {
        return cellTip.isPresent();
    };

    getCustomerProjectsNumber() {
        this.mouseMoveToCell();
        elementHelper.waitForElementVisible(cellTip);
        return projectsNumber.getText();
    };

}