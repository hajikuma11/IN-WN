const spreadsheet = SpreadsheetApp.openById('1mhhPptM-czxLqlbdJ0qEnsLNEMFdgAGOAdxRkQUq3WE');
const title = spreadsheet.getSheetByName('title');

function setData(range,data) {
  title.getRange(range).setValue(data);
}

function setTitleData(dataObj) {
  setData("A1",dataObj["lastModified"]);
  setData("B1",dataObj["title"]);
}

function compare(dataObj) {
  const titleData = title.getRange("B1").getValues();
  const sheetTitle = titleData[0].toString();

  return sheetTitle == dataObj["title"];
}

