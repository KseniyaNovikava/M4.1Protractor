const format = require('string-format');

module.exports = class Page {

    constructor() {

        this.filtersBtn = element(by.css(".advanced-filters-readMoreButton"));
        this.mapViewBtn = element(by.css('[uib-tooltip="Heat Map View"]'));
        this.snapshotViewBtn = element(by.css('[uib-tooltip="Snapshot View"]'));
        this.trendViewBtn = element(by.css('[uib-tooltip="Trend View"]'));
        this.mapViewGraph = element(by.tagName('dhm-heat-map'));
        this.snapshotViewGraph = element(by.tagName('dhm-board-snapshot'));
        this.trendViewGraph = element(by.tagName('dhm-trend'));

    }

    waitAndClick(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element))
            .then(() => {
                return element.click();
            });
    };

}