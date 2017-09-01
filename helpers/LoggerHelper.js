const log4js = require('log4js');
const date = new Date();
const time = date.getFullYear() + "-" + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "_" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();

log4js.configure({
    appenders: {
        file: {type: 'file', filename: './log/' + time + '.log'},
        console: {type: 'console'}
    },
    categories: {default: {appenders: ['file', 'console'], level: 'info'}}
});

module.exports = class LoggerHelper {

    constructor() {
        this.logger = log4js.getLogger();
        this.logger.level = 'debug';
    }

    info(log) {
        browser.controlFlow().execute(() => this.logger.info(log));
    }

    debug(log) {
        browser.controlFlow().execute(() => this.logger.debug(log));
    }

    warn(log) {
        browser.controlFlow().execute(() => this.logger.warn(log));
    }

    error(log) {
        browser.controlFlow().execute(() => this.logger.error(log));
    }

}

