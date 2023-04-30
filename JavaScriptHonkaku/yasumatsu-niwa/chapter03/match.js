const p = /https?:\/\/([0-9a-z-]+\.)+[0-9a-z-]+(\/[0-9a-z- .\/?%&=]*)?/gi;
let str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';
const result = str.match(p);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}