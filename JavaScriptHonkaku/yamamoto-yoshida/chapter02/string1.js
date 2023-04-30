const s1 = 'kokohadoko';
console.log(s1.indexOf('ko'));
console.log(s1.indexOf('go'));
console.log(s1.lastIndexOf('ko'));

const s2 = 'https://www.amazon.co.jp';
console.log(s2.startsWith('https://'));
const files = ['abc.js', 'xyz.py', 'lmn.js', 'opq.java'];

for (let i = 0; i < files.length; i++) {
    if (files[i].endsWith('.js')) {
        console.log(files[i]);
    }
}

const s3 = "川久保智晴";
for (let i = 0; i < s3.length; i++) {
    console.log(`${s3.charAt(i)}: ${s3.codePointAt(i)}`);
}

console.log(String.fromCodePoint(24029, 20037, 20445, 26234, 26228));

const s4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < s4.length; i += 5) {
    // 条件演算子(3項演算子)
    // let end = i + 5 >= s4.length ? s4.length : i + 5;
    let end;
    if (i + 5 >= s4.length) {
        end = s4.length;
    } else {
        end = i + 5;
    }
    console.log(s4.substring(i, end));
}

const s5 = '私の実家の郵便番号は〒123-4567です。';
const pos = s5.indexOf('〒');
console.log(s5.substr(pos + 1, 8));

const s6 = 'JavaScript,Python,C++,C#,Go,Rust,Java';
const array1 = s6.split(',');
console.log(array1);

const s7 = '                   abc              ';
console.log(`[${s7.trim()}]`);

let s8 = 'Java';
let s9 = 'Script';
const s10 = s8.concat(s9);

console.log(`s8 = ${s8}`);
console.log(`s9 = ${s9}`);
console.log(`s10 = ${s10}`);