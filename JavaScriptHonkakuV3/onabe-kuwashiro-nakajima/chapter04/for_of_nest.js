const books = [
    ['ゼロからわかるTypeScript入門', '技術評論社'],
    ['これからはじめるVue.js実践入門', 'SBクリエイティブ'],
    ['Bootstrap5 フロントエンド開発の教科者', '技術評論社']
];

for (let [title, publisher] of books) {
    console.log(`${title} (${publisher} 刊行)`);
}

const kakeibo = [
    ['2023-08-03', '食費', 'コーヒーを購入', 0, 380],
    ['2023-08-10', '給料', '7月の給料', 280000, 0],
    ['2023-08-11', '教養娯楽費', '書籍を購入', 0, 2800],
    ['2023-08-14', '交際費', '同期会の会費', 0, 5000],
    ['2023-08-20', '水道光熱費', '7月の電気代', 0, 7560],
];

for (let [date, category, memo, income, expense] of kakeibo) {
    console.log(`${memo}(${category}) ${date} ${income + expense}円`);
}