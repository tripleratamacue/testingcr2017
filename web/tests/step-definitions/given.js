var Signin = require('../entities/signin.js');
//var Signup = require('../entities/signup.js');

module.exports = function() {
    this.Given(/^I navigate to '([^"]*)'$/, function(url) {
        browser.url(url);
    });

    //log in as any user, or a default one predefine.
    this.Given(/^(?:I am logged|I'm logged|I log) in$/, function() {
        console.log("given");
        Signin.login(browser.options.email, browser.options.password);
    });

};


