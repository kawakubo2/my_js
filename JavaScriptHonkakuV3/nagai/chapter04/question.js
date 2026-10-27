const readline = require('readline-sync');

let score;
do {
  score = Number(readline.question('点数: '));
  console.log((score < 0 || score > 100) ? '0～100の範囲で入力してください。': '');
  console.log(!Number.isInteger(score) ? '整数値を入力してください': '');
} while (Number.isNaN(score) || score < 0 || score > 100);

if (score > 60) {
  console.log('合格');
} else if (score > 40) {
  console.log('追試');
} else {
  console.log('不合格');
}