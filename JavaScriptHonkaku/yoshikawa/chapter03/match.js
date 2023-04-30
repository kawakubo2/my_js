const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
const str = 'サポートサイトはhttp://www.wings.msn.to/です。'
    + 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';

const result = str.match(p);
if (result !== null) {
    for (let i = 0, len = result.length; i < len; i++) {
        console.log(result[i]);
    }
}