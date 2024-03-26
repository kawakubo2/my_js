const msg = '私の会社の郵便番号は〒812-0013です。';

const pos = msg.indexOf('〒');
console.log(`〒は${pos}番目に存在する`);
console.log(`郵便番号: ${msg.substring(pos + 1, pos + 1 + 8)}`);

const msg2 = '私の会社のURLは{https://haru-idea.jp}です。';
const start = msg2.indexOf('{') + 1;
const end   = msg2.indexOf('}');
console.log(`URL: ${msg2.substring(start, end)}`);