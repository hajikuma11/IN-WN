const spreadsheet = SpreadsheetApp.openById('1mhhPptM-czxLqlbdJ0qEnsLNEMFdgAGOAdxRkQUq3WE');
const title = spreadsheet.getSheetByName('title');
const lastModCell = "B1";
const titleCell = "C1";

function setData(range,data) {
  title.getRange(range).setValue(data);
}

function setTitleData(dataObj) {
  setData(lastModCell,dataObj["lastModified"]);
  setData(titleCell,dataObj["title"]);
}

function compare(dataObj) {
  const titleData = title.getRange(titleCell).getValues();
  const sheetTitle = titleData[0].toString();

  return sheetTitle == dataObj["title"];
}

