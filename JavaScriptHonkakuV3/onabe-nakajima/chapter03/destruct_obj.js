let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680
};

let book2 = { price , title, memo = 'X'} = book;
console.log(title);
console.log(price);
console.log(memo);
console.log(book2);

const name = '山田太郎';
const age = 38;
const member = {name, age};
console.log(member);

const height = 170;
const weight = 72;
const member2 = { ...member, height, weight};
console.log(member2);