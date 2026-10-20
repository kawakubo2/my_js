// const hours = [-1, 24, 0, 11, 7, 12, 13, 18, 15, 19, 23, 20];

const hours = new Map([
  [-1, '時刻の範囲を超えています。'],
  [24, '時刻の範囲を超えています。'],
  [ 0, 'おはようございます。'],
  [11, 'おはようございます。'],
  [ 7, 'おはようございます。'],
  [12, 'お昼です。'],
  [13, 'こんにちは。'],
  [18, 'こんにちは。'],
  [15, 'こんにちは。'],
  [19, 'こんばんは。'],
  [23, 'こんばんは。'],
  [20, 'こんばんは。'],
]); 

function greet1(hour) {
  let result;
  if (hour >= 0 && hour <= 11) {
    result = 'おはようございます。';
  } else if (hour === 12) {
    result = 'お昼です。';
  } else if (hour >= 13 && hour <= 18) {
    result = 'こんにちは。';
  } else if (hour >= 19 && hour <= 23) {
    result = 'こんばんは。';
  } else {
    result = '時刻の範囲を超えています。';
  }
  return result;
}

function greet2(hour) {
  let result;
  if (hour < 0 || hour > 23) {
    result = '時刻の範囲を超えています。';
  } else if (hour <= 11) {
    result = 'おはようございます。';
  } else if (hour === 12) {
    result = 'お昼です。';
  } else if (hour <= 18) {
    result = 'こんにちは。';
  } else {
    result = 'こんばんは。';
  }
  return result;
}

function greet3(hour) {
  let result;
  if (hour < 0 || hour > 23) {
    result = '時刻の範囲を超えています。';
  } else if (hour >= 19) {
    result = 'こんばんは。';
  } else if (hour >= 13) {
    result = 'こんにちは。';
  } else if (hour === 12) {
    result = 'お昼です。';
  } else {
    result = 'おはようございます。';
  }
  return result;
}

function greet4(hour) {
  const gozen = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const shogo = new Set([12]);
  const gogo  = new Set([13, 14, 15, 16, 17, 18]);
  const yoru  = new Set([19, 20, 21, 22, 23]);
  if (gozen.has(hour)) {
    result = 'おはようございます。';
  } else if (shogo.has(hour)) {
    result = 'お昼です。';
  } else if (gogo.has(hour)) {
    result = 'こんにちは。';
  } else if (yoru.has(hour)) {
    result = 'こんばんは。';
  } else {
    result = '時刻の範囲を超えています。';
  }
  return result;
}




// 高階関数(higher order function)
function test(greet, hours) {
  let count = 0;
  for (const [hour, greenting] of hours.entries()) {
    console.log(`=== ${hour}時 ===`);
    const result = greet(hour);
    if (greenting === result) count++;
    console.log(`期待値: ${greenting} 検出値: ${result} => ${greenting === result ? '〇': '×'}`);
  }
  console.log('-------------------------------------');
  console.log(count === hours.size ? '合格': '不合格');
}

console.log('=== 方法1 範囲を示す方法 ===');
test(greet1, hours);
console.log('=== 方法2 小さい方から並べる方法 ===');
test(greet2, hours);
console.log('=== 方法3 大きい方から並べる方法 ===');
test(greet3, hours);
console.log('=== 方法4 Setを使う方法 ===');
test(greet4, hours);