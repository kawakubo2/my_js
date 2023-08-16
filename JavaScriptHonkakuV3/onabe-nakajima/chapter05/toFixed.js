const weight = 86;
const height = 181.5;

const bmi = weight / (height / 100) ** 2
console.log(`BMI値は${bmi.toFixed(1)}`);