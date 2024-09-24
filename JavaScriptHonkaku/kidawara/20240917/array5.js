const employees = [
    {number: 1001, name: '山田太郎', age: 38, salary: {'2': 24, '3': 22, '4': 25}},
    {number: 1002, name: '田中一郎', age: 58, salary: {'1': 40, '2': 39, '3': 44, '4': 47}},
    {number: 1003, name: '鈴木次郎', age: 24, salary: {'1': 20, '2': 19, '3': 23, '4': 22}},
    {number: 1004, name: '佐藤勝男', age: 31, salary: {'3': 27, '4': 30}},
];

/*
各社員の1月～3月の給料の合計を求め表示する
山田太郎 xxx
田中一郎 xxx
鈴木次郎 xxx
佐藤勝男 xxx
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

/*
オブジェクトの配列からオブジェクトを取り出し、社員番号と名前を表示する
1001 山田太郎
1002 田中一郎
1003 鈴木次郎
1004 佐藤勝男
*/

/*
オブジェクトの配列から年齢が30以上の社員の給料の総合計を求めて表示する。
*/

/*
const salary = {1: 100, 2: 200, 3: 300};
const values = Object.values(salary);
let sum = 0;
for (const value of values) {
    sum += value;
}
console.log(sum);
*/