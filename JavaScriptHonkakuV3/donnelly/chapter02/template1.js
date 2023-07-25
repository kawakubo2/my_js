const name = '山田太郎';
const height = 172;
const weight = 67;
const age = 38;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`); // テンプレート文字列
console.log(`${name}さんのBMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);