const name = "田中一郎";
let age = 55;
const weight = 87;
const height = 181;

function bmi(weight, height) {
    return weight / ((height / 100) ** 2);
}

console.log(name + "さん(" + age + "歳)のBMI値は" + bmi(weight, height).toFixed(1));
console.log(`${name}さん(${age}歳)のBMI値は${bmi(weight, height).toFixed(1)}`);

age = -10;
const message = `年齢は0以上の
整数値を入力してください。
入力値: ${age}`;
if (age < 0) {
    console.log(message)
}