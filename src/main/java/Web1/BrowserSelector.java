package Web1;

import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserSelector extends Utils {

    public void OpenBrowser(){
        System.setProperty("Webdriver.chromedriver","src\\test\\resources\\BrowserDriver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://www.demo.guru99.com/V4/");
    }
}
