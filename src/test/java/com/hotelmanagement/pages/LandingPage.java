package com.hotelmanagement.pages;

import com.gargoylesoftware.htmlunit.WebClient;
import com.hotelmanagement.config.Driver;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.awt.*;
import java.io.IOException;
import java.util.*;


public class LandingPage extends Driver {


    public LandingPage() {
        driver = getDriver();
        getPropertiesFile();
    }

    public void navigateToLandingPage() {

        String environmentToLoad = System.getProperty("environment", "local");

        switch (environmentToLoad.charAt(0)) {
            case 'l':
                driver.manage().deleteAllCookies();
                driver.navigate().to(objectProperties.getProperty(("localUrl")));

                break;
            case 'd':
                //for Dev envrionment
                break;
            case 'q':
                //for QA environment
                break;
        }

    }

    /**
     * Landing page mandatory checks
     */
    public void landingPageMandatoryChecks() {
        LandingPage.getPropertiesFile();
        driver.getTitle().equalsIgnoreCase(objectProperties.getProperty("LandingPageTitle"));
        driver.findElement(By.className("navbar-brand")).isDisplayed();
        String appTitle = driver.findElement(By.className("navbar-brand")).getText();
        Assert.assertEquals(appTitle, objectProperties.getProperty("LandingPageTitle"));
    }

    /**
     * Function used to click login link
     */
    public void clickLoginLink() {
        clickLink(objectProperties.getProperty("Login"));
    }

    /**
     *
     */
    public void clickLoginButton(){
        WebDriverWait wait = new WebDriverWait(driver, 4);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("doLogin")));
        findElement(By.id("doLogin")).click();;
    }

    /**
     * Function used to check whether the Alert box is present or not.
     * @return true or false
     */
    public boolean checkLoginAlertBoxIsPresent() {

        try {
            driver.switchTo().activeElement();
            String alertDialogueName = driver.switchTo().activeElement().getText();
            Assert.assertEquals(alertDialogueName, objectProperties.getProperty("Login"));
            return true;
        }catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    /**
     * Function used to enter the credentials for Login and password text fields of Alert Dialogue box
     * @param userName
     * @param password
     */

    public void enterCredentialsToLoginDialogue(String userName, String password){
        try {
           driver.switchTo().activeElement();
            WebDriverWait wait = new WebDriverWait(driver, 4);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(objectProperties.getProperty("Username"))));
            driver.findElement(By.id(objectProperties.getProperty("Username"))).clear();;
            driver.findElement(By.id(objectProperties.getProperty("Username"))).sendKeys(userName);
            driver.findElement(By.id(objectProperties.getProperty("Password"))).clear();
            driver.findElement(By.id(objectProperties.getProperty("Password"))).sendKeys(password);
            driver.findElement(By.id(objectProperties.getProperty("loginId"))).click();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * Function used to check the user is valid user or not a valid user, by basing on the credentials provided
     * @return true for valid users
     */
    public boolean  checkValidUser(){
        driver.switchTo().activeElement();
        String color  = driver.findElement(By.id("username")).getCssValue("border-bottom-color");
        if(color.equalsIgnoreCase("rgba(255, 0, 0, 1)")){
            //For Invalid User
            Assert.assertEquals("rgba(255, 0, 0, 1)",color);
        }
        else {
            Assert.assertEquals("rgba(51, 51, 51, 1)",color);
        }
        return true;
    }

    /**
     * Function used to check the logout link is displayed in the page
     * @return true when displays , false when not
     */
    public boolean validUserEntry(){
        WebDriverWait wait = new WebDriverWait(driver, 4);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("logout")));
        boolean adminUserEntry = findElement(By.id("logout")).isDisplayed();
        Assert.assertEquals(true,adminUserEntry);
        return true;
    }

    /**Function used to check the elements after successful logging
     *
     */
    public void checkElementsAfterSuccessfulLogging(){
        //WebDriverWait wait = new WebDriverWait(driver, 4);
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("hotelName")));

        /*String hotelNameLabel = findElement(By.xpath("/html/body/div/div[1]/div[1]/p")).getText();
        Assert.assertEquals(hotelNameLabel,"Hotel name");
        String addressLabel = findElement(By.xpath("/html/body/div/div[1]/div[2]/p")).getText();
        Assert.assertEquals(addressLabel,"Address");
        String ownerLabel = findElement(By.xpath("/html/body/div/div[1]/div[3]/p")).getText();
        Assert.assertEquals(ownerLabel,"Owner");
        String phoneNumberLabel = findElement(By.xpath("/html/body/div/div[1]/div[4]/p")).getText();
        Assert.assertEquals(phoneNumberLabel,"Phone number");
        String emailLabel = findElement(By.xpath("/html/body/div/div[1]/div[5]/p")).getText();
        Assert.assertEquals(emailLabel,"Email");*/

        findElement(By.id("hotelName")).isDisplayed();
        findElement(By.id("address")).isDisplayed();
        findElement(By.id("owner")).isDisplayed();
        findElement(By.id("phone")).isDisplayed();
        findElement(By.id("email")).isDisplayed();
        findElement(By.id("createHotel")).isDisplayed();
    }

    /**
     * Function used to create a single record
     */
    public void createHotelRecord(){
        findElement(By.id("hotelName")).clear();
        findElement(By.id("hotelName")).sendKeys("New Hotel Test");
        findElement(By.id(objectProperties.getProperty("Address"))).clear();
        findElement(By.id(objectProperties.getProperty("Address"))).sendKeys("London");
        findElement(By.id(objectProperties.getProperty("Owner"))).clear();
        findElement(By.id(objectProperties.getProperty("Owner"))).sendKeys("Surya");
        findElement(By.id(objectProperties.getProperty("Phone"))).clear();
        findElement(By.id(objectProperties.getProperty("Phone"))).sendKeys("0989654112");
        findElement(By.id(objectProperties.getProperty("Email"))).clear();
        findElement(By.id(objectProperties.getProperty("Email"))).sendKeys("test54321@gmail.com");
        findElement(By.id(objectProperties.getProperty("CreateHotel"))).click();
    }

    /**
     * Function used to send the test data to the relevant fields
     * @param hname
     * @param address
     * @param owner
     * @param phone
     * @param email
     */
    public void createMultipleRecords(String hname, String address, String owner, String phone, String email){
            findElement(By.id("hotelName")).clear();
            findElement(By.id("hotelName")).sendKeys(hname);
            findElement(By.id("address")).clear();
            findElement(By.id("address")).sendKeys(address);
            findElement(By.id("owner")).clear();
            findElement(By.id("owner")).sendKeys(owner);
            findElement(By.id("phone")).clear();
            findElement(By.id("phone")).sendKeys(phone);
            findElement(By.id("email")).clear();
            findElement(By.id("email")).sendKeys(email);
            findElement(By.id("createHotel")).click();
    }

    /**
     *Function used to verify the new record added"
     */
    public void verifyNewAddedRecord(){
        WebDriverWait wait = new WebDriverWait(driver, 4);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div[2]")));
        java.util.List<WebElement> recordList = new ArrayList<WebElement>();
        recordList = driver.findElements(By.cssSelector(" body > div > div > div.hotelRow"));
        System.out.println(recordList.size());
        //from here we will find out the last record added

    }
    
    /**
     *Function used to Delete the added record"
     */
    public void DeleteRecord(){
        findElement(By.xpath("//*[@class='glyphicon glyphicon-remove hotelDelete']")).click();
        System.out.println("Record Deleted succesfully");
    }
      
    
    
}

