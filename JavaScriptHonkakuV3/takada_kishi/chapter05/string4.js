const str = 'ABCDEFGHIJKLM';
console.log(str.substring(2, 5)); // CDE
console.log(str.substring(0, 6));
console.log(str.substring(6));

console.log('--- アルファベットを5文字ずつ取り出す ---');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let start = 0;
let end = 5;
while (start < alphabet.length) {
  if (end >= alphabet.length) {
    end = alphabet.length;
  }
  console.log(alphabet.substring(start, end));
  start += 5;
  end += 5;
}

const tel = '私の会社の郵便番号は、〒123-4567です。';
const index = tel.indexOf('〒');
console.log(tel.substring(index + 1, index + 9));

const email = 'taro@yamada.com';
const idx = email.indexOf('@');
const local = email.substring(0, idx);
const domain = email.substring(idx + 1);
console.log(`ローカル部: ${local}`);
console.log(`ドメイン部: ${domain}`);