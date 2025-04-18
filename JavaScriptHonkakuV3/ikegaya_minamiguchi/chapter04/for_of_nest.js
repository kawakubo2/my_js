const books = [
  ['ゼロからわかる TypeScript入門', '技術評論社'],
  ['これからはじめるVue.js実践入門', 'SBクリエイティブ'],
  ['Bootstrap 5 フロントエンド開発の教科書', '技術評論社']
];

for (const book of books) {
  console.log(`${book[0]} (${book[1]} 刊行)`);
}

for (const [title, publisher] of books) {
  console.log(`${title} (${publisher} 刊行)`);
}