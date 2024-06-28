const storage = localStorage;

const employee = JSON.parse(storage.getItem('employee'));

console.log(employee);

storage.removeItem('employee');