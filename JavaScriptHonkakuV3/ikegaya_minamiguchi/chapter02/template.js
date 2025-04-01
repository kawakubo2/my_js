let name = '山田太郎';
let age = 43;
let weight = 80;
let height = 181;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`);

console.log(`${name}さんのBMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);

name = '横山花子';
age = 38;
weight = 60;
height = 162;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`);

console.log(`${name}さんのBMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);