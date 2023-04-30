const name = '山田太郎';
const age = 38;
const weight = 93;
const height = 181.5;

console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`BMI値は${(weight / (height / 100) ** 2).toFixed(2)}です。`);