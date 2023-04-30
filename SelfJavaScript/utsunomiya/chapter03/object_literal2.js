// object_literal2.js
let scores = [
    { name: '山田太郎', score: { 国語: 70, 数学: 58, 英語: 80 } },
    { name: '横山花子', score: { 国語: 55, 数学: 78, 英語: 90 } },
    { name: '田中一郎', score: { 国語: 90, 数学: 62, 英語: 82 } },
];

/*
  名前     国語 数学 英語 合計
  山田太郎   70  58   80  208
  横山花子   55  78   90  223
  田中一郎   90  62   82  234
*/
console.log('名前　　　国語 数学 英語 合計');
for (let person of scores) {
    let s = person['name'];
    let score = person['score'];
    s += '   ' + score['国語'] + '   ' + score['数学'] + '   ' + score['英語'];
    total = score['国語'] + score['数学'] + score['英語'];
    s += '  ' + total;
    console.log(s);
}