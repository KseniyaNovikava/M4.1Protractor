const ProjectPage = require('./../pages/ProjectPage.js');

const CUSTOMER = 'Google',
    PROJECT = 'GOOG-BZPS',
    TITLE = 'Health board - DHM';

describe('Customer page components', function () {

    let projectPage,
        customerCell,
        projectCell;

    beforeAll(() => {
        browser.get('https://staging.telescope.epam.com/health/board');
        projectPage = new ProjectPage();
        customerCell = new Cell(CUSTOMER);
        projectCell = new Cell(PROJECT);
    });

    it('should verify customer header', () => {
        browser.wait(protractor.ExpectedConditions.titleContains(TITLE), 10000);
        customerCell.clickCell();
        expect(projectPage.customerHeader.getText()).toEqual(CUSTOMER);
    });

    it('should display overview and in numbers boards', () => {
        expect(projectPage.overviewBoard.isPresent()).toBe(true);
        expect(projectPage.inNumbersBoard.isPresent()).toBe(true);
    });

    it('should verify project header', () => {
        projectCell.clickCell();
        expect(projectPage.customerHeader.getText()).toEqual(PROJECT);
    });

    it('should verify summary modal window is present', () => {
        browser.wait(protractor.ExpectedConditions.presenceOf(projectPage.statusContainer), 10000);
        elementHelper.waitAndClick(projectPage.readMoreButton);
        expect(projectPage.modalSummary.isPresent()).toBe(true);
    });

});