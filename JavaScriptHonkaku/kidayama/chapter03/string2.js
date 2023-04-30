const url1 = "https://www.amazon.co.jp";
const url2 = "http://example.com";
console.log(url1.startsWith("https://"));
console.log(url2.startsWith("https://"));

const file1 = "aaa.bbb.js";
const file2 = "ccc.ddd.py";
console.log(file1.endsWith(".js"));
console.log(file2.endsWith(".js"));

const str1 = "私はJavaScriptが好きです。"
const str2 = "私はJavaが好きです。";
console.log(str1.includes("JavaScript"));
console.log(str2.includes("JavaScript"));

const name = "山田太郎";
for (let i = 0; i < name.length; i++) {
    console.log(`${name.charAt(i)}の文字コードは${name.codePointAt(i)}`);
}

const codes = [23665, 30000, 22826, 37070];
let str3 = '';
for (const code of codes) {
    str3 += String.fromCharCode(code);
}
console.log(str3);

const str4 = "ABCDEFHIJ";
console.log(str4.slice(2, 6));

console.log('-----< 5文字おきに改行 >------');
let i = 0;
const step = 5;
const str5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
while (i < str5.length) {
    if (i + 5 >= str5.length) {
        console.log(str5.slice(i, str5.length));
        break;
    }
    console.log(str5.slice(i, i + 5));
    i += 5;
}

const str6 = "abcdefg{JavaScriptは難しい}hijklmn";
const pos1 = str6.indexOf("{");
const pos2 = str6.indexOf("}");
console.log(str6.substring(pos1 + 1, pos2));

const str7 = "私の実家の郵便番号は〒123-4567です。";
const pos3 = str7.indexOf("〒");
console.log(str7.substr(pos3 + 1, 8));

const str8 = "札幌,仙台,東京,横浜,名古屋,京都,大阪,神戸,広島,福岡";
const array1 = str8.split(",");
console.log(array1);

const str9 = "Pro ASP.NET Core Identity";
console.log(str9.toLowerCase());
console.log(str9.toUpperCase());

const str10 = "Java";
const str11 = "Script";
const str12 = str10.concat(str11);
console.log(str10);
console.log(str11);
console.log(str12);

console.log("*".repeat(5));

const DANSU = 10;
for (let i = 1; i <= DANSU; i++) {
    let s = " ".repeat(DANSU - i) + "*".repeat(i * 2 - 1) + " ".repeat(DANSU - i);
    console.log(s);
}