const members = [
    { name: '山田太郎', weight: 70, height: 172 },
    { name: '田中一郎', weight: 70, height: 180 },
    { name: '鈴木次郎', weight: 70, height: 163 },
    { name: '佐藤勝男', weight: 70, height: 175 },
];

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

members.sort(function(m1, m2) {
    return bmi(m1.weight, m1.height) - bmi(m2.weight, m2.height);
});

console.log(members);