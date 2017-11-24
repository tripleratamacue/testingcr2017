// Login Page Object
var BaseClass = require('./baseClass.js');

var Login = Object.create(BaseClass, {

pagePath:   { get: function () { return '/login'; } },
/*
* Atributes: define elements and selectors.
*/
usernameBox:        { get: function () { return '#inputUsername'; } },
passwordBox:        { get: function () { return '#inputPassword'; } },
signInButton:       { get: function () { return '.btn.btn-primary'; } },
//advance CSS
registerLink:       { get: function () { return 'a[href="/register"]'; } },
alertDiv:           { get: function () { return '.alert.alert-success'; } },


logoutLink:           { get: function () { return '.col-md-6.col-md-offset-3>p>a'; } },



/*
* Methods: define or overwrite page methods.
*/
/**
 * login
 *
 * @summary Logs in to system with user and password parameters
 */
login: { value: function(user, password) {
    console.log('***Logging in email: ' + tiza.yellow(user) + ' and password: ' + tiza.yellow(password));
    browser.waitForVisible(this.usernameBox, browser.options.globalDelay);    
    this.setValue(this.usernameBox, user);
    this.setValue(this.passwordBox, password);
    this.click(this.signInButton);
    //brower.screenshot();
    browser.pause(50000);
    browser.waitForVisible(this.logoutLink, browser.options.globalDelay);    
}},
logout: { value: function() {
    console.log(tiza.yellow('***Logging out***'));
    browser.waitForVisible(this.logoutLink, browser.options.globalDelay);    
    this.click(this.logoutLink);
    browser.waitForVisible(this.usernameBox, browser.options.globalDelay);
}}

});
module.exports = Login
