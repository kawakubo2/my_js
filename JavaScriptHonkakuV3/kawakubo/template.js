const name = '山田太郎';
const age = 48;
const weight = 70;
const height = 178;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log('テンプレート文字列')
console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`${name}さんのBMI値は${weight / (height / 100) ** 2}`); 