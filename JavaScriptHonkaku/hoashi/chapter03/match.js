const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- \/?%&=]*)?/i;
let str = 'サポートさいとはhttps://www.wings.msn.to/です。';
    str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
const result = str.match(p);
console.log(result);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}