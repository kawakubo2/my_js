const book = {
    title: 'Javaポケットリファレンス',
    publish: '技術評論社',
    price: 2680
};

const {price, title = '題名なし', memo = 'x'} = book;
console.log(title);
console.log(price);
console.log(memo);