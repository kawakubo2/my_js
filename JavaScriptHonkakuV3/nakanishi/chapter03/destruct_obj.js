const book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680
};

const { price, title, memo = 'ｘ' } = book;
console.log(title);
console.log(price);
console.log(memo);