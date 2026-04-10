const words = ['旅行', 'NG', 'かばん', '電信柱', 'NG', 'テレビ', 'ギター', 'NG', 'ラジオ'];

for (const word of words) {
  if (word === 'NG') continue;
  console.log(word);
}