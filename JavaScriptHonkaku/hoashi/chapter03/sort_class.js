const classes = ['部長', '課長', '主任', '担当'];

let members = [
    {name: '鈴木清子', clazz: '主任', weight: 70, height: 160},
    {name: '山口久雄', clazz: '部長', weight: 70, height: 172},
    {name: '井上太郎', clazz: '担当', weight: 70, height: 180},
    {name: '和田知美', clazz: '課長', weight: 70, height: 172},
    {name: '小森雄太', clazz: '担当', weight: 70, height: 175},
];

const bmi = ({weight, height}) => weight / Math.pow(height / 100, 2);

members = members.map(m => ({...m, bmi:bmi(m).toFixed(1)}));

members.sort((x, y) => classes.indexOf(x.clazz) - classes.indexOf(y.clazz));
console.log(members);

/*
bmi = 体重(kg) / (身長(m)の2乗)
*/

members.sort((x, y) => bmi(x) - bmi(y));
console.log(members);