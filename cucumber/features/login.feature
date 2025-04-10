@smoke
Feature: The Internet Guinea Pig Website
  @beforeAll @afterAll
  Scenario: As a user, I can log into the secure area
    Given I am on the main page
    When I login with Admin and admin123
    Then I should see a flash message saying Dashboard