Feature: Login and Logout to TestingCR Web site -
  Just log in and log out validations

  Scenario: Log in to TestingCR -
       Given I am logged
       When I log out
       Then I should be at Login page
