const members = [
    {id: 1, name: '山田太郎'},
    {id: 2, name: '横山花子'},
    {id: 3, name: '田中一郎'},
    {id: 4, name: '山本久美子'},
    {id: 7, name: '鈴木次郎'},
];

const id_str = members
    .filter(m => m.name.includes('山'))
    .map(m => m.id)
    .join(',');
console.log(id_str);

const name_str = members.map(m => m.name).join('\t');
console.log(name_str);