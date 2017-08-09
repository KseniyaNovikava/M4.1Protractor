const Page = require('./../pages/Page.js');

describe('Change Filter View', function () {

    let page;

    beforeAll(() => {
        page = pageFactory.getPage('page');
    });

    beforeEach(() => {
        page.openPage();
    });

    afterEach(() => {
        page.clearSession();
    });

    it('should display trend view statuses', () => {
        page.waitAndClick(page.trendViewBtn);
        expect(page.trendViewGraph.isPresent()).toBe(true);
    });

    it('should display snapshot view', () => {
        page.waitAndClick(page.snapshotViewBtn);
        expect(page.snapshotViewGraph.isPresent()).toBe(true);
    });

    it('should display heat map view', () => {
        page.waitAndClick(page.mapViewBtn);
        expect(page.mapViewGraph.isPresent()).toBe(true);
    });


});