@HMP-002
Feature: This feature explains the user record Deletion procedure

    Background:
        Given I navigate to the "Hotel Management Platform" application in browser
        And I want to see the application is loaded in browser by verifying the essential elements on the page
        And I click on Login link in the Menu bar
        When I enter valid "username" and "password" in the respective textfields and click login button

    Scenario: As an admin user after successful login i can able to create the record in Hotel Management Platform Application
       Given I should see the place holders for "Hotel Name", "Address", "Owner", "Phone Number" and "Email"
       When I entered data for the relevant text fields and click on create button
       Then I should see the record successfully added to the table
       Then I should see the record deleted

    

