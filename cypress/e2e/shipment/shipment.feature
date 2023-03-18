Feature: E2E shipment tests

    Scenario: Check there are 6 offers
        Given I visit allekurier.pl page
        When I enter the attributes for package
        When I click on Wyceń przesyłkę
        Then I check that there are 6 offers

    Scenario: Check courier companies include all attributes
        Given I visit allekurier.pl page
        When I enter the attributes for package
        When I click on Wyceń przesyłkę
        Then I check that courier companies include all attributes

    Scenario: Check that letter in courier envelope has the same attributes
        Given I visit allekurier.pl page
        When I enter the attributes for letter in courier envelope
        When I click on Wyceń przesyłkę
        Then I check that letter in courier envelope has the same attributes