// str1.js

const email = 'tomo.kawakubo@gmail.com';

const pos = email.indexOf('@');
if (pos > -1) {
    console.log(`${email}の中に@は${pos}番目に存在します。`);
} else {
    console.log(`${email}の中に@は存在しません。`);
}

const local = email.substring(0, pos);
const domain = email.substring(pos + 1);
console.log(`ローカル部: ${local} ドメイン部: ${domain}`);

const filename = 'abc.def.xyz.js';

const pos2 = filename.lastIndexOf('.');
console.log(`pos2=${pos2}`);

const extension = filename.substring(pos2 + 1);
console.log(`extension=${extension}`);

const url = 'https://www.amazon.co.jp';

console.log(url.startsWith('https://'));

const extension2 = 'HelloWorld.java';

console.log(extension2.endsWith('.java'));

const title = 'たのしいJavaScript入門';
console.log(title.toLowerCase().includes('javascript'));

const language = 'JavaScript';
for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i) + ':' + language.codePointAt(i));
}

const name = '川久保智晴';
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ':' + name.codePointAt(i));
}

const zipCode = 'この教室の郵便番号は〒812-0013です。';
const pos3 = zipCode.indexOf('〒');
console.log(zipCode.slice(pos3 + 1, pos3 + 9));

const str2 = '札幌,東京,横浜,名古屋,大阪,神戸,福岡';
console.log(str2.split(','));

const str3 = '      ab c     ';
console.log('>' + str3.trim() + '<');