/*
BMI = 体重(kg) / 身長(m) ** 2
*/
function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

const w1 = 80;
const h1 = 172;

console.log(`体重${w1}kg, 身長${h1}cmの時、BMI値は${bmi(w1, h1)}`);

const members = [
    { name: '山田太郎', age: 42, weight: 68, height: 169, salary: {1: 23, 2: 28, 3: 30, 4: 25} },
    { name: '田中一郎', age: 55, weight: 83, height: 181, salary: {1: 48, 2: 43, 3: 40, 4: 52} },
    { name: '鈴木次郎', age: 28, weight: 78, height: 172, salary: {1: 31, 2: 30, 3: 29, 4: 30} },
    { name: '佐藤勝男', age: 37, weight: 80, height: 170, salary: {1: 33, 2: 31, 3: 35, 4: 30} },
];
/*
山田太郎 25.3
田中一郎 26.0
・・・
*/
for (const member of members) {
    console.log(`${member.name} ${bmi(member.weight, member.height)}`);
}

console.log('---------------------------------');

console.log('--- オブジェクトの分割代入を使用した例 ---');
function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}
for (const member of members) {
    console.log(`${member.name} ${bmi2(member)}`);
}

