const words = ['旅行', 'かばん', 'NG', 'ギター', 'ラジオ', 'NG', '岸辺', '電信柱', 'テレビ']

for(const word of words) {
  if (word === 'NG') continue;
  console.log(word);
}