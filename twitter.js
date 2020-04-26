function tweet(text) {
  var eventName = 'TWEET_OITY'
  tweetByIfttt(eventName, text);
}
function tweetByIfttt(event,text) {
  var key = 'bIUgfQHumgxri26OiNFGfyxtU6W-e7fumsMXc16bp7X'
  var url = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key
  var data = {'value1':text};
  var headers = {
    "Content-Type": "application/json"
  };
  var options = {
    'method' : 'post',
    'headers' : headers,
    'payload' : JSON.stringify(data),
  };
  UrlFetchApp.fetch(url,options);
}