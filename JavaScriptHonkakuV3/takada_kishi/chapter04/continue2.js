const words = ['旅行', 'NG', '鞄', 'ラジオ', 'NG', '電信柱', '岸辺', 'NG', 'テレビ'];

console.log('--- NGという単語をスキップする ---');
for (const word of words) {
  if (word === 'NG') continue;
  console.log(word);
}

const words2 = ['旅行', '鞄', 'ラジオ', '終了', '電信柱', '岸辺', 'テレビ'];

console.log('--- 終了という単語が出てきたら処理を終了 ---');
for (const word of words2) {
  if (word === '終了') break;
  console.log(word);
}

