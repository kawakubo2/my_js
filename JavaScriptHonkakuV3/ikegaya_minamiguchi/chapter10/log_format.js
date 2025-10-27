const readline = require('readline-sync');
const name = readline.question('名前: ');
const age = readline.question('年齢: ');


console.log('初めまして、私は%sです。%d歳です。', name, age);

const temperature = Number.parseFloat(readline.question('気温: '));
console.log('今日の気温は%.2f度です。', temperature);