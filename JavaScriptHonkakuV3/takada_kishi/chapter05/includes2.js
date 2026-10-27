const books = [
  { title: 'TypeScript入門', price: 2948 },
  { title: 'Bootstrapの教科書', price: 3828 },
  { title: 'はじめてのAndroidアプリ開発', price: 3520 },
  { title: '基礎から学ぶC#の教科書', price: 3190 },
  { title: 'これからはじめるVue.js実践入門', price: 3740 },
  { title: 'Bootstrap実践入門第2版', price: 4400 },
  { title: '入門シリーズ: PHP', price: 2800 },
];

console.log('--------------------------------------');
let word = 'Bootstrap';
let book = books.find((value) => value.title.startsWith(word));
if (book) {
  console.log(book);
} else {
  console.log(`${word}で始まる書籍はありません。`);
}
console.log('--------------------------------------');
word = 'Java';
book = books.find((value) => value.title.startsWith(word));
if (book) {
  console.log(book);
} else {
  console.log(`${word}で始まる書籍はありません。`);
}

word = 'Bootstrap';
let results = books.filter((value) => value.title.startsWith(word));
if (results.length > 0) {
  console.log(results);
} else {
  console.log(`${word}で始まる書籍はありません。`);
}

word = 'Java';
results = books.filter((value) => value.title.startsWith(word));
if (results.length > 0) {
  console.log(results);
} else {
  console.log(`${word}で始まる書籍はありません。`);
}

word = '入門';
results = books.filter((value) => value.title.includes(word));
if (results.length > 0) {
  console.log(results);
} else {
  console.log(`${word}で始まる書籍はありません。`);
}

const indexes = books.map((value, index) => ({ ...value, index}))
                     .filter((value) => value.title.includes(word))
                     .map((value) => value.index);
console.log(indexes);

/*
const books = [
  { title: 'TypeScript入門', price: 2948, index: 0 },
  { title: 'これからはじめるVue.js実践入門', price: 3740, index: 4 },
  { title: 'Bootstrap実践入門第2版', price: 4400, index: 5 },
  { title: '入門シリーズ: PHP', price: 2800, index: 6 },
];
*/