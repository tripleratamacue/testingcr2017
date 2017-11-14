var Signin = require('../entities/signin.js');
//var Signup = require('../entities/signup.js');


module.exports = function() {
    this.Given(/^I navigate to '([^"]*)'$/, function(url) {
        browser.url(url);
    });
    //log in as any user, or a default one predefine.
    //this.Given(/^I am logged in$/, function() {
    this.Given(/^(?:I am logged|I'm logged|I log) in as admin$/, function() {
        Signin.login(browser.options.adminEmail, browser.options.password);
        Signin.isAdminLoggedIn();
    });

};
