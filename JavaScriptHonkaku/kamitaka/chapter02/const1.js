// const name = '山田太郎';
// name = '田中一郎';

const numbers = [1, 2, 3]
numbers[0] = 100;
numbers[1] = 0;
numbers[2] = 1000;
numbers.push(15);
console.log(numbers);
// numbers = [4, 5, 6];

/*
const member = ['山田太郎', 58, 58, 170];
let [name, age, weight, height] = member;
console.log(`名前: ${name}`);
console.log(`年齢: ${age}`);
console.log(`体重: ${weight}`);
console.log(`身長: ${height}`);
*/

const ary1 = [55, 5.5, 10, 1];
let [sum, avg, max, min] = ary1;
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);

function bmi({ weight, height }) {
    return weight / ((height / 100) ** 2);
}

const member2 = { name: '山田太郎', age: 42, weight: 67, height: 168 };
console.log(bmi(member2));

const book = {
    title: 'Javaポケットリファレンス',
    publish: '技術評論社',
    price: 2680,
    other: { keywd: 'Java SE 8', logo: 'logo.jpg' }
}

const { title, other, other: { keywd } } = book;

console.log(title);
console.log(other);
console.log(keywd);

{
    let price = 1000;
}
console.log(price);