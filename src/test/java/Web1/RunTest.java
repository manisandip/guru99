package Web1;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features =".",tags = "@login", plugin = {"pretty","html:target/Destination"})

public class RunTest {




}
