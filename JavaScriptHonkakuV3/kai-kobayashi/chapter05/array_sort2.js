const members = [
    {name: '山田太郎', clazz: "主任", age: 38, weight: 72, height: 172 },
    {name: '田中一郎', clazz: "部長", age: 55, weight: 72, height: 178 },
    {name: '鈴木次郎', clazz: "担当", age: 43, weight: 72, height: 168 },
    {name: '佐藤勝男', clazz: "課長", age: 28, weight: 72, height: 180 },
];

members.sort(function(m1, m2) {
    return m1.age - m2.age;
});

console.log(members);

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

members.sort(function(m1, m2) {
    return bmi(m1) - bmi(m2);
});

console.log(members);

// 部長、課長、主任、担当
const classes = ['部長', '課長', '主任', '担当'];

members.sort(function(m1, m2) {
    return classes.indexOf(m1.clazz) - classes.indexOf(m2.clazz);
});

console.log(members);