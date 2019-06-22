

$(document).ready(function(){



  $("#search").on("click", function(event) {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var recordsToRetrieve = $("#recordsToRetrieve").val();
    console.log(searchTerm);
    console.log(recordsToRetrieve);
  });
  


});