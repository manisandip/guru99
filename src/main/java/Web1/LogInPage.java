package Web1;

import org.openqa.selenium.By;

public class LogInPage extends Utils{

    private By _userId = By.xpath("//input[@name=\"uid\"]");
    private By _password =By.xpath("//input[@name=\"password\"]");

    public void userEntersDetails(String userid, String password) {
    EnterText(_userId,userid);
    EnterText(_password,password);
    }


}
