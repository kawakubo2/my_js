let books = [
    { title: 'TypeScript入門', price: 2948 },
    { title: 'Bootstrapの教科書', price: 3828 },
    { title: 'はじめてのAndroidアプリ開発', price: 3520 },
    { title: '基礎から学ぶC#の教科書', price: 3190 },
    { title: 'これからはじめるVue.js実践入門', price: 3740 },
];
/*
console.log(books.find(function(value) {
    return value.title.endsWith('入門');
}));
*/
const books2 = books.filter(function(book) { return book.title.endsWith("入門")});
console.log(books2);