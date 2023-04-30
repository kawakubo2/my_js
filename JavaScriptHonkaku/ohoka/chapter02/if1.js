/*
 午前・・・おはようございます。
 お昼・・・お昼です。
 午後・・・こんにちは。
 夜・・・・こんばんは。

 午前:  0 - 11
 お昼: 12
 午後: 13 - 18
 夜  : 19 - 23
上記以外が入力された場合
            時刻の範囲を超えています。

 論理積 &&
 論理和 ||
 否定    !

 そろそろ出来ました？
 まだですか？
*/

let time = 'abc';

console.log('---< 解法1(小さい値から比較する) >---')
if (time < 0 || time > 23) {
    console.log('時刻の範囲を超えています。');
} else if (time <= 11) {
    console.log('おはようございます。');
} else if (time === 12) {
    console.log('お昼です。');
} else if (time <= 18) {
    console.log('こんにちは。');
} else {
    console.log('こんばんは。');
}

console.log('---< 解法2(大きい値から比較する) >---');
if (time < 0 || time > 23) {
    console.log('時刻の範囲を超えています。');
} else if (time >= 19) {
    console.log('こんばんは。');
} else if (time >= 13) {
    console.log('こんにちは。');
} else if (time == 12) {
    console.log('お昼です。');
} else {
    console.log('おはようございます。');
}

console.log('---< 解法3(範囲を指定する) >---');
if (time >= 0 && time <= 11) {
    console.log('おはようございます。');
} else if (time == 12) {
    console.log('お昼です。');
} else if (time >= 13 && time <= 18) {
    console.log('こんにちは。');
} else if (time >= 19 && time <= 23) {
    console.log('こんばんは。');
} else {
    console.log('時刻の範囲を超えています。');
}