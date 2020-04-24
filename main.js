function postContent() {
  var content = "\n\ntest";
  content += "\n\ntest"
  sendPostContent(content);
}

function sendPostContent(content) {
  var token = [NOTIFY_TOKEN];
  var options = {
    "method": "post",
    "payload" : {"message": content },
    "headers": {"Authorization": "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
