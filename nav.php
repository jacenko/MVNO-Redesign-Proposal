<!--************************************
********                        ********
********     Header Section     ********
********                        ********
*************************************-->

<nav class="navbar navbar-inverse navbar-fixed-top navbar-export" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" rel="home" href="./index.php" title="Tracfone">
        <img style="max-width:130px; margin-top: -7px;"
             src="../img/logo.png">
      </a>
    </div><!--div.navbar-header-->

    <!--************************************
    ********                        ********
    ********      Navbar items      ********
    ********                        ********
    *************************************-->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a href="./index.php">Home</a></li>
        <li class="dropdown"><a href="#" data-toggle="dropdown" role="button">Why Tracfone <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Why Tracfone</a></li>
            <li><a href="#">Coverage</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="#" data-toggle="dropdown" role="button">Phones <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Shop Phones</a></li>
            <li><a href="#">Shop Bundles</a></li>
            <li><a href="#">Bring Your Own Phone</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="#" data-toggle="dropdown" role="button">Plans <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="./plans.html">View Options</a></li>
            <li><a href="http://www.tracfoneild.com/index.php">Long Distance</a></li>
            <li class="divider"></li>
            <li><a href="#">Buy Airtime from Phone</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="#" data-toggle="dropdown" role="button">My Tracfone <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#"><h4><span class="label label-success">Sign In</span></h4></a></li>
            <li><a href="#">Check Balance</a></li>
            <li class="divider"></li>
            <li><a href="#">Activate Phone</a></li>
            <li><a href="#">Add Balance</a></li>
            <li><a href="#">Find a Store</a></li>
          </ul>
        </li>
        <!-- Contact button opens #overlay div, 'support'->'contact us' opens contact page -->
        <li><a id="contact-button" href="#">Contact</a></li>
        <li class="dropdown"><a href="#" data-toggle="dropdown" role="button">Support <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">How To</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Community Support</a></li>
            <li class="divider"></li>
            <li><a href="http://www.tracfone.com/contact.jsp?task=contact">Contact Us</a></li>
          </ul>
        </li>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" id="search" placeholder="">
          </div>
          <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </form>
      </ul>
    </div><!--.collapse / .nav-collapse-->
  </div><!--div.container-->
</nav>

<script>
  var overlay = document.getElementById("overlay");

  document.getElementById("search").focus();

  // show hide overlay when clicking Contact in the navbar
  $("#contact-button").click(function (event) {
    overlay.style.visibility = (overlay.style.visibility === "visible") ? "hidden" : "visible";
    event.preventDefault();
  });

  // hide overlay when scrolling
  window.onscroll = function () {
    overlay.style.visibility = "hidden";
  };

  // if overlay is visible, hide it when clicking anything but the navbar or the overlay itself
  $("#no-nav").click(function (event) {
    if(overlay.style.visibility === "visible"){
      if($(event.target).is('#overlay')){
        overlay.style.visibility = "hidden";
      }
      event.preventDefault();
    }
  });

  // hide overlay when clicking the X glyphicon
  $("#x").click(function (event) {
    overlay.style.visibility = "hidden";
    event.preventDefault();
  });
</script>
