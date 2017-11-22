var Login = require('../page-objects/login.js');
var Register = require('../page-objects/register.js');

module.exports = function() {
    this.Given(/^I navigate to '([^"]*)'$/, function(url) {
        browser.url(url);
    });
    this.Given(/^(?:I am register|I'm register|I register) to the platform$/, function() {
        Register.register(browser.options.email, browser.options.password);
    });
    this.Given(/^(?:I am logged|I'm logged|I log) in$/, function() {
        Login.login(browser.options.email, browser.options.password);
    });
};


