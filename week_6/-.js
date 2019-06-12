<!-- Coin Flip HTML -->
<!DOCTYPE html>

<html lang="en-us">

  <head>

    <meta charset="UTF-8">
    <title>Coin Flipper</title>

  </head>

  <body>

    <!-- The html is done for us. -->
    <h1>Flip A Coin!</h1>
    <h2>Guess Heads or Tails:</h2>

    <button id="heads">Heads</button>
    <button id="tails">Tails</button>

    <br>

    <div> You guessed:
      <span id="guess"></span>
    </div>

    <br>

    <div id="coin-image"></div>

    <div id="win-lose"></div>

    <div id="win-loss-tracker">

      <div>
        <h3>Wins: </h3>
        <span id="wins"></span>
      </div>

      <div>
        <h3>Losses: </h3>
        <span id="losses"></span>
      </div>

      <div>
        <h3>Heads chosen: </h3>
        <span id="heads-chosen"></span>
      </div>

      <div>
        <h3>Tails chosen: </h3>
        <span id="tails-chosen"></span>
      </div>

    </div>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <script type="text/javascript">

    // Coin Flip JavaScript
    // These variables are declared for us.
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;

    function flipThatCoin(result) {

      //  STEP ONE:

      //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
      var randomNumber = Math.floor(Math.random() * 2);
      //  STEP TWO:

      //  If randomNumber is equal to zero then:
      if (randomNumber === 0) {
        //  Find the div with an id of coin-image.
        //  Replace its html with an img tag containing this image:
        //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
        $('#coin-image').html($('<img>').attr('src', 'http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'))
      }// Else:
      else {
        //  Find the div with an id of coin-image.
        //  Replace its html with an img tag containing this image:
        //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
        var img = $('<img>').attr('src', 'http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg')
        $('#coin-image').html(img);
      }
      //  STEP THREE:

      // If result is equal to randomNumber, do the following:
      if (result === randomNumber) {
        //  Increment wins by one.
        wins++;
        //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
        $('#win-lose').html($('<h2>Winner</h2>'));
        //  Find the div with an id of wins. Update it with the value of the wins variable.
        $('#wins').html(wins);
      }
      else {
        //  Increment wins by one.
        losses++;
        //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
        $('#win-lose').html($('<h2>LOSER!</h2>'));
        //  Find the div with an id of wins. Update it with the value of the wins variable.
        $('#losses').html(losses);
      }
    }

    // This on click function has been completed for us.
    $("#heads").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });

    $("#tails").on("click", function() {
      tailsCount++;
      $("#tails-chosen").text(tailsCount);
      $("#guess").html("<b>Tails</b>");
      flipThatCoin(1);
    });

    </script>

  </body>

</html>
