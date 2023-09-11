const classes = ['部長', '課長', '主任', '担当'];

const members = [
    { name: '鈴木聖子', clazz: '主任', weight: 60, height: 162 },
    { name: '山口久雄', clazz: '部長', weight: 60, height: 178 },
    { name: '井上太郎', clazz: '担当', weight: 60, height: 182 },
    { name: '和田知美', clazz: '課長', weight: 60, height: 157 },
    { name: '小森雄太', clazz: '担当', weight: 60, height: 168 },
];

members.sort(function(m1, m2) {
    return classes.indexOf(m1.clazz) - classes.indexOf(m2.clazz);
});

console.log(members);