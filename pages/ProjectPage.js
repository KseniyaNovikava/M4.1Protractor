const format = require('string-format');
const Page = require('./Page.js');

const CUSTOMER_CELL = '//div[@class="board-snapshot-container"]/div/div[text() = "{}"]';

module.exports = class ProjectPage extends Page  {

    constructor() {

        super();

        this.customerHeader = element(by.css('.report-header__breadcrumbs_report-name'));
        this.statusContainer = element(by.className('report-overview__status-container'));
        this.readMoreButton = element.all(by.css('.modal-more-readMoreButton')).first();
        this.modalSummary = element(by.css('.modal-content'));
        this.overviewBoard = element(by.css('.board-overview'));
        this.inNumbersBoard = element(by.css('.board-in-numbers'));

    }

    clickCell(text) {
        let cell = element(by.xpath(format(CUSTOMER_CELL, text)));
        return super.waitAndClick(cell);
    };

    mouseMoveToCell(text) {
        let cell = element(by.xpath(format(CUSTOMER_CELL, text)));
        return  browser.actions().mouseMove(cell).perform();
    };

}