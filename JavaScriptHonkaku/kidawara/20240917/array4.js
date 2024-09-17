const employees = [
    {number: 1001, name: '山田太郎', salary: {'1': 23, '2': 24, '3': 22}},
    {number: 1002, name: '田中一郎', salary: {'1': 40, '2': 39, '3': 44}},
    {number: 1003, name: '鈴木次郎', salary: {'1': 20, '2': 19, '3': 23}},
    {number: 1004, name: '佐藤勝男', salary: {'1': 28, '2': 28, '3': 27}},
];

/*
各社員の給料の合計と求め表示する
山田太郎 69
田中一郎 123
鈴木次郎 62
佐藤勝男 83
*/

const monthly_salaray = {'1': 100, '2': 200, '3': 300};

let total = 0;
for (const month in monthly_salaray) {
    total += monthly_salaray[month];
}
console.log(total);

total = 0;
for (const value of Object.values(monthly_salaray)) {
    total += value;
}
console.log(total);

for (const employee of employees) {
    let total = 0;
    for (const value of Object.values(employee.salary)) {
        total += value;
    }
    console.log(`${employee.name} ${total}`);
}

