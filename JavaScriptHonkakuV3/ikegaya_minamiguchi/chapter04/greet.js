
const hours = [-1, 24, 0, 11, 7, 12, 13, 18, 15, 19, 23, 20];

for (const hour of hours) {

  console.log(`===${hour}時===`);

  console.log('--- 小さい方から比較する  ---');

  if (hour < 0 || hour > 23) {
    console.log('時刻の範囲を超えています。');
  } else if (hour <= 11) {
    console.log('おはようございます。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else if (hour <= 18) {
    console.log('こんにちは。');
  } else {
    console.log('こんばんは。');
  }

  console.log('--- 大きいから比較する  ---');

  if (hour < 0 || hour > 23) {
    console.log('時刻の範囲を超えています');
  } else if (hour >= 19) {
    console.log('こんばんは。');
  } else if (hour >= 13) {
    console.log('こんにちは。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else {
    console.log('おはようございます。');
  }

  console.log('--- 範囲で指定する方法 ---');

  if (hour >= 0 && hour <= 11) {
    console.log('おはようございます。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else if (hour >= 13 && hour <= 18) {
    console.log('こんにちは。');
  } else if (hour >= 19 && hour <= 23) {
    console.log('こんばんは。');
  } else {
    console.log('時刻の範囲を超えています');
  }
}