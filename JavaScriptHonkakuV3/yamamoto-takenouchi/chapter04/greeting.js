let hour = 15;

console.log('---< 解法1 >---');
if (hour >= 0 && hour <= 11) {
    console.log('おはようございます。');
} else if (hour === 1) {
    console.log('お昼です。');
} else if (hour >= 13 && hour <= 18) {
    console.log('こんにちは。');
} else if (hour >= 19 && hour <= 23) {
    console.log('こんばんは。');
} else {
    console.log('時刻の範囲を超えています。');
}

console.log('---< 解法2 >---');
if (hour < 0 || hour > 23) {
    console.log('時刻の範囲を超えています。');
} else if (hour <= 11) {
    console.log('おはようございます');
} else if (hour === 12) {
    console.log('お昼です。');
} else if (hour <= 18) {
    console.log('こんにちは。');
} else {
    console.log('こんばんは。');
}
