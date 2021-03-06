//BaseClass to have all common libraries that may be useful.
//all clasess are children of this, update this class carefully may mess
//lots of methods relaying on this implementation.

//https://github.com/ckknight/random-js
var RANDOM = require('random-js')(); // uses the nativeMath engine

//https://github.com/marak/Faker.js/
var FAKER = require('faker');

function BaseClass () {
    this.title = 'Testing CR 2017';
}

BaseClass.prototype.click = function (selector, value) {
    browser.waitForEnabled(selector, browser.options.globalDelay);   
    browser.waitForVisible(selector, browser.options.globalDelay);   
    $(selector).click(value);
}
BaseClass.prototype.setValue = function (selector, value) {
    browser.waitForEnabled(selector, browser.options.globalDelay);   
    browser.waitForVisible(selector, browser.options.globalDelay); 
    // console.log(selector);  
    // console.log(value);      
    $(selector).setValue(value);
}
//METHODS FOR FAKE GENERATOR LIBRARY
/**
 * fakeName
 * @summary returns a fake name, using faker lib
 */
BaseClass.prototype.fakeName = function () {
    return FAKER.name.firstName();
}
BaseClass.prototype.fakeLastName = function () {
    return FAKER.name.lastName();
}
module.exports = new BaseClass()
