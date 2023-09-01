const member = {
    name: '山田太郎',
    age: 38,
    height: 170,
    weight: 82
};

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(`BMI値: ${bmi(member).toFixed(1)}`);