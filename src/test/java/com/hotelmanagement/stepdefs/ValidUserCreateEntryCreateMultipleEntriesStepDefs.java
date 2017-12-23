package com.hotelmanagement.stepdefs;

import com.hotelmanagement.pages.LandingPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class ValidUserCreateEntryCreateMultipleEntriesStepDefs {

    LandingPage lp = new LandingPage();

    @Given("^I navigate to the \"([^\"]*)\" application in browser$")
    public void i_navigate_to_the_application_in_browser(String arg1) throws Throwable {
       lp.navigateToLandingPage();
    }

    @Given("^I want to see the application is loaded in browser by verifying the essential elements on the page$")
    public void i_want_to_see_the_application_is_loaded_in_browser_by_verifying_the_essential_elements_on_the_page() throws Throwable {
        lp.landingPageMandatoryChecks();
    }

    @Given("^I click on Login link in the Menu bar$")
    public void i_click_on_Login_link_in_the_Menu_bar() throws Throwable {
        lp.clickLoginLink();
    }

    @Then("^I should see the login dialogue box with Username and password$")
    public void i_should_see_the_login_dialogue_box_with_Username_and_password() throws Throwable {
        lp.checkLoginAlertBoxIsPresent();
    }

    @When("^With out providing the credentials When I click the Login button in Login dialogue$")
    public void with_out_providing_the_credentials_When_I_click_the_Login_button_in_Login_dialogue() throws Throwable {
        lp.clickLoginButton();
    }

    @When("^I enter invalid \"([^\"]*)\" and \"([^\"]*)\" in the respective textfields and click login button$")
    public void i_enter_invalid_and_in_the_respective_textfields_and_click_login_button(String arg1, String arg2) throws Throwable {
        lp.enterCredentialsToLoginDialogue("ad","pd");
    }


    @When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\" in the respective textfields and click login button$")
    public void i_enter_valid_and_in_the_respective_textfields_and_click_login_button(String arg1, String arg2) throws Throwable {
        lp.enterCredentialsToLoginDialogue("admin","password");
    }

    @Then("^I should enter into the application$")
    public void i_should_enter_into_the_application() throws Throwable {
        lp.validUserEntry();
        lp.closeBrowserInstance();
    }


    /**
     *
     * Step defs for Create an entry feature
     */
    @Given("^I should see the place holders for \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_should_see_the_place_holders_for_and(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        lp.checkElementsAfterSuccessfulLogging();
    }

    @When("^I entered data for the relevant text fields and click on create button$")
    public void i_entered_data_for_the_relevant_text_fields_and_click_on_create_button() throws Throwable {
        lp.createHotelRecord();
    }

    @Then("^I should see the record successfully added to the table$")
    public void i_should_see_the_record_successfully_added_to_the_table() throws Throwable {
        lp.verifyNewAddedRecord();
        lp.closeBrowserInstance();
    }

    

    
    
    /**
     * Step defs for creation of multiple entries stepdefs
     */

    @Given("^I should see the place holders to \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_should_see_the_place_holders_to_and(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        lp.checkElementsAfterSuccessfulLogging();
    }
    @When("^I entered data for \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" and click on create button to create multiple entries$")
    public void i_entered_data_for_and_and_click_on_create_button_to_create_multiple_entries(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        lp.createMultipleRecords(arg1,arg2,arg3,arg4,arg5);
    }
    @Then("^I should see the records successfully added to the table$")
    public void i_should_see_the_records_successfully_added_to_the_table() throws Throwable {
        lp.verifyNewAddedRecord();
        lp.closeBrowserInstance();
    }

    /**
     * Steps defs for deletion of record
     */
    
	@Then("^I should see the record deleted$")
	public void iShouldSeeTheRecordDeleted() throws Throwable {
		
		lp.DeleteRecord();
	}




}
