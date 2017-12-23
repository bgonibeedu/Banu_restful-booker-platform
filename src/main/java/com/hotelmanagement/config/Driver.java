package com.hotelmanagement.config;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


public class Driver {

    public static WebDriver driver;
    //Environment Variable to refer in shell script
    static String environmentType = System.getProperty("environment", "local");
    //Browser variable to refer in shell script
    static String browserType = System.getProperty("browser", "firefox");


    @Before
    protected static WebDriver getDriver() {
        driver = null;
        if (driver == null) {

            if ("local".equalsIgnoreCase(environmentType)) {
                /**
                 * Firefox Driver capabilities
                 */
                if ("firefox".equalsIgnoreCase(browserType)) {
                    DesiredCapabilities capability = DesiredCapabilities.firefox();
                    try {
                        driver = new FirefoxDriver(capability);
                        driver.manage().timeouts().implicitlyWait(20L, TimeUnit.SECONDS);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                /**
                 * Chromedriver Capabilites
                 */
                if ("chrome".equalsIgnoreCase(browserType)) {
                    DesiredCapabilities capability = DesiredCapabilities.chrome();
                    try {
                        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//browsers//chromedriver");
                        driver = new ChromeDriver(capability);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }

                /**
                 * Html UnitDriver
                 */
                if ("htmlunit".equalsIgnoreCase(browserType)) {
                    driver = new HtmlUnitDriver();
                }

            }

        }
        driver.manage().window().maximize();
        return driver;

    }

    @After
    public void closeBrowserInstance(){
        if(driver!=null)
            driver.close();
    }

    /**
     *Constructor call to load properties file
     */
    protected Driver() {
        getPropertiesFile();
    }


    /**
     * Object Repository properties file to handle the application configuration and elements of application
     */

    public static FileInputStream fis = null;
    public static Properties objectProperties = new Properties();

    public static void getPropertiesFile(){

        try{
            fis = new FileInputStream(System.getProperty("user.dir")+"//src//main//java//com//hotelmanagement//objectrepo//objectRepo.properties");
            objectProperties.load(fis);
        }catch (FileNotFoundException fne){

            System.out.println(fne.getMessage());

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    /**
     * A static function used to find the elements in different ways
     * @param by
     * @return element
     */
    public static WebElement findElement(By by){
        WebElement element = driver.findElement(by);
        return element;
    }

    /**
     * A static function used to find whether the element is present or not in the web page
     */
    public static boolean isElementVisible(String className) {
        try {
            driver.findElement(By.className(className)).isDisplayed();
            return true;

        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Reusable function to click the link, by providing the link name
     * @param linkname
     */
    public static void clickLink(String linkname){

        driver.findElement(By.linkText(linkname)).click();
    }


}
