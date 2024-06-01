let x = 10;

let answer;
try {
    answer = x * y;
    console.log(`積=${answer}`);
} catch(e) {
    console.log(`${e.name}: ${e.message}`);
}

/*
try {
    受講記録をデータベースから取り出す
    取り出したデータから請求書(PDFファイル)
    請求書をメールに添付して送信する
} catch(e) {
    例外が発生した場合の対処
} finally {
    if (xxx) {
        xxx.close();
    }
}
*/