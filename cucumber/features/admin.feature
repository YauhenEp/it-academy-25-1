Feature: Admin

  Background:
    Given I am on the main page
    When I login with Admin and admin123

  Scenario: Add admin
    When I go to page by menu item "Admin"
    And I click on "Admin Page > Add Button" element
    And I select option "ESS" from dropdown "Admin Page > User Dropdown"
    And I click on "Admin Page > Status Dropdown" element
    And I click on "Admin Page > Enable Option" element
    And I fill field "//label[text()='Password']/..//following-sibling::div//*[@class='oxd-input oxd-input--active']" with text "Gena321!!"
    And I fill field "//label[text()='Confirm Password']/..//following-sibling::div//*[@class='oxd-input oxd-input--active']" with text "Gena321!!"
    And I fill field "//label[text()='Username']/..//following-sibling::div//*[@class='oxd-input oxd-input--active']" with text "Gena321"
    And I fill field "[placeholder='Type for hints...']" with text "Gena"