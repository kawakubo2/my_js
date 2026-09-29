const readline = require("readline-sync");

/*
let name; // 宣言
name = '山田太郎'; // 代入

let age = 33; // 初期化(宣言 + 代入)

*/
const weight = readline.question("体重(kg): ");
const height = readline.question("身長(cm): ");

const bmi = weight / ((height / 100) ** 2);

console.log(`身長:${height}cm 体重:${weight}kg ---> BMI:${bmi}`);

let name;
console.log(name);
name = '横山花子';
console.log(name);