const words = ['旅行', '鞄', 'NG', 'ギター', 'テレビ', 'NG', '電信柱', '岸辺', 'NG', 'ラジオ'];

for (const word of words) {
    if (word === 'NG') {
        continue;
    }
    console.log(word);
}