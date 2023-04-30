// 短絡評価(Shortcut Evaluation)
let x = 0;
console.log(x && 'こんにちは！');
x = 1;
console.log(x && 'こんにちは！');
if (x) {
    console.log('こんにちは！');
}
let s1 = ''
console.log(s1 || 'こんばんは！');
let s2 = '短絡評価は難しい';
console.log(s2 || 'こんばんは！');

let error = ''
error = error || 'エラーなし';
console.log(error);

error = '名前は必須入力です。';
error = error || 'エラーなし';
console.log(error);

let num1 = 10;
let num2 = 20;
let num3 = 30;

/*
if (num1 > 5 || num2 = 10) {
    num3 *= 2;
}
console.log(`num1=${num1}`)
console.log(`num2=${num2}`)
console.log(`num3=${num3}`)
*/