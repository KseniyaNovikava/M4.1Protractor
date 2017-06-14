const format = require('string-format');

const CUSTOMER_CELL = '//div[@class="snapshot-container"]/div/div[text() = "{}"]';

module.exports = class Page {

    constructor() {

         this.customerHeader = element(by.css('.report-header__breadcrumbs_report-name'));
         this.statusContainer = element(by.className('report-overview__status-container'));
         this.button = element.all(by.css('.modal-more-button')).first();
         this.modalSummary = element(by.css('.modal-content'));

    }

    clickCell (text) {
        let cell = element(by.xpath(format(CUSTOMER_CELL, text)));
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(cell))
            .then(() => {
                return cell.click();
            });
    };
}