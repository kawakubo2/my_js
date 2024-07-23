let pet = {
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    },
};
// オブジェクトの複製（let copied = { ...pet }; でも可）
let copied = Object.assign({}, pet);
console.log(pet);
// 結果：{name: 'キラ', "description": {"birth": "2014-02-15"}}
console.log(copied);
// 結果：{name: 'キラ', "description": {"birth": "2014-02-15"}}
console.log(pet === copied); // 結果：false

pet.description.birth = '2024-07-23';
console.log(pet);
console.log(copied);

pet.name = '山田キラ';
console.log(pet);
console.log(copied);