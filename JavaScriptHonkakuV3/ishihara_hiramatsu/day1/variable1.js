// variable --- 変数
// ES2015
let name = '山田太郎'; // 初期化(変数宣言 + 代入)
/*
let name; --- 変数宣言
name = '山田太郎'; --- 代入
*/
let age = 38;

name = '田中一郎';
age = 55;
let weight = 82;
let height = 180;

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`); // ``で囲んだ文字列をエスケープ文字列と呼ぶ
console.log(`${name}のBMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);
