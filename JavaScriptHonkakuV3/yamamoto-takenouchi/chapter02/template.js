const name = '山田太郎';
const age = 38;
const weight = 70;
const height = 168;

console.log(`${name}さんの年齢は${age}歳です。`);
console.log(name + "さんの年齢は" + age + "歳です。");

console.log(`${name}さんのBMI値は${(weight / (height / 100) ** 2).toFixed(1)}`)