<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '257817126-Qq1oFJsWuSLwCDUMp2fnJYtlnty1IDdoRZ8bdtmp';
$oauth_access_token_secret = 'FRwWE1DpzBMy3ZdWRQR2Za5lV8o7pGksP9JVRiW2gMaOw';
$consumer_key = 'SfOylKPgHL1Efjako9KoRCmys';
$consumer_secret = 'A1iBuHEGf1lP7Ao81a9hS66kwLnP0bfitKma4YosSKSbNCcfzA';
$user_id = '257817126';
$screen_name = 'liquidhbox';
$count = 20;

$twitter_url = 'statuses/user_timeline.json';
$twitter_url .= '?user_id=' . $user_id;
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
    $oauth_access_token,         // 'Access token' on https://apps.twitter.com
    $oauth_access_token_secret,  // 'Access token secret' on https://apps.twitter.com
    $consumer_key,               // 'API key' on https://apps.twitter.com
    $consumer_secret,            // 'API secret' on https://apps.twitter.com
    $user_id,                    // User id (http://gettwitterid.com/)
    $screen_name,                // Twitter handle
    $count                       // The number of tweets to pull out
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>