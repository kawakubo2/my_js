const books = [
  { title: 'TypeScript入門', price: 2948 },
  { title: 'Bootstrapの教科書', price: 3828 },
  { title: 'はじめてのAndroidアプリ開発', price: 3520 },
  { title: '基礎から学ぶC#の教科書', price: 3190 },
  { title: 'これからはじめるVue.js実践入門', price: 3740 },
];

let result = books.some((value) => value.price < 3000);
console.log(`価格が3000円未満の本は存在${result ? 'する': 'しない'}`);

result = books.every((value) => value.price < 3000);
console.log(`すべての価格が3000円未満${result ? 'である': 'ではない'}`);

result = books.every((value) => value.price < 5000);
console.log(`すべての価格が5000円未満${result ? 'である': 'ではない'}`);