const classes = ['部長', '課長', '主任', '担当'];
const members = [
    { name: '鈴木清子', class: '主任'},
    { name: '山口久雄', class: '部長'},
    { name: '井上太郎', class: '担当'},
    { name: '和田和美', class: '課長'},
    { name: '小森雄太', class: '担当'},
];

console.log(members.sort(function(x, y) {
    return classes.indexOf(x.class) - classes.indexOf(y.class);
}));