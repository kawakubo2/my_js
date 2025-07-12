let member = {
    name: '田中一郎',
    email: 'ichiro@tanaka.com',
    age: 55,
    weight: 80,
    height: 180,
};

member = {
    ...member, // 展開演算子(Spread Operator)
    age: 57
}

console.log(member);

function bmi1(w, h) {
    return w / (h / 100) ** 2; 
}

console.log(bmi1(member.weight, member.height));

function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi2(member));