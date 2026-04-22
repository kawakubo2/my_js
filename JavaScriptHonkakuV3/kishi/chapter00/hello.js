const readline = require('readline-sync');

const name = readline.question('名前: ');
const height = Number.parseFloat(readline.question('身長(cm): '));
const weight = Number.parseFloat(readline.question('体重(kg): '));

const bmi = weight / (height / 100) ** 2;

console.log(`${name}さんのBMI値は${bmi.toFixed(1)}です。`);