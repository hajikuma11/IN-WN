function func() {
  const scrapedObj = scraping();
  
  if (!compare(scrapedObj)) {
    let content = "\n\n[最新のコラム]\n" + scrapedObj["title"].replace(" ","\n") + "\n\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/?%E6%96%B0%E7%9D%80%E6%83%85%E5%A0%B1\n";
    sendPostContent(content);
    setTitleData(scrapedObj);
  }
}
