const re = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\/?%&=]*)?/gi;
const str = `サポートサイトはhttp://www.example.comです。
            サンプル紹介サイトはHTTPS://www.web-deli.com/もよろしく！`;

const results = str.matchAll(re);
if (results) {
    for (const result of results) {
        console.log(result);
    }
    // results.forEach((r) => console.log(r));
} else {
    console.log('URLに該当する文字列はない。');
    console.log(`results: ${results}`)
}