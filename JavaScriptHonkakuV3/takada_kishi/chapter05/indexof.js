const email = 'tomo.kawakubo@gmail.com';

const pos = email.indexOf('@'); // SQLのlocate関数に該当
console.log(`＠は${pos}番目にあります。`);

console.log(`ローカル部: ${email.substring(0, pos)}`)
console.log(`ドメイン部: ${email.substring(pos + 1)}`);

const file1 = 'abc.123.xyz.js';
const last_index = file1.lastIndexOf('.');
console.log(`ベース名: ${file1.substring(0, last_index)}`);
console.log(`拡張子: ${file1.substring(last_index + 1)}`);