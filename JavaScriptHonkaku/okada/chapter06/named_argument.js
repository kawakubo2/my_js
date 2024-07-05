const members = [
    {name: 'ヤマダ', age: 38, height: 172, weight: 68},
    {name: 'ヨコヤマ', age: 28, height: 162, weight: 58},
    {name: 'タナカ', age: 38, height: 180, weight: 82},
];

function bmi1(weight, height) {
    return weight / (height / 100) ** 2;
}

for (const member of members) {
    console.log(`${member['name']}さんのBMI値は${bmi1(member['weight'], member['height']).toFixed(1)}`);
}

console.log('---< 引数をオブジェクトで定義した場合 >---');
function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}

for (const member of members) {
    console.log(`${member['name']}さんのBMI値は${bmi2(member).toFixed(1)}`);
}

console.log(members[0]);
const {weight, height} = members[0];
console.log(`体重: ${weight} 身長: ${height}`);