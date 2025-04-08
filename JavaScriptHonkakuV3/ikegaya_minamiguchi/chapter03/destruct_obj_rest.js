const book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680
};

const {title, ...rest} = book;
console.log(`title=${title}`);
console.log(rest);