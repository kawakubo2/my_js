const type = ['NFD', 'NFC', 'NFKD', 'NFKC'];
const list = ['ギガ', 'キ\u3099カ\u3099', 'ｷﾞｶﾞ', '㌐'];

console.log(list);
console.log('---------------');
for (const t of type) {
  console.log(`■${t}`);
  for (let l of list) {
    console.log(`${l} => ${l.normalize(t)}`);
  }
}
