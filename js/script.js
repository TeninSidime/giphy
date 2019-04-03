// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var searchTerm = $("searchButton").val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(searchTerm);
    console.log(request_url);
  $.ajax({
      url: request_url,
      method: "GET",         
      success: function(response){
            console.log(response);
            var result = '<img src= "'+ response.data[0].images.original.url +'"/>';
            $(".gallery").html(result);
            
      } 
      
  });
 
  
});

