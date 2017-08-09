const FilterFormPage = require('./../pages/FilterFormPage.js');

const FILTER_OPTIONS = {
        GREEN: 0,
        AMBER: 1,
        RED: 2,
        NA: 3
    },

    FILTER_FIELDS = {
        DELIVERY_STATUS: 'deliveryStatus',
        STAFFING_STATUS: 'staffingStatus',
        FORECAST_STATUS: 'forecastStatus'
    };

describe('Filter projects', () => {

    let filterFormPage;

    beforeAll(() => {
        filterFormPage = pageFactory.getPage('filterForm');
    });

    beforeEach(() => {
        filterFormPage.openPage();
    });

    afterAll(() => {
        filterFormPage.clearSession();
    });

    it('should open filter', () => {
        browser.wait(protractor.ExpectedConditions.presenceOf(filterFormPage.filtersBtn), 10000);
        filterFormPage.filtersBtn.click();
        expect(filterFormPage.filtersForm.isPresent()).toBe(true);
    });

    describe('Filter by statuses', () => {

        beforeEach(() => {
            filterFormPage.filtersBtn.click();
        });

        afterEach(() => {
            filterFormPage.clearFilters.click();
        });

        it('should filter by delivery status', () => {
            filterFormPage.filter(FILTER_FIELDS.DELIVERY_STATUS, FILTER_OPTIONS.RED, FILTER_OPTIONS.AMBER);
            expect(filterFormPage.checked.get(FILTER_OPTIONS.RED).getAttribute('aria-hidden')).toBe('false');
            expect(filterFormPage.checked.get(FILTER_OPTIONS.AMBER).getAttribute('aria-hidden')).toBe('false');
        });

        it('should filter by staffing status', () => {
            filterFormPage.filter(FILTER_FIELDS.STAFFING_STATUS, FILTER_OPTIONS.GREEN);
            expect(filterFormPage.checked.get(FILTER_OPTIONS.GREEN).getAttribute('aria-hidden')).toBe('false');
        });

        it('should filter by forecast status', () => {
            filterFormPage.filter(FILTER_FIELDS.FORECAST_STATUS, FILTER_OPTIONS.AMBER);
            expect(filterFormPage.checked.get(FILTER_OPTIONS.AMBER).getAttribute('aria-hidden')).toBe('false');
        });

    });
});