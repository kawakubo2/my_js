let result = 0;
let i;
for (i = 1; i <= 100; i++) {
    result += i;
    if (result > 1000) {
        break;
    }
}
console.log('合計値が1000を超えるのは' + i);

let words = ['旅行', 'かばん', '電信柱', '岸辺', '終了', 'ラジオ', '紙風船'];

for (let word of words) {
    if (word === '終了') {
        break;
    }
    console.log(word);
}

let words2 = ['旅行', 'かばん', 'NG', '電信柱', '岸辺', 'NG', 'ラジオ', '紙風船'];
for (let word of words2) {
    if (word === 'NG') {
        continue;
    }
    console.log(word);
}