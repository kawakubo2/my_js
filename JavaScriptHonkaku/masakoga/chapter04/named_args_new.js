function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log('---< base省略, height省略 >---');
console.log(getTriangle({}));
console.log('---< base省略 >---');
console.log(getTriangle({height: 3}));   
console.log('---< height省略 >---');
console.log(getTriangle({base: 5}));
console.log('---< 省略なし >---');
console.log(getTriangle({base: 5, height: 3}));
console.log('---< 省略なし(並び順を変える) >---');
console.log(getTriangle({height: 3, base: 5}));

let members = [
    { name: '山田太郎', age: 24, height: 178, weight: 80},
    { name: '横山花子', age: 32, height: 160, weight: 52},
    { name: '田中一郎', age: 48, height: 170, weight: 68},
    { name: '山本久美子', age: 40, height: 155, weight: 60},
];

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

for (member of members) {
    console.log(`${member.name}: bmi値: ${bmi(member)}`);
}