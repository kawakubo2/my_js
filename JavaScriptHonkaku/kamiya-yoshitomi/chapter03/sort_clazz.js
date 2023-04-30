const classes = ['部長', '課長', '主任', '担当'];
const members = [
    {name: '鈴木清子', clazz: '主任', weight: 70, height: 168 },
    {name: '山口久雄', clazz: '部長', weight: 85, height: 178 },
    {name: '井上太郎', clazz: '担当', weight: 78, height: 172 },
    {name: '和田知美', clazz: '課長', weight: 55, height: 158 },
    {name: '小森雄太', clazz: '担当', weight: 82, height: 175 },
];

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

console.log(members.sort(function(x, y) {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));

members.sort(function(x, y) {
    return bmi(x['weight'], x['height']) - bmi(y['weight'], y['height']);
});

console.log(members);

