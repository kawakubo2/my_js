const books1 = [
    ['はじめてのJavaScript', 'ABC出版'],
    ['Go言語でマルチコア', 'XYZ出版'],
    ['TypeScriptでReactアプリ作成', 'いろは出版'],
];

for (const [title, publisher] of books1) {
    console.log(`${title} (${publisher})`);
}

console.log('---< オブジェクトの配列 >---');
const books2 = [
    {title: 'はじめてのJavaScript', publisher: 'ABC出版'},
    {title: 'Go言語でマルチコア', publisher: 'XYZ出版'},
    {title: 'TypeScriptでReactアプリ作成', publisher: 'いろは出版'},
    {publisher: 'あいう出版', title: 'COBOLからJavaへの移行ガイド'},
    {title: 'C++でUnrealエンジン入門', publisher: 'X-Game出版', price: 5000}
];

for (const b of books2) {
    console.log(`${b.title} (${b.publisher})`);
}