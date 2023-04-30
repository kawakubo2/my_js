const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- \/?%&=]*)?/gi;
let str = 'サポートさいとはhttps://www.wings.msn.to/です。';
    str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
let result = null;
while((result = p.exec(str)) !== null) {
    console.log('------------');
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
}