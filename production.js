function func() {
  const scrapedObj = scraping();
  
  if (!compareNow(scrapedObj)) {
    let content = "\n\n[最新の見出し]\n" + scrapedObj["title"].replace(" ","\n") + "\n\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/?%E6%96%B0%E7%9D%80%E6%83%85%E5%A0%B1\n";
    sendPostContent(content);
    tweet("IN科特設サイトの新着情報が更新されたようです。\n最新の見出しは、\n『" + scrapedObj["title"] + "』\n\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/");
    
    setTitleData(scrapedObj);
    const now = new Date();
    if (now.getHours() < 12) {
      amSetBool(1);
    } else {
      pmSetBool(1);
    }
  }
}