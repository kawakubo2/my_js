const member = {name: '山田太郎', birthdate: '1999-12-31', gender: 'male'};
/*
{key1: value1, key2: value2, ...} というデータ構造を連想配列またはオブジェクトリテラルと呼ぶ
*/
console.log('---< 連想配列(オブジェクトリテラル)専用の繰返し構文 >---');
for (const key in member) {
    console.log(key + ':' + member[key]);
}
console.log('キーと値を同時に取り出す方法')
for (const [key, value] of Object.entries(member)) {
    console.log(key + ':' + value);
}
