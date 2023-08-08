const book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680
};

let price, title, memo;
({ price, title, memo = 'X'} = book);
console.log(price);
console.log(title);
console.log(memo);

// 変数を使ってオブジェクトリテラルを作れる！
const name = 'Yamada';
const age = 38;
const weight = 86;
const height = 181;

const member = {name, age, weight, height};

console.log(member);
