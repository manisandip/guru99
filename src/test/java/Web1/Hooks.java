package Web1;

import org.junit.Before;

public class Hooks extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser(){
        browserSelector.OpenBrowser();
    }
}
