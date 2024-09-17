const employees = [
    {number: 1001, name: '山田太郎', age: 40, weight: 78, height: 178},
    {number: 1002, name: '田中一郎', age: 55, weight: 83, height: 182},
    {number: 1003, name: '鈴木次郎', age: 28, weight: 68, height: 172},
    {number: 1004, name: '佐藤勝男', age: 23, weight: 75, height: 175},
];

/*
山田太郎 40
田中一郎 55
鈴木次郎 28
佐藤勝男 23
*/
for (const employee of employees) {
    console.log(`${employee.name} ${employee.age}`)
}

/*
年齢が40以上の社員の、社員番号と年齢を表示
1001 山田太郎
1002 田中一郎
*/