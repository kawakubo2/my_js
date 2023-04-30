let classes = ['部長', '課長', '主任', '担当'];
let members = [
        {name: '鈴木清子', clazz: '主任'},
        {name: '山口久雄', clazz: '部長'},
        {name: '井上太郎', clazz: '担当'},
        {name: '和田和美', clazz: '課長'},
        {name: '小森雄太', clazz: '担当'}
];

members.sort((m1, m2) => {
    return classes.indexOf(m1.clazz) - classes.indexOf(m2.clazz);
})
console.log(members);