const books = [
    { title: 'TypeScript', price: 2948 },
    { title: 'Bootstrapの教科書', price: 3828 },
    { title: 'はじめてのAndroidアプリ開発', price: 3520 },
    { title: '基礎から学ぶC#', price: 3190 },
    { title: 'こらからはじめるVue.js実践入門', price: 3740 },
];

console.log(books.filter(function(value) {
    return value.price < 3500;
}));