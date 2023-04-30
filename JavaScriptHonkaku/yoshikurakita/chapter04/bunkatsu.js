function bmi({ weight, height }) {
    return weight / (height / 100) ** 2;
}

let members = [
    { name: '山田太郎', weight: 72, height: 168 },
    { name: '横山花子', weight: 55, height: 160 },
    { name: '田中一郎', weight: 80, height: 180 }
];

for (let member of members) {
    console.log(bmi(member));
}