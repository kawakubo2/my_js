const re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
const str = `サポートサイトはhttp://www.example.com/です。
            サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;
const results = str.match(re);
console.log(results);
for (const result of results) {
    console.log(result.toLowerCase());
}
console.log('---< stream api使用 >---');
results.map(r => r.toLowerCase())
        .forEach(r => console.log(r));