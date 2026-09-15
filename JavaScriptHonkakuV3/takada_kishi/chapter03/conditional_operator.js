let score1 = 62;
let score2 = 90;
let score3 = 30;


console.log('--- if文 ---');
if (score1 >= 60) {
  console.log(`合格: ${score1}`);
} else {
  console.log(`不合格: ${score1}`);
}
console.log('--- 条件演算子 ---');
console.log(score1 >= 60 ? `合格: ${score1}` : `不合格: ${score1}`);

let result = score1 >= 60 ? `合格: ${score1}` : `不合格: ${score1}`;
console.log(result);

console.log(score1 >= 80 ? 'Aランク': score1 >= 60 ? 'Bランク': score1 >= 40 ? 'Cランク': 'Dランク');
console.log(score2 >= 80 ? 'Aランク': score2 >= 60 ? 'Bランク': score2 >= 40 ? 'Cランク': 'Dランク');
console.log(score3 >= 80 ? 'Aランク': score3 >= 60 ? 'Bランク': score3 >= 40 ? 'Cランク': 'Dランク');

const age1 = 16;
const age2 = 30;

console.log(age1 >= 18 ? '大人': '子供');
console.log(age2 >= 18 ? '大人': '子供');

let answer1 = '有意義でした。次回も参加したいです。';
let answer2 = '';
let answer3 = '';

answer1 = answer1 ? answer1: '(特になし)';
console.log(`answer1=${answer1}`);
answer2 = answer2 ? answer2 : '(特になし)';
console.log(`answer2=${answer2}`);

// 規定値(デフォルト値)を設定する簡単な方法
answer3 ||= '(特になし)';
console.log(`answer3=${answer3}`);


const numbers = [1.423353, 2.892848, null, 4.482974, 5.91837, null, 6.08137];
let total = 0;
for (let num of numbers) {
  num ??= 0; // num = num ?? 0;  SQLだとCOALESCE(num, 0)
  console.log(`num: ${num.toFixed(1)}`);
  total += num;
}
console.log(`合計: ${total}`);
