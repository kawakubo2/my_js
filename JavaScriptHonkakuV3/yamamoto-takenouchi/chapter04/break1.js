const words = ['旅行', 'かばん', 'ギター', 'テレビ', '終了', '電信柱', '岸辺', 'ラジオ'];

for (const word of words) {
    if (word === '終了') {
        break;
    }
    console.log(word);
}