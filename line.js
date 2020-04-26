function sendPostContent(content) {
  const NOTIFY_TOKEN = PropertiesService.getScriptProperties().getProperty("NOTIFY_TOKEN");
  const token = [LINE_NOTIFY_TOKEN];
  const options = {
    "method": "post",
    "payload" : {"message": content },
    "headers": {"Authorization": "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
