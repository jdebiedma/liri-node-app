//USE npm init FOR ALL YOUR FILES

//request-npm-demo
//enter, enter, enter, enter, 
//git repo: here you do git clone for whatever your project is
//keywords: lol
//author: your name
//license: GPL-2.0
//this okay? yes
//npm install --save request

var myTwitterKeys = require("./keys.js");

var consumerKey = myTwitterKeys.twitterKeys.consumer_key;
var consumerSecretKey = myTwitterKeys.twitterKeys.consumer_secret; 
var tokenKey =  myTwitterKeys.twitterKeys.access_token_key; 
var tokenSecret =  myTwitterKeys.twitterKeys.access_token_secret; 

var Twitter = require('twitter');
var spotify = require('spotify');

//var $ = require('jQuery');

var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecretKey,
  access_token_key: tokenKey,
  access_token_secret: tokenSecret
});

var command = process.argv[2];

var numTweets = 20;

if (command === "my-tweets") {

	var params = {screen_name: 'liquidhbox'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {

	  	console.log("Here are the past " + numTweets + " tweets from @" + tweets[0].user.screen_name + ":")

		console.log(" ");

	  	for (var i = 0; i < numTweets; i++) {

	  	
	  		console.log(tweets[i].created_at);
	  		console.log("	" + tweets[i].text);
	  		console.log(" ");
	  	}
	    
	  }
	});}

if (command === "spotify-this-song") {

	if (process.argv[3]) {

		var songName = process.argv[3];




		spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 
	 	
	 	console.log(data.tracks.items[0].name);
	 	console.log(data.tracks.items[0].preview_url); 
	    console.log(data.tracks.items[0].album.name); 
	    console.log(data.tracks.items[0].album.artists[0].name); 

	     
		});

	}

	else {

	spotify.lookup({ type: 'track', id: "0hrBpAOgrt8RXigk83LLNE" }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 
	 	console.log(data.name)
	 	console.log(data.preview_url)
	 	console.log(data.album.name)
	 	console.log(data.album.artists[0].name)

	     
		});
	}


}	
