const email = 'tomo.kawakubo@gmail.com';

let pos = email.indexOf('@');
if (pos > -1) {
    console.log(`ローカル部: ${email.substring(0, pos)}`);
    console.log(`ドメイン部: ${email.substring(pos + 1)}`);
} else {
    console.log('Emailの形式が正しくありません。');
}

let [local, domain] = email.split('@');
console.log(`ローカル部: ${local}`);
console.log(`ドメイン部: ${domain}`);

let s1 = 'kokohadoko';
let pos1 = s1.lastIndexOf('ko');
console.log(`pos1=${pos1}`);

let filenames = ['abc.js', 'bcd.php', 'cde.cpp', 'def.java', 'efg.hij.klm.py', 'fhi.js', 'hij.js'];

for (let filename of filenames) {
    console.log(`${filename}の拡張子は${filename.substring(filename.lastIndexOf('.'))}`);
}

let url = 'https://example.com';
if (url.startsWith('https://')) {
    console.log('セキュアな通信です。');
} else {
    console.log('セキュアな通信ではありません。');
}

console.log('--- JavaScriptファイル ---');
for (let filename of filenames) {
    if (filename.endsWith('.js')) {
        console.log(filename);
    }
}

let name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
    console.log(`${name[i]}の文字コードは${name.codePointAt(i)}`)
}

console.log(String.fromCodePoint(24029) + String.fromCodePoint(20037) + String.fromCodePoint(20445) + String.fromCodePoint(26234) + String.fromCodePoint(26228));

for (let c = 65; c <= 90; c++) {
    console.log(String.fromCodePoint(c));
}

let s2 = 'ABCDEFGHIJ';
console.log(s2.slice(2, 6));
console.log(s2.substring(2, 6));
console.log(s2.substr(2, 4));

console.log('JavaScript'.toLocaleLowerCase());
console.log('JavaScript'.toUpperCase());

let array1 = ['私は', 'JavaScript', 'を', '勉強している'];

let s3 = '';
for (let s of array1) {
    s3 = s3.concat(s);
}
console.log(s3);

let s4 = 'JavaScript';
let s5 = s4.repeat(3);
console.log(s5);

let s6 = '  　　　　    JavaScriptは難しい。     　　　　　       ';
console.log(`>${s6.trim()}<`);