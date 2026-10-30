const readline = require('readline-sync');

const employee_map = new Map([
  ['A0001', {name: '山田太郎', age: 33, weight: 70, height: 168}],
  ['A0002', {name: '横山花子', age: 40, weight: 50, height: 158}],
  ['B0011', {name: '田中一郎', age: 55, weight: 70, height: 178}],
  ['C0001', {name: '山本久美子', age: 48, weight: 67, height: 170}],
]);

console.log(employee_map);

/*
Mapにキーがない場合、キーと値の登録
Mapにキーがある場合、値の上書き
*/
if (!employee_map.has('C002')) {
  employee_map.set('C0002', {name: '鈴木次郎', age: 28, weight: 80, height: 175});
  console.log(employee_map);
} else {
  console.log('C0002に社員は既に存在します。');
}

console.log('--- 終了したい場合はxxxを入力');
while (true) {
  const employee_id = readline.question('社員ID: ');
  if (employee_id === 'xxx') break;
  const employee = employee_map.get(employee_id);
  if (employee) {
    console.log(employee);
  } else {
    console.log(`${employee_id}に該当する社員はいません。`);
  }
}