public class Queenconf {

    public final Config config = new Config();


    public class Config {
        public class Admin {
  public final String adminPageIconName = "user"; // name of icon for admin page
        }

        public final Admin admin = new Admin();

  public final boolean showExtraHeader = extra; // show extra header
  public final int rowsPerPage = 5; // how many rows per page are shown
  public final boolean userMenuVisible = false; // the user menu should be shown or hidden
  public final boolean showBlackFridayBanner = false; // show black friday banner
    }

}

