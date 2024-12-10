const name = "田中一郎";
const age = 55;
const weight = 80;
const height = 181;

console.log(name + "さんの年齢は" + age + "歳です。BMI値は" + (weight / (height / 100) ** 2));
console.log(`${name}さんの年齢は${age}歳です。BMI値は${weight / (height / 100) **2}`);