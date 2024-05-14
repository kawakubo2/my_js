const height = Number.parseFloat(prompt("身長(cm)"));
const weight = Number.parseFloat(prompt("体重(kg)"));

const bmi = weight / (height / 100) ** 2;

console.log(`あなたのBMI値は${bmi.toFixed(1)}`)
