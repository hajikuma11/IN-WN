function scraping() {
  const html = UrlFetchApp.fetch('https://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/?%E6%96%B0%E7%9D%80%E6%83%85%E5%A0%B1').getContentText();
  const parser = Parser.data(html);

  const dataObj = {
    "title": parser.from('<h3 id="content_1_1">').to('<a').iterate() + '',
    "lastModified": parser.from('<div id="lastmodified">Last-modified: ').to('<span').iterate() + ''
  };

  return dataObj;
}