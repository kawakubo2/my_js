const hello = () => console.log('こんにちは');

hello();

const double = (num) => num * 2;
console.log(double(10));

setTimeout(name => console.log(`こんにちは、${name}さん`), 3000, '独習太郎');