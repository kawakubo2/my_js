let name = '山田太郎';
let age = 33;
let height = 170;
let weight = 68;

let member = {name, age, height, weight};
console.log(member);

age = 35;

member = { ...member, age};
console.log(member);

name = '田中太郎';

member = { ...member, name }; // { name: '山田太郎', age: 35, height: 170, weight: 68, name: '田中太郎' }
console.log(member);