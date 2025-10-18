const books = [
    { title: 'TypeScript入門', price: 2948 },
    { title: 'Bootstrapの教科書', price: 3828 },
    { title: 'はじめてのAndroidアプリ開発', price: 3520 },
    { title: '基礎から学ぶC#の教科書', price: 3190 },
    { title: 'これからはじめるVue.js実践入門', price: 3740 },
];

const textbooks = books.find(book => book.title.endsWith("教科書"));
console.log(textbooks);

const textbooks2 = books.filter(book => book.title.endsWith("教科書"));
console.log(textbooks2);

const textbooks3 = books.filter(book => book.title.endsWith("教科書") && book.price > 3500);
console.log(textbooks3);

console.log('本の価格が3000円より安いものが最低1つ存在するか？');
console.log(books.some(book => book.price < 3000));
console.log('すべての本の価格が3000円より安いか？');
console.log(books.every(book => book.price < 3000));