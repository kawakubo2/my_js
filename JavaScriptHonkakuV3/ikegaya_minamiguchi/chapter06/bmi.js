function bmi1(weight, height) {
    return weight / ((height / 100) ** 2);
}

const w = 79.5;
const h = 181;
console.log(bmi1(w, h));

const member = {
    name: '山田太郎',
    age: 38,
    height: 168,
    weight: 72
};

console.log(bmi1(member.weight, member.height));

function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi2(member));