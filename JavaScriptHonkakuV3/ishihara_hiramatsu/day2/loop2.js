const members = ['山田', '横山', '田中', '山本', '鈴木', '星山', '佐藤'];
//                 0       1      2       3       4      5       6    <---インデクス(添字)
// members.length --- members配列の要素数
console.log('---< ES2015より前の書き方 >---')
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
console.log('---< ES2015以降の書き方 >---');
console.log('--- 配列の先頭から末尾まで取り出すための繰返し構文 >---');
for (const member of members) {
    console.log(member);
}