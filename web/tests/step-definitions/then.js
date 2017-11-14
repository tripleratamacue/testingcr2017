var Signup = require('../entities/global/signin.js');
var Header = require('../entities/global/header.js');
var FamilyProfile = require('../entities/parent/familyProfile.js');
var BaseClass = require('../entities/global/baseClass.js');


module.exports = function() {

    this.Then(/^I should be at Login page$/, function() {
    	//expect(browser.isVisible(Login.usernameBoxCSS), "Login Text box is not visible.").to.be.true;
    	expect(browser.isVisible(Header.logoutAnchor), 
    		"Log Out button is still visible.").to.be.false;
    });
    this.Then(/^I should be at Family Profile page$/, function() {
    	// expect(browser.isVisible(FamilyProfile.addGuardianButton), "Family Profile is not visible, "
    	// + "addGuardianButton: is the one not visible.").to.be.true;
    	expect(FamilyProfile.validatePage(), 
    		"Family Profile page is not visible.").to.be.true;
    });
    this.Then(/^I should see '([^"]*)' message$/, function(message) {    
        console.log(tiza.cyanBright(BaseClass.getFlashMessage()));
        expect(BaseClass.getFlashMessage(), 
        	"Flash message does not contains: " + message).contains(message);
    });
};
