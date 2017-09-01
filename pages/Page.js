const format = require('string-format');

module.exports = class Page {

    constructor() {

        this.filtersBtn = element(by.css("button.advanced-filters-button"));
        this.mapViewBtn = element(by.css('[uib-tooltip="Heat Map View"]'));
        this.snapshotViewBtn = element(by.css('[uib-tooltip="Snapshot View"]'));
        this.trendViewBtn = element(by.css('[uib-tooltip="Trend View"]'));
        this.mapViewGraph = element(by.tagName('dhm-heat-map'));
        this.snapshotViewGraph = element(by.tagName('dhm-board-snapshot'));
        this.trendViewGraph = element(by.tagName('dhm-trend'));
        this.searchInput = element(by.model('query'));
        this.footer = element(by.tagName('footer'));

    }

    waitAndClick(element) {
        const log = `waitForElementVisible: ${element.locator()}`;
        logger.info(log);
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element))
            .then(() => {
                return element.click();
            });
    };

    scrollToBottom() {
        return browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    };

    highlightElement(element) {
        const log = `highlightElement: ${element.locator()}`;
        logger.info(log);
        return browser.executeAsyncScript("arguments[0].style.backgroundColor = '" + "yellow" + "'", element)
    };

    openPage() {
        const log = `get page : https://staging.telescope.epam.com/health/board`;
        logger.info(log);
        browser.get('https://staging.telescope.epam.com/health/board');
    };

    clearSession() {
        return browser.executeScript('window.localStorage.clear();')
            .then(() => {
                browser.manage().deleteAllCookies();
            });
    }


}