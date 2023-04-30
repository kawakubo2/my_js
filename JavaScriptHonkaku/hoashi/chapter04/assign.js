function bmi({weight = 70, height = 170}) {
    return weight / Math.pow(height / 100, 2);
}

const members = [
    {name: '山田太郎', height: 172, weight: 70},
    {name: '横山花子', height: 152, weight: 56},
    {name: '田中一郎', height: 180, weight: 88},
    {name: '鈴木二郎', weight: 88},
    {name: '田中一郎', height: 180},
];

for (const member of members) {
    console.log(bmi(member));
}