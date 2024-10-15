const members = [
    {name: '山田太郎', age: 38},
    {name: '横山花子', age: 32},
    {name: '田中一郎', age: 55},
    {name: '鈴木次郎', age: 42},
];

console.table(members);

for (const member of members) {
    console.log('はじめまして。私は%s、%d歳です。', member.name, member.age);
}