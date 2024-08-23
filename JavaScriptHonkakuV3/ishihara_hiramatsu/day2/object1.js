const member = {name: '山田太郎', birthdate: '1999-12-31', gender: 'male'};
/*
{key1: value1, key2: value2, ...} というデータ構造を連想配列またはオブジェクトリテラルと呼ぶ
*/
console.log(member['name']); // ブラケット構文
console.log(member.name); // プロパティ構文またはドット構文
console.log(member.birthdate);
console.log(member.gender);