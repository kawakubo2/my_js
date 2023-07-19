let name = '山田太郎';
let age = 38;
let weight = 88;
let height = 181;

function bmi(w, h) {
    return w / (h / 100) ** 2;
}

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`${name}さんのBMI値は${bmi(weight, height).toFixed(1)}です。`);

let a = 100;
let b = 320;
console.log(a + ' + ' + b + ' = ' + (a + b));
console.log(`${a} + ${b} = ${a + b}`);