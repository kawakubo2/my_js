/*
 * npm install readline-sync

 * (1) PowerShellだと文字セットを65001(UTF-8)にしても文字化けが発生)
 * (2) ターミナルをmand Promptでchcp 65001で文字セットを切り替えるか、
 * (3) ターミナルをUbuntuに切り替えて実行すると文字化けはおきない
 */

const readline = require('readline-sync');
const name = readline.question('名前: ');
const age = readline.question('年齢: ');
console.log(`${name}さんの年齢は${age}歳です`);