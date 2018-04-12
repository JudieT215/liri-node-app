require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");


// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

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

var params = { screen_name: "JudieT267" };
client.get('statuses/user_timeline', params, function(error, tweets, response) {

    console.log(tweets);
  })

}
function spotifyThisSong(){

console.log("my spotify will show up here when i use the command spotifyThisSong")

}

function movieThis() {

    console.log("this will make movie information show up")

}


function doWhatItSays(){

    console.log("I don't know what this is =(")

}