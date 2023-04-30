const classes = ['部長', '課長', '主任', '担当'];

const members = [
    { name: '鈴木清子', clazz: '主任', weight: 60, height: 158},
    { name: '山口久雄', clazz: '部長', weight: 60, height: 172},
    { name: '井上太郎', clazz: '担当', weight: 60, height: 162},
    { name: '和田知美', clazz: '課長', weight: 60, height: 155},
    { name: '小森雄太', clazz: '担当', weight: 60, height: 180},
];

members.sort(function(x, y) {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
});

console.log(members);

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

members.sort(function(x, y) {
    return bmi(x) - bmi(y);
});

console.log(members);