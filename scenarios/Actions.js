const Cell = require('./../helpers/Cell.js');

const CUSTOMER = 'Google';

describe('Use WebDriver Actions', ()=> {

    let projectPage,
        googleCell;

    beforeAll(() => {
        browser.get('https://staging.telescope.epam.com/health/board');
        projectPage = pageFactory.getPage('project');
        googleCell = new Cell(CUSTOMER);
    });

    it('should verify project cell tooltip present', () => {
        googleCell.mouseMoveToCell();
        expect(googleCell.isPresentCellTip()).toBe(true);
    });

    it('should open customer page using global search and key.enter', () => {
        projectPage.waitAndClick(projectPage.searchInput);
        browser.actions().sendKeys(CUSTOMER,protractor.Key.ENTER).perform();
        expect(projectPage.customerHeader.getText()).toEqual(CUSTOMER);
    });

    it('should scroll to end of the page ', () => {
        projectPage.scrollToBottom();
        expect(projectPage.footer.isDisplayed()).toBe(true);
    });

    it('should highlight the element', () => {
        projectPage.highlightElement(projectPage.mapViewBtn);
    });

});