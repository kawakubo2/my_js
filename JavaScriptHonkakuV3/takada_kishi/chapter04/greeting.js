const hours = [0, 7, 11, 12, 13, 17, 18, 19, 21, 23, -1, 24];

for (const hour of hours) {
  console.log(`====== ${hour}時`);
  console.log('--- 方法1: 範囲を示す方法');
  if (hour >= 0 && hour <= 11) {
    console.log('おはようございます。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else if (hour >= 13 && hour <= 18) {
    console.log('こんにちは。');
  } else if (hour >= 19 && hour <= 23) {
    console.log('こんばんは。');
  } else {
    console.log('時刻の範囲を越えています。');
  }

  console.log('--- 方法2: 小さい値から比較');
  if (hour < 0 || hour > 23) {
    console.log('時刻の範囲を越えています。');
  } else if (hour <= 11) {
    console.log('おはようございます。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else if (hour <= 18) {
    console.log('こんにちは。');
  } else {
    console.log('こんばんは。');
  }

  console.log('--- 方法3: 大きい値から比較');
  if (hour < 0 || hour > 23) {
    console.log('時刻の範囲を越えています。');
  } else if (hour >= 19) {
    console.log('こんばんは。');
  } else if (hour >= 13) {
    console.log('こんにちは。');
  } else if (hour === 12) {
    console.log('お昼です。');
  } else {
    console.log('おはようございます。');
  }
}

function generateHours(start, end) {
  const result = new Set();
  for (let i = start; i <= end; i++) {
    result.add(i);
  }
  return result;
}

console.log('--- Setを使う方法')
const gozen = generateHours( 0, 11);
const shogo = generateHours(12, 12);
const gogo  = generateHours(13, 18);
const yoru  = generateHours(19, 23);

for (const hour of hours) {
  console.log(`[${hour}時]`);
  if (gozen.has(hour)) {
    console.log('おはようございます。');
  } else if (shogo.has(hour)) {
    console.log('お昼です。');
  } else if (gogo.has(hour)) {
    console.log('こんにちは。');
  } else if (yoru.has(hour)) {
    console.log('こんばんは。');
  } else {
    console.log('時刻の範囲を越えています。');
  }
}

