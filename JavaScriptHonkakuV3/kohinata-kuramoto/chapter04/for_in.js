// 連想配列
const employees = {
	'A0001': '山田',
	'A0010': '田中',
	'B0020': '鈴木'
};

for (const num in  employees) {
  console.log(`${num}: ${employees[num]}`);
}

console.log('----------------------------------------');
// オブジェクトリテラル
const employee = {
	employee_num: 10001,
	name: '山田太郎',
	birthDate: '2000-04-05',
	email: 'taro.yamada@atrris.com'
};

for (const prop in employee) {
	console.log(`${prop}: ${employee[prop]}`);
}

console.log('----------------------------------------');
for (const [key, value] of Object.entries(employee)) {
	console.log(`${key}: ${value}`);
}