let name = '山田太郎';
let age = 28;
let height = 172;
let weight = 75;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`BMI値は${weight / (height / 100) ** 2}です。`);