
const Page = require('./page.js');

const CUSTOMER = 'Google';
const PROJECT = 'GOOG-BZPS';

describe('Health Monitor', function () {

    let page;

    beforeAll(() => {
        browser.get('https://staging.telescope.epam.com/health/board');
        page = new Page();
    });

    it('should verify customer header', () => {
        browser.wait(protractor.ExpectedConditions.titleContains('Health board - DHM'),10000);
        page.clickCell(CUSTOMER);
        expect(page.customerHeader.getText()).toEqual(CUSTOMER);
    });

    it('should verify project header', () => {
        page.clickCell(PROJECT);
        expect(page.customerHeader.getText()).toEqual(PROJECT);
    });

    it('should verify summary modal window is present', () => {
        browser.wait(protractor.ExpectedConditions.presenceOf(page.statusContainer),10000);
        page.button.click();
        expect(page.modalSummary.isPresent()).toBe(true);
    });

});