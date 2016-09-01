console.log("script sourced");

var searchResults = [];

$(document).ready(function(){
  //console.log('doc ready');
  //make onclick function
  $('#searchButton').on('click', function(){
    //console.log('in button click');
    //make variable for search input
    var movieName = $('#movieNameIn').val();
    //console.log('searching for:', movieName);
    //create search URL
    var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
    //console.log('search URL:', searchURL);
    //use ajax to call for the search:
    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function(data){
        console.log('ajax success data: ' , data.Search);
        searchResults = data.Search;
        console.log(searchResults);

        displayMovies(searchResults);
      }
      //console.log(searchResults);

    }); //end AJAX search
  });//end click function


});//end doc ready

var displayMovies = function (listOfMovies) {
  console.log('in displayMovies');
  console.log(listOfMovies);
  //clear display
  $('#movieList').html('');

  for (var i = 0; i < listOfMovies.length; i++) {
    $('#movieList').append(listOfMovies[i].Title + " " + listOfMovies[i].Year + "<br>");
    if (listOfMovies[i].Poster != "N/A"){
    $('#movieList').append("<img src='" + listOfMovies[i].Poster + "'>" + "<br>");
    }

  
  }


};
