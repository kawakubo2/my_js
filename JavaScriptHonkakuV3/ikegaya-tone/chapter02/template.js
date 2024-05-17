const name = "山田太郎";
const age = 38;
const weight = 70
const height = 172;

// console.log(name + "さんの年齢は" + age + "歳です。");
console.log(`${name}さんの年齢は${age}歳です。
BMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);