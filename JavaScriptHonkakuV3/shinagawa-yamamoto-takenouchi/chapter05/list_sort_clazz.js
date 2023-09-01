const classes = ['部長', '課長', '主任', '担当'];
const members = [
    {name: '鈴木清子', clazz: '主任', weight: 60, height: 152},
    {name: '山口久雄', clazz: '部長', weight: 60, height: 178},
    {name: '井上太郎', clazz: '担当', weight: 60, height: 168},
    {name: '和田知美', clazz: '課長', weight: 60, height: 172},
    {name: '小森雄太', clazz: '担当', weight: 60, height: 165}
];

console.log(members.sort(function(x, y) {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));

console.log(members.sort(function(x, y) {
    return x.weight / (x.height / 100) ** 2 - y.weight / (y.height / 100) ** 2;
}));