const temperatures = [30, 29, 35, 34, 120, 33, 29, 30, -30];

for (const temp of temperatures) {
    if (temp < 0 || temp > 50) continue;
    console.log(temp);
}

for (const temp of temperatures) {
    if (temp >= 0 && temp <= 50) {
        console.log(temp);
    }
}

const words = ['旅行', 'かばん', 'テレビ', 'NG', '電信柱', 'NG', 'ラジオ', '岸辺'];

for (const word of words) {
    if (word === 'NG') continue;
    console.log(word);
}