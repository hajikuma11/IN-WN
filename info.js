function amNotify() {
  if (compare(1,"B2")) {
    let content = "\n[定期報告]\n午前中に新着情報の更新があったようです。\n詳細はサイトをご確認ください\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/\n";
    sendPostContent(content);
    tweet("[定期報告]\n午前中に新着情報の更新があったようです。\n詳細はサイトをご確認ください\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/");
  } else {
    let content = "\n[定期報告]\n午前中に新着情報の更新はありません。\n";
    sendPostContent(content);
    tweet("[定期報告]\n午前中に新着情報の更新はありませんでした。");
  }
}

function pmNotify() {
  if (compare(1,"B3")) {
    let content = "\n[定期報告]\n１９時までに新着情報の更新があったようです。\n詳細はサイトをご確認ください\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/\n";
    sendPostContent(content);
    tweet("[定期報告]\n１９時までに新着情報の更新があったようです。\n詳細はサイトをご確認ください\nhttps://www.oit.ac.jp/is/nishiguchi-lab/IN-2020/");
  } else {
    let content = "\n[定期報告]\n１９時までに新着情報の更新はありません。\n";
    sendPostContent(content);
    tweet("[定期報告]\n１９時までに新着情報の更新はありませんでした。");
  }
  amSetBool(0);
  pmSetBool(0);
}