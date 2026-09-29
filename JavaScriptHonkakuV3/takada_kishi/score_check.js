const readline = require("readline-sync");

let score;
console.log('強制終了したい場合は"xxxxx"を入力してください')

// do while文またはdo文
do {
  score = readline.question('点数: ');
  if (score === "xxxxxx") {
    break;
  }
  if (score < 0 || score > 100) {
    console.log('点数は0～100を入力してください。');
  }
} while (score < 0 || score > 100);

console.log(`入力した点数: ${score}`);