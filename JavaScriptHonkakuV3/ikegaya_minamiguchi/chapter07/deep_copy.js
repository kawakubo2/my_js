const employee1 = {
    name: '山田太郎',
    salaray: {1: 28, 2: 27, 3: 30, 4: 31, 5: 30, 6: 32}
};

const employee2 = employee1;
employee1.salaray['1'] = 27;
console.log(employee1);
console.log(employee2);

const employee3 = {};
for (const key in employee1) {
    employee3[key] = employee1[key];
}
employee1.name = '田中一郎';
employee1.salaray['1'] = 35;
console.log(employee1);
console.log(employee3);

// JSON.parse(JSON.stringify) ---> stringifyで文字列化し、parseでオブジェクトに
// 戻すことで、中の値は同じだが、参照が異なる全く独立したオブジェクトが作れる。
const employee4 = JSON.parse(JSON.stringify(employee1));
employee1.name = '鈴木次郎';
employee1.salaray['1'] = 20;

console.log(employee1);
console.log(employee4);