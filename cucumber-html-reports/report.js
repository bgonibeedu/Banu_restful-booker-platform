$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HMP-001-CreatAnEntry.feature");
formatter.feature({
  "line": 2,
  "name": "This feature explains the user record creation procedure",
  "description": "",
  "id": "this-feature-explains-the-user-record-creation-procedure",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HMP-001"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \"Hotel Management Platform\" application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to see the application is loaded in browser by verifying the essential elements on the page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link in the Menu bar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"username\" and \"password\" in the respective textfields and click login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Management Platform",
      "offset": 19
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_navigate_to_the_application_in_browser(String)"
});
formatter.result({
  "duration": 6872898521,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_want_to_see_the_application_is_loaded_in_browser_by_verifying_the_essential_elements_on_the_page()"
});
formatter.result({
  "duration": 154681496,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_click_on_Login_link_in_the_Menu_bar()"
});
formatter.result({
  "duration": 143785706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_enter_valid_and_in_the_respective_textfields_and_click_login_button(String,String)"
});
formatter.result({
  "duration": 994319415,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As an admin user after successful login i can able to create the record in Hotel Management Platform Application",
  "description": "",
  "id": "this-feature-explains-the-user-record-creation-procedure;as-an-admin-user-after-successful-login-i-can-able-to-create-the-record-in-hotel-management-platform-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I should see the place holders for \"Hotel Name\", \"Address\", \"Owner\", \"Phone Number\" and \"Email\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I entered data for the relevant text fields and click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the record successfully added to the table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Name",
      "offset": 36
    },
    {
      "val": "Address",
      "offset": 50
    },
    {
      "val": "Owner",
      "offset": 61
    },
    {
      "val": "Phone Number",
      "offset": 70
    },
    {
      "val": "Email",
      "offset": 89
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_place_holders_for_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 603872864,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_entered_data_for_the_relevant_text_fields_and_click_on_create_button()"
});
formatter.result({
  "duration": 659308255,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_record_successfully_added_to_the_table()"
});
formatter.result({
  "duration": 400117255,
  "status": "passed"
});
formatter.uri("HMP-002-DeleteAnEntry.feature");
formatter.feature({
  "line": 2,
  "name": "This feature explains the user record Deletion procedure",
  "description": "",
  "id": "this-feature-explains-the-user-record-deletion-procedure",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HMP-002"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \"Hotel Management Platform\" application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to see the application is loaded in browser by verifying the essential elements on the page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link in the Menu bar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"username\" and \"password\" in the respective textfields and click login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Management Platform",
      "offset": 19
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_navigate_to_the_application_in_browser(String)"
});
formatter.result({
  "duration": 5150993993,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_want_to_see_the_application_is_loaded_in_browser_by_verifying_the_essential_elements_on_the_page()"
});
formatter.result({
  "duration": 147863134,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_click_on_Login_link_in_the_Menu_bar()"
});
formatter.result({
  "duration": 134781075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_enter_valid_and_in_the_respective_textfields_and_click_login_button(String,String)"
});
formatter.result({
  "duration": 962928637,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As an admin user after successful login i can able to create the record in Hotel Management Platform Application",
  "description": "",
  "id": "this-feature-explains-the-user-record-deletion-procedure;as-an-admin-user-after-successful-login-i-can-able-to-create-the-record-in-hotel-management-platform-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I should see the place holders for \"Hotel Name\", \"Address\", \"Owner\", \"Phone Number\" and \"Email\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I entered data for the relevant text fields and click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the record successfully added to the table",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the record deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Name",
      "offset": 36
    },
    {
      "val": "Address",
      "offset": 50
    },
    {
      "val": "Owner",
      "offset": 61
    },
    {
      "val": "Phone Number",
      "offset": 70
    },
    {
      "val": "Email",
      "offset": 89
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_place_holders_for_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 539224645,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_entered_data_for_the_relevant_text_fields_and_click_on_create_button()"
});
formatter.result({
  "duration": 663515658,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_record_successfully_added_to_the_table()"
});
formatter.result({
  "duration": 423083351,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.iShouldSeeTheRecordDeleted()"
});
formatter.result({
  "duration": 89896585,
  "status": "passed"
});
formatter.uri("HMP-003-CreationOfMultipleEntries.feature");
formatter.feature({
  "line": 2,
  "name": "This feature explains the creation of multiple records",
  "description": "",
  "id": "this-feature-explains-the-creation-of-multiple-records",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HMP-003"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "As an admin user after successful login i can able to create multiple records in Hotel Management Platform Application",
  "description": "",
  "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I should see the place holders to \"HotelName\", \"address\", \"owner\", \"phoneNumber\" and \"email\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I entered data for \"\u003cHotel Name\u003e\", \"\u003cAddress\u003e\", \"\u003cOwner\u003e\", \"\u003cPhone Number\u003e\" and \"\u003cEmail\u003e\" and click on create button to create multiple entries",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the records successfully added to the table",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;",
  "rows": [
    {
      "cells": [
        "Hotel Name",
        "Address",
        "Owner",
        "Phone Number",
        "Email"
      ],
      "line": 15,
      "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;;1"
    },
    {
      "cells": [
        "Test Name1",
        "Address1",
        "Owner1",
        "0987654321",
        "test123@gmail.com"
      ],
      "line": 16,
      "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;;2"
    },
    {
      "cells": [
        "Test Name2",
        "Address2",
        "Owner2",
        "0989654123",
        "test321@gmail.com"
      ],
      "line": 17,
      "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \"Hotel Management Platform\" application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to see the application is loaded in browser by verifying the essential elements on the page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link in the Menu bar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"username\" and \"password\" in the respective textfields and click login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Management Platform",
      "offset": 19
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_navigate_to_the_application_in_browser(String)"
});
formatter.result({
  "duration": 5277916510,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_want_to_see_the_application_is_loaded_in_browser_by_verifying_the_essential_elements_on_the_page()"
});
formatter.result({
  "duration": 116767071,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_click_on_Login_link_in_the_Menu_bar()"
});
formatter.result({
  "duration": 137103245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_enter_valid_and_in_the_respective_textfields_and_click_login_button(String,String)"
});
formatter.result({
  "duration": 1030656754,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As an admin user after successful login i can able to create multiple records in Hotel Management Platform Application",
  "description": "",
  "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HMP-003"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I should see the place holders to \"HotelName\", \"address\", \"owner\", \"phoneNumber\" and \"email\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I entered data for \"Test Name1\", \"Address1\", \"Owner1\", \"0987654321\" and \"test123@gmail.com\" and click on create button to create multiple entries",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the records successfully added to the table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HotelName",
      "offset": 35
    },
    {
      "val": "address",
      "offset": 48
    },
    {
      "val": "owner",
      "offset": 59
    },
    {
      "val": "phoneNumber",
      "offset": 68
    },
    {
      "val": "email",
      "offset": 86
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_place_holders_to_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 515172525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Name1",
      "offset": 20
    },
    {
      "val": "Address1",
      "offset": 34
    },
    {
      "val": "Owner1",
      "offset": 46
    },
    {
      "val": "0987654321",
      "offset": 56
    },
    {
      "val": "test123@gmail.com",
      "offset": 73
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_entered_data_for_and_and_click_on_create_button_to_create_multiple_entries(String,String,String,String,String)"
});
formatter.result({
  "duration": 663460744,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_records_successfully_added_to_the_table()"
});
formatter.result({
  "duration": 416598815,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \"Hotel Management Platform\" application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to see the application is loaded in browser by verifying the essential elements on the page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link in the Menu bar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"username\" and \"password\" in the respective textfields and click login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Management Platform",
      "offset": 19
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_navigate_to_the_application_in_browser(String)"
});
formatter.result({
  "duration": 5195517002,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_want_to_see_the_application_is_loaded_in_browser_by_verifying_the_essential_elements_on_the_page()"
});
formatter.result({
  "duration": 153017102,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_click_on_Login_link_in_the_Menu_bar()"
});
formatter.result({
  "duration": 143184422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_enter_valid_and_in_the_respective_textfields_and_click_login_button(String,String)"
});
formatter.result({
  "duration": 950968157,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As an admin user after successful login i can able to create multiple records in Hotel Management Platform Application",
  "description": "",
  "id": "this-feature-explains-the-creation-of-multiple-records;as-an-admin-user-after-successful-login-i-can-able-to-create-multiple-records-in-hotel-management-platform-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HMP-003"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I should see the place holders to \"HotelName\", \"address\", \"owner\", \"phoneNumber\" and \"email\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I entered data for \"Test Name2\", \"Address2\", \"Owner2\", \"0989654123\" and \"test321@gmail.com\" and click on create button to create multiple entries",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the records successfully added to the table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HotelName",
      "offset": 35
    },
    {
      "val": "address",
      "offset": 48
    },
    {
      "val": "owner",
      "offset": 59
    },
    {
      "val": "phoneNumber",
      "offset": 68
    },
    {
      "val": "email",
      "offset": 86
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_place_holders_to_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 566286342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Name2",
      "offset": 20
    },
    {
      "val": "Address2",
      "offset": 34
    },
    {
      "val": "Owner2",
      "offset": 46
    },
    {
      "val": "0989654123",
      "offset": 56
    },
    {
      "val": "test321@gmail.com",
      "offset": 73
    }
  ],
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_entered_data_for_and_and_click_on_create_button_to_create_multiple_entries(String,String,String,String,String)"
});
formatter.result({
  "duration": 675331150,
  "status": "passed"
});
formatter.match({
  "location": "ValidUserCreateEntryCreateMultipleEntriesStepDefs.i_should_see_the_records_successfully_added_to_the_table()"
});
formatter.result({
  "duration": 72288309,
  "status": "passed"
});
});