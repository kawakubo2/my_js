const members = [
    {name: 'Yamada', weight: 80, height: 172},
    {name: 'Tanaka', weight: 83, height: 181},
    {name: 'Suzuki', weight: 72, height: 168},
    {name: 'Sato', weight: 100, height: 181},
];

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

for (const member of members) {
    console.log(member.name.padEnd(6, ' ') + ': ' + bmi(member.weight, member.height).toFixed(1));
}