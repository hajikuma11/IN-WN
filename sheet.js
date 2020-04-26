const spreadsheet = SpreadsheetApp.openById('1mhhPptM-czxLqlbdJ0qEnsLNEMFdgAGOAdxRkQUq3WE');
const title = spreadsheet.getSheetByName('title');
const lastModCell = "B1";
const titleCell = "C1";
const amCell = "B2";
const pmCell = "B3";

function setData(range,data) {
  title.getRange(range).setValue(data);
}

function setTitleData(dataObj) {
  setData(lastModCell,dataObj["lastModified"]);
  setData(titleCell,dataObj["title"]);
}

function amSetBool(bool) {
  setData(amCell,bool);
}

function pmSetBool(bool) {
  setData(pmCell,bool);
}

function compareNow(dataObj) {
  const titleData = title.getRange(titleCell).getValues();
  const sheetTitle = titleData[0].toString();

  return sheetTitle == dataObj["title"];
}

function compare(value,cellRange) {
  const cellData = title.getRange(cellRange).getValues();
  const cellString = cellData[0].toString();

  return cellString == value;
}