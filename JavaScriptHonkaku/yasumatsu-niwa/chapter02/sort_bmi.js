const members = [
    {name: '山田太郎', weight: 70, height: 178 },
    {name: '田中一郎', weight: 70, height: 168 },
    {name: '鈴木次郎', weight: 70, height: 181 },
    {name: '佐藤勝男', weight: 70, height: 175 },
];

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

members.sort(function(x, y) {
    return bmi(x.weight, x.height) - bmi(y.weight, y.height);
});

console.log(members);