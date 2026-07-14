const readline = require('readline-sync');

let total = 0;

function add(n) {
  total += n;
}
function sub(n) {
  total -= n;
}
function mul(n) {
  total *= n;
}
function div(n) {
  total /= n;
}

console.log('--- 電卓 ---');
let operator;
let num;
while (true) {
  console.log('1.加算 2.減算 3.乗算 4.除算 9.終了');
  operator = readline.question('演算を選択してください: ');
  if (operator === '9') break;
  if (operator < 1 || operator > 4) {
    console.log('1～4を選択して下さい。');
    continue;
  }
  num = Number(readline.question('数値:'));
  switch(operator) {
    case '1':
      add(num);
      console.log(`total=${total}`);
      break;
    case '2':
      sub(num);
      console.log(`total=${total}`);
      break;
    case '3':
      mul(num);
      console.log(`total=${total}`);
      break;
    case '4':
      div(num);
      console.log(`total=${total}`);
        break;
  }
}