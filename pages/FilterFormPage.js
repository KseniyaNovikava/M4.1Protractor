const format = require('string-format');
const Page = require('./Page.js');

const FILTER = '[ng-model="filterOptions.{}"] .dhm-dropdown-field__caret';
const FILTER_OPTIONS = '[ng-model="filterOptions.{}"] li.filtersOptionsList__option[role="button"]';

module.exports = class FilterFormPage extends Page {

    constructor() {

        super();
        this.filtersForm = element(by.id("advanced-filters"));
        this.clearFilters = element(by.css('[ng-click="resetFilters()"]'));
        this.checked = element.all(by.css(".fa.fa-check"));

    }

    clearAllOptions(options) {
        options.each(function (option) {
            option.click();

        });
    };

    filter(field, ...params) {
        let fileterField = element(by.css(format(FILTER, field)));
        let options = element.all(by.css(format(FILTER_OPTIONS, field)));
        const log = `filter by ${params} ${field} : ${element.locator()}`;
        logger.debug(log);

        super.waitAndClick(fileterField);
        this.clearAllOptions(options);
        params.forEach((param) => {
            options.get(param).click();
        });

    };
}