const classes = ["部長", "課長", "主任", "担当"];
const members = [
    { name: "鈴木清子", clazz: "主任", weight: 70, height: 162 },
    { name: "山口久雄", clazz: "部長", weight: 70, height: 178 },
    { name: "井上太郎", clazz: "担当", weight: 70, height: 172 },
    { name: "和田知美", clazz: "課長", weight: 70, height: 153 },
    { name: "小森雄太", clazz: "担当", weight: 70, height: 182 }
];

members.sort(function(m1, m2) {
    return classes.indexOf(m1.clazz) - classes.indexOf(m2.clazz);
})

console.log("------< 役職順にソート >------");
function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}
console.log(members);

console.log("------< BMI順にソート >------");
members.sort(function(m1, m2) {
    return bmi(m1.weight, m1.height) - bmi(m2.weight, m2.height);
})
console.log(members);