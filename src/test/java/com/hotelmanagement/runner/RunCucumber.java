package com.hotelmanagement.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            format = {"pretty","html:cucumber-html-reports",
                    "json: cucumber-html-reports/cucumber.json"},
            features = {"src/test/resources/features"},
            glue = {"com.hotelmanagement.stepdefs"},
            tags = {"~@HMP-001,~@HMP-002,@HMP-003"}
            
    )
    public class RunCucumber {

    }


