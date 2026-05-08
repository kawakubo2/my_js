const list = ['ギガ', 'キ\u3099カ\u3099', 'ｷﾞｶﾞ', '㌐'];

for (const s of list) {
  console.log(s.normalize('NFKC'));
}