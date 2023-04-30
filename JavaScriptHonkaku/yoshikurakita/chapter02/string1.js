let s1 = 'kokohadoko,watashihadare';
console.log(s1);
let pos = s1.indexOf('watashi');
console.log("let pos = s1.indexOf('watashi') ---> " + pos); 
pos = s1.lastIndexOf('ko');
console.log("s1.lastIndexOf('ko') ---> " + pos);

let filename = 'abcdef.ghi.js';
let extension = filename.substring(filename.lastIndexOf('.'));
console.log(extension);
extension = filename.substring(filename.indexOf('.'));
console.log(extension);

let url1 = 'https://haru-idea.jp';
console.log(url1.startsWith('https'));
let url2 = 'http://haru-idea.jp';
console.log(url2.startsWith('https'));

console.log(filename.endsWith('.js'));

let name = '川久保智晴';

for (let c of name) {
    console.log(c);
}
console.log('-------------');
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ' の文字コードは ' + name.charCodeAt(i));
}
console.log('�る�'.length);

let s2 = 'abcdefghij';
console.log(s2.substring(2, 5)); // 開始位置は含み、終了位置は含まない
console.log(s2.slice(2, 5));
console.log(s2.substr(2, 3)); // substrは開始位置から文字数を指定する

let s3 = 'JavaScript,C++,Go,Rust,Python';
let a1 = s3.split(',');
console.log(a1);

let s4 = 'javascript';
console.log(s4.toUpperCase());
let s5 = 'JavaScipt';
console.log(s4.toLowerCase());