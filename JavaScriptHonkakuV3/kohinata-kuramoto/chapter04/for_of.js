const employees = [
  {name: '山田太郎', age: 38, email: 'taro@yamada.com'},
  {name: '横山花子', age: 27, email: 'hanako@yokoyama.com'},
  {name: '田中一郎', age: 55, email: 'ichiro@tanaka.com'},
];

for (const employee of employees) {
  console.log('-----------------')
  console.log(`${employee['name']}`);
  console.log(`${employee['age']}`);
  console.log(`${employee['email']}`);
}


console.log('============================');
for (const employee of employees) {
  console.log('-----------------')
  console.log(`${employee.name}`);
  console.log(`${employee.age}`);
  console.log(`${employee.email}`);
}

console.log('============================');
employees.forEach(emp => console.log(`${emp.name} ${emp.age}`));