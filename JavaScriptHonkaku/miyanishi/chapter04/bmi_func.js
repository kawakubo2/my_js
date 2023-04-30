function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

let members = [
    { name: '山田太郎', weight: 78, height: 168 },
    { name: '田中一郎', weight: 72, height: 172 },
    { name: '鈴木次郎', weight: 85, height: 180 },
];

for (let member of members) {
    console.log(`${member.name}さんのBMI値: ${bmi(member)}`);
}