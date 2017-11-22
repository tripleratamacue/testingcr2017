Feature: Login and Logout to TestingCR Web site -
  Just log in and log out validations

  Scenario: Register to TestingCR -
      Given I am register to the platform
      Then I should see a successful message

  Scenario: Log in to TestingCR -
      Given I'm logged in
      When I log out
      Then I should be at Login page