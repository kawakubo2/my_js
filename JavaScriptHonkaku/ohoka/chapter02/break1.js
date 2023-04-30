let words = ['旅行', '鞄', 'NG', '電信柱', 'ギター', 'NG', '岸辺', 'ラジオ']

for (let word of words) {
    if (word == "NG") continue;
    console.log(word);
}

