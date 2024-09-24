// オブジェクトリテラル
const member = {
    name: '星山裕子',
    age: 28,
    weight: 59,
    height: 162
};

/*
問1
オブジェクトmemberを使用して
星山裕子さんの年齢は28歳。
と表示する
*/
console.log(member['name'] + 'さんの年齢は' + member['age'] + '歳。');
console.log(`${member['name']}さんの年齢は${member['age']}歳。`);
console.log(`${member.name}さんの年齢は${member.age}歳。`);