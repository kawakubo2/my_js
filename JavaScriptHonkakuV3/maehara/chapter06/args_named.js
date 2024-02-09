function showDialog({
    content = '',
    title = 'My Dialog',
    width = 100,
    height = 100,
    position = 'center',
    modal = false
}) {
    console.log(`content: ${content}`);
    console.log(`title: ${title}`);
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    console.log(`position: ${position}`);
    console.log(`modal: ${modal}`);
}

showDialog({
    content: 'ダイアログ',
    modal: true,
});

const book = {title: 'JavaScript', publisher: '技術評論社', price: 3800, isbn: '978-4-1111-2222-3'};
const {publisher = '', title, price = 0, authors = ['山田祥寛']} = book;
console.log(`出版社: ${publisher}`);
console.log(`題名: ${title}`);
console.log(`価格: ${price}`);
console.log(`著者: ${authors.toString()}`);


function greet(name, keisho = 'さん') {
    console.log(`${name}${keisho}、こんにちは！`);
}
greet('田中');

const member = {name: '鈴木次郎', age: 33, weight: 72, height: 175};
const member2 = {name: '鈴木次郎', age: 33};

function bmi({weight = 70, height = 170}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));
console.log(bmi(member2));