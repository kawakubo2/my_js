let n = 10;
for (let i = 0; i < n; i++) {
    console.log(i);
}

let numbers = [5, 10, 7, 4, 8, 4, 2, 9];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// ES2015
for (let n of numbers) {
    console.log(n);
}

let employees = {
    'A001': '山田太郎',
    'A002': '横山花子',
    'B001': '田中一郎',
    'C001': '山本久美子',
    'C002': '鈴木次郎'
};

for (let emp_no in employees) {
    console.log(`社員番号: ${emp_no} 社員名: ${employees[emp_no]}`);
}