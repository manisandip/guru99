package Web1;

import org.openqa.selenium.By;

public class Utils extends BasePage {

    public static void EnterText(By by, String text)
    {
        driver.findElement(by).sendKeys(text);

    }
}
