@HMP-003
Feature: This feature explains the creation of multiple records

    Background:
        Given I navigate to the "Hotel Management Platform" application in browser
        And I want to see the application is loaded in browser by verifying the essential elements on the page
        And I click on Login link in the Menu bar
        When I enter valid "username" and "password" in the respective textfields and click login button

    Scenario Outline: As an admin user after successful login i can able to create multiple records in Hotel Management Platform Application
       Given I should see the place holders to "HotelName", "address", "owner", "phoneNumber" and "email"
       When I entered data for "<Hotel Name>", "<Address>", "<Owner>", "<Phone Number>" and "<Email>" and click on create button to create multiple entries
       Then I should see the records successfully added to the table
      Examples:
        |Hotel Name  | Address | Owner | Phone Number | Email |
        | Test Name1    | Address1  | Owner1|0987654321   |test123@gmail.com|
        | Test Name2    | Address2  | Owner2|0989654123   |test321@gmail.com|
    

