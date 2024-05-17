const member = {
    id: 101,
    name: '田中一郎',
    birthdate: '1972-07-14',
    weight: 75,
    height: 177,
    123: 'abc'
};

console.log(member.name); // ドット演算子
console.log(member['name']); // ブラケット構文
console.log(member['123']);