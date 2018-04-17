require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require('fs');




var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

//all node argv
var arg1 = process.argv[2];
var arg2 = process.argv[3];

switch (arg1) {
  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    spotifyThisSong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}

function myTweets() {

console.log("my tweets wills display when i use the command my-tweets")





client.get("search/tweets", { q: "JudieT267", count: 1}, function(
  error,
  tweets,
  response
) {
  /// console.log(tweets.statuses.text);
  if(error) {

  console.log("ops")
  }
  else{
        for(var i = 0; i<tweets.length; i++){
        console.log("Created: " + tweets[i].created_at; + date.substring(0, 19))
        }
      }
});
}
function spotifyThisSong(){

console.log("my spotify will show up here when i use the command spotifyThisSong")

spotify
  .search({ type: "track", query: "All the Small Things", limit: 1 })
  .then(function(response) {
    console.log(JSON.stringify(response), null, 2);
  })
  .catch(function(err) {
    console.log(err);
  });

}



function movieThis() {
var queryUrl =
  "http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  
  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Released);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + "###");
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

    //        * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
    //  ```
  }
});

}


function doWhatItSays(){

    console.log("I don't know what this is =(")

}