let members = [
    { name: 'Yamada', age: 28, weight: 70, height: 178 },
    { name: 'Yokoyama', age: 34, weight: 68, height: 159 },
    { name: 'Tanaka', age: 58, weight: 78, height: 172 },
];

function bmi({weight, height}) {
    return weight / ((height / 100) ** 2);
}

for (let member of members) {
    console.log(`${member.name}さんのBMI値は${bmi(member)}`);
}