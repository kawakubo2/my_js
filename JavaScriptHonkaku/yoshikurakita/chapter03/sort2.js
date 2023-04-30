let members = [
    { name: '山田太郎', weight: 72, height: 178 },
    { name: '田中一郎', weight: 72, height: 168 },
    { name: '鈴木次郎', weight: 72, height: 182 },
    { name: '佐藤勝男', weight: 72, height: 170 }
];

function bmi(weight, height) {
    return weight / ((height / 100) ** 2);
}

members.sort(function(x, y) {
    if (bmi(x.weight, x.height) < bmi(y.weight, y.height)) {
        return -1;
    } else if (bmi(x.weight, x.height) > bmi(y.weight, y.height)) {
        return 1;
    } else {
        return 0;
    }
});

console.log(members);