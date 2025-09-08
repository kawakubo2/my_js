const words = ['旅行', 'かばん', '電信柱', 'NG', 'ラジオ', 'NG', '岸辺', 'テレビ'];
const index = words.indexOf('NG');
if (index > -1) {
    console.log(words.slice(0, index));
}

const lastIndex = words.lastIndexOf('NG');
if (lastIndex > -1) {
    console.log(words.slice(lastIndex + 1));
}
