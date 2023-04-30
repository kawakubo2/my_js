function bmi ({weight, height}) {
    return weight / (height / 100) ** 2;
}

let member = {
    name: '山田太郎',
    age: 38,
    weight: 70,
    height: 170
};

console.log(bmi(member));