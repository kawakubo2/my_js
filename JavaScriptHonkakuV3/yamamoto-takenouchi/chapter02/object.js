let book = {
    title: 'JavaScipt本格入門',
    price: 2980,
    publisher: '技術評論社',
    123: 'abc'
};

console.log(book.title);
console.log(book['title']);

book.price = 3480;
console.log(book.price);
book['price'] = 3680;
console.log(book.price);

// 数値で始まるプロパティはドット演算子は使用できない
// console.log(book.123);
console.log(book['123']);