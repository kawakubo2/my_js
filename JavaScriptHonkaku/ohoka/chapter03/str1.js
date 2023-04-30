let email = 'tomo.kawakubo@gmail.com';
/*
  ローカル部@ドメイン部
*/
let [local, domain] = email.split('@');
console.log(`ローカル部: ${local}`);
console.log(`ドメイン部: ${domain}`);

let pos = email.indexOf('@');
console.log(`ローカル部`, email.substr(0, pos));
console.log(`ドメイン部`, email.substr(pos + 1));

let filename = 'abc.def.ghi.js';
let pos2 = filename.lastIndexOf('.');
console.log(`ベース名: ${filename.substr(0, pos2)}`);
console.log(`拡張子: ${filename.substr(pos2 + 1)}`);

let url = 'https://example.com';
console.log(url.startsWith('https'));

let filename2 = 'awesome.java';
console.log(filename2.endsWith('.java'));

let filename3 = 'abcmathxyz.js';
console.log(filename3.includes('math'));

let name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
    console.log(`${name.charAt(i)}: ${name.codePointAt(i)}`);
}

let s2 = 'JavaScript';
console.log(s2.toLowerCase());
console.log(s2.toUpperCase());