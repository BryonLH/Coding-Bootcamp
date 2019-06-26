// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
  apiKey: "AIzaSyDzt9DrHoa3GVPzhtZwe8hLdz99gpm94Uw",
  authDomain: "project-34a27.firebaseapp.com",
  databaseURL: "https://project-34a27.firebaseio.com",
  projectId: "project-34a27",
  storageBucket: "",
  messagingSenderId: "830597988730",
  appId: "1:830597988730:web:4a46215ae1968ee6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice = snapshot.val().highBidder;
    highBidder = Number(snapshot.val().highPrice);


    // Change the HTML to reflect the stored values

    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text(snapshot.val().highPrice);

    // Print the data to the console.

    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(initialBid);
    $("#highest-price").text(initialBidder);

    // Print the data to the console.
    console.log(initialBid);
    console.log(initialBidder);

  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val();
  var bidderPrice = $("#bidder-price").val();


  // Log the Bidder and Price (Even if not the highest)
  console.log(bidderName);
  console.log(bidderPrice);

  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      bidderName: bidderName,
      bidderPrice: bidderPrice
    });

    // Log the new High Price
    // console.log(snapshot.val().bidderPrice);

    // Store the new high price and bidder name as a local variable
    // highBidder = snapshot.val().highBidder;
    // highPrice = snapshot.val().highPrice;


    // // Change the HTML to reflect the new high price and bidder
    // $("#highest-bidder").text(highBidder);
    // $("#highest-price").text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
