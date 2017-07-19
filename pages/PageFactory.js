const FilterFormPage = require('./FilterFormPage'),
    Page = require('./Page'),
    ProjectPage = require('./ProjectPage');

const PAGE_OBJECTS = {
    'filterForm': FilterFormPage,
    'page': Page,
    'project': ProjectPage
}

module.exports = class PageFactory {

    constructor() {
        this.currentPage = 'undefined';
    }

    getPage(page) {
        if (!PAGE_OBJECTS[page]) {
            throw new Error('Wrong page name: ' + PAGE_OBJECTS[page]);
        }
        return this.currentPage = new PAGE_OBJECTS[page];
    };
}

