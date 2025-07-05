const members = [
    {
        name: "山田太郎",
        age: 28,
        height: 172,
        weight: 75
    },
    {
        name: "田中一郎",
        age: 55,
        height: 180,
        weight: 77
    },
    {
        name: "鈴木次郎",
        age: 43,
        height: 175,
        weight: 83 
    }
];

function bmi(height, weight) {
    return weight / (height / 100) ** 2;
}

for (const m of members) {
    const b = bmi(m.height, m.weight);
    console.log(`${m.name}さんの年齢は${m.age}歳です。BMI値は${b.toFixed(1)}。`);
}