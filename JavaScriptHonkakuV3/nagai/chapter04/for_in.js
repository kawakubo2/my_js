const data = {
  apple: 150,
  orange: 100,
  banana: 120
};

for (const key in data) {
  console.log(`${key} = ${data[key]}`);
}

const fruits = ['water melon', 'grape', 'pear', 'straw berry'];

for (const index in fruits) {
  console.log(`${index}: ${fruits[index]}`);
}

const employee = {
  employee_id: 10001,
  name: 'Taro Yamada',
  birthdate: '1998-12-15',
  weight: 70,
  height: 170
};

for (const property in employee) {
  console.log(`${property}: ${employee[property]}`);
}

for (const [key, value] of Object.entries(employee)) {
  console.log(`${key}: ${value}`);
}