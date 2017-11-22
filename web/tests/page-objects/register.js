// Register Page Object
var BaseClass = require('./baseClass.js');
var Login = require('./login.js');

var Register = Object.create(BaseClass, {

pagePath:   { get: function () { return '/register'; } },
/*
* Atributes: define elements and selectors.
*/
firstNameBox:       { get: function () { return '#inputFirstName'; } },
lastNameBox:        { get: function () { return '#inputLastName'; } },
usernameBox:        { get: function () { return '#inputUsername'; } },
passwordBox:        { get: function () { return '#inputPassword'; } },
registerButton:     { get: function () { return '#buttonRegistrarse'; } },
cancelLink:         { get: function () { return '.btn.btn-link'; } },

/*
* Methods: define or overwrite page methods.
*/
/**
 * register
 *
 * @summary Register with random person details
 */
register: { value: function(user, password) {
    browser.waitForVisible(Login.registerLink, browser.options.globalDelay);    
    this.click(Login.registerLink);   
    browser.waitForVisible(this.firstNameBox, browser.options.globalDelay);        
    var name = this.fakeName();
    console.log('***Fake Name: ' + tiza.yellow(name));    
    this.setValue(this.firstNameBox, name);
    var lastName = this.fakeLastName();
    console.log('***Fake lastName: ' + tiza.yellow(lastName));    
    this.setValue(this.lastNameBox, lastName);    
    this.setValue(this.usernameBox, user);
    this.setValue(this.passwordBox, password);
    this.click(this.registerButton);
    browser.waitForVisible(Login.alertDiv, browser.options.globalDelay);
}}

});
module.exports = Register

