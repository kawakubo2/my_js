/*
var命令で変数宣言していたが、古いプロジェクトを修正するのではない限り
let命令と使うこと
let命令は変数宣言を防ぐことができる
*/
// 変数宣言
let name = "山田太郎"; // JavaScriptはセミコロンをつけなくてもいいが、付けた方がバグが起こりづらい。
let age = 38;
name = "田中一郎";

console.log(name + "さんの年齢は" + age + "歳です。");

// constは定数宣言。一度値を設定したら変更できない。
const birthdate = new Date('1986-05-03');
console.log(name + "さんの誕生日" + (birthdate.getMonth() + 1) + "月" + birthdate.getDate() + "日です。");
// birthdate = new Date('2000-12-31');
// console.log(name + "さんの誕生日" + (birthdate.getMonth() + 1) + "月" + birthdate.getDate() + "日です。");

let price = 1000;
price = price / 2; // セールにする