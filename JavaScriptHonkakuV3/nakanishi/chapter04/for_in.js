const data = {
    banana: 'ばなな',
    apple: 'りんご',
    orange: 'オレンジ',
    grape: 'ブドウ'
};
// 連想配列専用の繰り返し構文(キーだけを取り出す)　値が欲しい場合は data[key]
for (const key in data) {
    console.log(`${key}: ${data[key]}`);
}
console.log('----------------------');
for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
}
