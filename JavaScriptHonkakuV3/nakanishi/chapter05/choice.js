function choice(array) {
    if (!Array.isArray(array)) {
        throw new Error('配列ではない');
    }
    return array[Math.floor(Math.random() * array.length)];
}

const fruits = ['バナナ', 'リンゴ', 'オレンジ', 'ナシ', 'ブドウ'];
const sports = ['バスケ', '野球', 'テニス', '水泳', 'バレーボール', '卓球'];
console.log(`あなたは朝${choice(fruits)}を食べて、午後${choice(sports)}をするといいでしょう。`);