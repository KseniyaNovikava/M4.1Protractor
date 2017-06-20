const ProjectPage = require('./../pages/ProjectPage.js');

const CUSTOMER = 'Google';
const PROJECT = 'GOOG-BZPS';

describe('Customer page components', function () {

    let projectPage;

    beforeAll(() => {
        browser.get('https://staging.telescope.epam.com/health/board');
        projectPage = new ProjectPage();
    });

    it('should verify customer header', () => {
        browser.wait(protractor.ExpectedConditions.titleContains('Health board - DHM'), 10000);
        projectPage.clickCell(CUSTOMER);
        expect(projectPage.customerHeader.getText()).toEqual(CUSTOMER);
    });

    it('should display overview and in numbers boards', () => {
        expect(projectPage.overviewBoard.isPresent()).toBe(true);
        expect(projectPage.inNumbersBoard.isPresent()).toBe(true);
    });

    it('should verify project header', () => {
        projectPage.clickCell(PROJECT);
        expect(projectPage.customerHeader.getText()).toEqual(PROJECT);
    });

    it('should verify summary modal window is present', () => {
        browser.wait(protractor.ExpectedConditions.presenceOf(projectPage.statusContainer), 10000);
        projectPage.readMoreButton.click();
        expect(projectPage.modalSummary.isPresent()).toBe(true);
    });

});