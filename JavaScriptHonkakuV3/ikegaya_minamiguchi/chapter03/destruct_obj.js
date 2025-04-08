const book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680
};

const { price, title, memo = '×'} = book;
console.log(`title=${title}`);
console.log(`price=${price}`);
console.log(`memo=${memo}`);

// 別名を付けることができる
const { title: subject, publisher: company } = book;

const width = 8;
const height = 5;

let rectangle = { width, height };
console.log(rectangle.width);
console.log(rectangle.height);