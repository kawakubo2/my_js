const employee = {
    number: '000013',
    name: '山田太郎', // nameプロパティ
    birthdate: '1990-09-24',
    email: 'taro@yamada.com'
};

console.log(employee);
console.log(employee['number']); // プロパティ構文、ブラケット構文
console.log(employee.number);

employee['birthdate'] = '1992-09-24'; 
console.log(employee);

console.log('--- オブジェクトからプロパティとその値を取り出す ---');
console.log('--- for in 命令による取り出し ---')
for (const prop in employee) {
    console.log(`${prop}: ${employee[prop]}`)
}
console.log('--- Object.entriesによる取り出し ---');
for (const [ key, value] of Object.entries(employee)) {
    console.log(`${key}: ${value}`);
}