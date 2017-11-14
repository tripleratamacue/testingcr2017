var Signin = require('../entities/global/signin.js');
var Onboarding = require('../entities/parent/onboarding.js');
var Application = require('../entities/parent/application.js');
var ReEnrollment = require('../entities/parent/reEnrollment.js');
var Registration = require('../entities/parent/registration.js');
var Reports = require('../entities/superAdmin/reports/reports.js');
var Menu = require('../entities/global/menu.js');
var Settings = require('../entities/superAdmin/settings/accounts/accountManager.js');
var AccountManager = require('../entities/superAdmin/settings/accounts/accountManager.js');


module.exports = function() {

    this.When(/^I log out$/, function() {
            Signin.logout();
    });
    this.When(/^I click on New Student$/, function() {
        Onboarding.clickNewStudentButton();
    });
    this.When(/^I add a parent$/, function() {
        Onboarding.addParent();
    }); 
    // this.When(/^I add a parent with ([^"]*) ([^"]*) ([^"]*) ([^"]*)$/,
    //  function(relationship, parentName, parentLastName, homeAddress) {
    //     console.log("*********" + relationship);
    //     Onboarding.addParent(relationship, parentName, parentLastName, homeAddress);
    // });  

    // this.When(/^I add a parent with ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*) ([^"]*)$/,
    //  function(relationship, parentName, parentLastName, homeAddress, street2,
 			// 	city, state, zipCode, mobilePhone, homePhone, workPhone, contactPreference) {
    //     console.log("*********" + relationship);
    //     Onboarding.addParent(relationship, parentName, parentLastName, homeAddress, street2,
 			// 	city, state, zipCode, mobilePhone, homePhone, workPhone, contactPreference);
    // });

    this.When(/^I add a student$/, function() {
            Onboarding.addStudent();
    });
    this.When(/^I add a existing student$/, function() {
            Onboarding.addStudentUsingAccessCode();
    });    
    this.When(/^I complete an application$/, function() {
            Application.completeApplication();
    });  
    this.When(/^I complete a registration$/, function() {
            Registration.completeRegistration();
    });  
    this.When(/^I complete a reEnrollment$/, function() {
            ReEnrollment.completeReEnrollment();
    });
    this.When(/^I test all Report options$/, function() {
            Reports.runAll();
    }); 
    this.When(/^I test all custom reports$/, function() {
            Reports.customReports();
    }); 
    this.When(/^I test all interested families$/, function() {
            Reports.interestedFamilies();
    }); 
    // this.When(/^I navigate to settings$/, function() {
    //         Menu.settingsButton();
    // }); 
    // this.When(/^I navigate to user-settings$/, function() {
    //         Settings.();
    // }); 
   this.When(/^I create a SuperAdmin$/, function() {
            AccountManager.addAndDeleteSuperAdmin();
    }); 


};
