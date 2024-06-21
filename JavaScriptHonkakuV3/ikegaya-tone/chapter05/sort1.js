const employees = [
    {name: "ヤマダ", age: 38, weight: 70, height: 167},
    {name: "ヨコヤマ", age: 27, weight: 70, height: 158},
    {name: "タナカ", age: 38, weight: 70, height: 181},
    {name: "ヤマモト", age: 34, weight: 70, height: 165},
    {name: "スズキ", age: 24, weight: 70, height: 175},
];

console.log("---< 名前順 >---");
// employees.sort((e1, e2) => e1['name'] > e2['name'] ? 1: -1);
employees.sort((e1, e2) => {
    if (e1['name'] < e2['name']) {
        return -1;
    } else if (e1['name'] > e2['name']) {
        return 1;
    } else {
        return 0;
    }
})
console.log(employees);
console.log("---< 年齢順 >---");
employees.sort((e1, e2) => e1['age'] - e2['age']);
console.log(employees);
console.log("---< BMI順 >---");
employees.sort((e1, e2) => e1['weight'] / (e1['height'] / 100) ** 2 - e2['weight'] / (e2['height'] / 100) ** 2);
console.log(employees);