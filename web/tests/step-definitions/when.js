var Login = require('../page-objects/login.js');

module.exports = function() {

    this.When(/^I log out$/, function() {
        Login.logout();
    });
};
