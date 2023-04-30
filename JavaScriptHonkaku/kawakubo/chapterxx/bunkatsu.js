function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

let members = [
    { name: '山田', weight: 80, height: 179},
    { name: '横山', weight: 55, height: 158},
    { name: '山田', weight: 82, height: 180},
];

for (let member of members) {
    console.log(`${member['name']} bmi:${bmi(member)}`);
}