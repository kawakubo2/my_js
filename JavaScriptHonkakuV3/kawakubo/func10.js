let name = '山田太郎';
let age = 38;
let weight = 72;
let height = 168;

console.log(`${name}さんの年齢は38歳です。`);

function bmi(weight, height) {
  return weight / (height / 100) ** 2;
}

console.log(bmi(weight, height));