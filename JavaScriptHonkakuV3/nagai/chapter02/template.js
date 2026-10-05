const name = '山田太郎';
const age = 33;
const weight = 84;
const height = 180;

const bmi = weight / (height / 100) ** 2; // bmiを説明変数と呼ぶ
console.log(`${name}さんの年齢は${age}歳です。BMI値は${bmi.toFixed(1)}`);
console.log(`${name}さんの年齢は${age}歳です。BMI値は${(weight / (height / 100) ** 2).toFixed(1)}`);

const s = `${name}さんは、昨日
大阪出張でした。`
console.log(s);
const s2 = `${name}さんは、昨日\
大阪出張でした。`
console.log(s2);

function calcBMI(weight, height) {
  return weight / (height / 100) ** 2;
}

console.log(`${name}さんの年齢は${age}歳です。BMI値は${calcBMI(weight, height).toFixed(1)}`);