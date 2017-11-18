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

module.exports = new BaseClass()
