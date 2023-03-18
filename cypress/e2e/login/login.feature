Feature: E2E login tests

    Scenario: Check that form has all attributes
        Given I visit allekurier.pl page
        When I go to login form
        Then Check that form has all attributes

    Scenario: User login successful
        Given I visit allekurier.pl page
        When I try to log in with correct login
        Then I should be logged in

    Scenario: User login failed
        Given I visit allekurier.pl page
        When I try to log in with invalid login
        Then I should not be logged in

    Scenario: Test enter too short password and without e-mail
        Given I visit allekurier.pl page
        When I try to log in with too short password
        Then I should not log in without e-mail