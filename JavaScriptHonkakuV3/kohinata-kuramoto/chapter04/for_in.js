const employees = {
	'A0001': '山田',
	'A0010': '田中',
	'B0020': '鈴木'
};

for (const num in  employees) {
  console.log(`${num}: ${employees[num]}`);
}

const employee = {
	employee_num: 10001,
	name: '山田太郎',
	birthDate: '2000-04-05',
	email: 'taro.yamada@atrris.com'
};