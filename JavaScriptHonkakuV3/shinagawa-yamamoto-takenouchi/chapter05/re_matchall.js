const re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w .\/?%&=]*)?/gi;
const str = 'サポートサイトはhttp://www.example.com/です。サンプル紹介サイトはHTTPS://www.web-deli.com/もよろしく！';
const results = str.matchAll(re);
for (const result of results) {
    console.log(result);
}