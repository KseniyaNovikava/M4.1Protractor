const ProjectPage = require('./../pages/ProjectPage.js');

const CUSTOMER = 'Google';

describe('Use WebDriver Actions', function () {

    let projectPage;

    beforeAll(() => {
        browser.get('https://staging.telescope.epam.com/health/board');
        projectPage = new ProjectPage();
    });

    it('should verify project cell tooltip present', () => {
        projectPage.mouseMoveToCell(CUSTOMER);
        expect(projectPage.getCustomerTipElement(CUSTOMER).isPresent()).toBe(true);
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