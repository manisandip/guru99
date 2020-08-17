package Web1;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class MyStepdefs {
    LogInPage logInPage = new LogInPage();
    @Given("user is on the login page")
    public void userIsOnTheLoginPage() {
    }

    @When("user enters valid {string} and {string}")
    public void userEntersValidAnd(String userid, String password) throws IOException {
        logInPage.userEntersDetails(userid,password);

    }

    @Then("^user should be able to ligin successfully$")
    public void userShouldBeAbleToLoginSuccessfully() {
    }
}
