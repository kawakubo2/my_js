/*
for (const キー in 連想配列) {
    console.log(連想配列[キー]);
}
*/

const employees = {
    "A1001": "田中一郎",
    "A1012": "星山裕子",
    "B0039": "鈴木次郎",
    "B0117": "佐藤勝男"
}

console.log(employees["B0039"]);
console.log(employees["A1001"]);
console.log(employees["Z0001"]);

for (const key in employees) {
    console.log(`${key}: ${employees[key]}`);
}