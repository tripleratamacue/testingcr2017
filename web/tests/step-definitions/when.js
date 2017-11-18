var Signin = require('../entities/signin.js');

module.exports = function() {

    this.When(/^I log out$/, function() {
            Signin.logout();
    });
};
