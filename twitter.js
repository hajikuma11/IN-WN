function tweet(text) {
  const eventName = 'TWEET_OITY'
  tweetByIfttt(eventName, text);
}
function tweetByIfttt(event,text) {
  const key = TWITTER_KEY;
  const url = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key;
  const data = {'value1':text};
  const headers = {
    "Content-Type": "application/json"
  };
  const options = {
    'method' : 'post',
    'headers' : headers,
    'payload' : JSON.stringify(data),
  };
  UrlFetchApp.fetch(url,options);
}