const name = '山田太郎';
const age = 39;
const weight = 70;
const height = 172;

console.log(`${name}さんの年齢は${age}歳で、BMI値は${(weight / (height / 100) ** 2).toFixed(2)}`);
console.log(name + 'さんの年齢は' + age + '歳で、BMI値は' + (weight / (height / 100) ** 2).toFixed(2));