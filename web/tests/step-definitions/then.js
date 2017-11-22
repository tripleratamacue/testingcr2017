var Login = require('../page-objects/login.js');

module.exports = function() {

    this.Then(/^I should see a successful message$/, function() {
		expect($(Login.alertDiv).getText(), 
		"Registration failed").equal("Registration successful");
	});
    this.Then(/^I should be at Login page$/, function() {
		expect(browser.getUrl(),
		"URL is not at Login page").contains(Login.pagePath);		
    });	
};