// Signin Page Object
var BaseClass = require('./baseClass.js');
// var Header = require('./header.js');
// var Modals = require('./modals.js');

var Signin = Object.create(BaseClass, {

/*
* Atributes: define elements and selectors.
*/
usernameBox:        { get: function () { return '#inputUsername'; } },
passwordBox:        { get: function () { return '#inputPassword'; } },
signInButton:       { get: function () { return '.btn.btn-primary'; } },
registerLink:       { get: function () { return 'a[href="/signup"]'; } },


/*
* Methods: define or overwrite page methods.
*/
/**
 * signup
 *
 * @summary Logs in to system with user and password parameters
 */
login: { value: function(user, password) {
    console.log('***Logging in email: ' + tiza.yellow(user) + ' and password: ' + tiza.yellow(password));
    this.setValue(this.usernameBox, user);
    this.setValue(this.passwordBox, password);
    this.click(this.signInButton);
    //this.wait(7);
}},
logout: { value: function() {
    console.log(tiza.yellow('***Logging out***'));
    this.waitForInvisible(Modals.loadingModal);
    console.log(tiza.yellow('***Logging out***'));    
    //this.wait(7);
    this.click(Header.accountNameDropDown);
    //this.wait(10);
    //this.wait(5);
    this.click(Header.logoutAnchor);
    //$(Header.logoutAnchor).click();
    //this.wait(5);
    console.log(tiza.yellow('***Logging out***'));
    browser.waitForVisible(this.usernameBox,browser.options.globalDelay);

}}

});
module.exports = Signin
