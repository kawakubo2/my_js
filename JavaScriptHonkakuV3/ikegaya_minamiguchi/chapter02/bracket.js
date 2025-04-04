const employees = [
  {
    name: '山田太郎',
    age: 38,
    salary: {1: 250000, 2: 270000, 3: 300000}
  },
  {
    name: '横山花子',
    age: 35,
    salary: {1: 220000, 2: 250000, 3: 280000}
  },
  {
    name: '田中一郎',
    age: 55,
    salary: {1: 500000, 2: 500000, 3: 500000}
  },
];

for (const employee of employees) {
  console.log(employee.name);
  let s = '';
  for (const month in employee.salary) {
    s += employee.salary[month] + ' ';
  }
  console.log(s);
}

// console.log(employees[0].salary.3);
console.log(employees[0].salary['3']);