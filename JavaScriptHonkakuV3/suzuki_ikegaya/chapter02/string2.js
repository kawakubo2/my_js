// テンプレート文字列
const name = "山田";
const age = 38;
const weight = 80;
const height = 172;

console.log(name + "さんの年齢は" + age + "歳です。");
console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`${name}さんのBMI値は${(weight / (height / 100) ** 2).toFixed(3)}`)