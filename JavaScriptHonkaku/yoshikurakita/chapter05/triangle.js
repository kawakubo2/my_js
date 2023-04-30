function getTriangle({ base = 1, height = 1 }) {
    return base * height / 2;
}
console.log(getTriangle({ base: 10, height: 8 }));
console.log(getTriangle({ height: 5 }));
console.log(getTriangle({ base: 9 }));
console.log(getTriangle({}));

function bmi({ weight, height }) {
    return weight / (height / 100) ** 2;
}

let member = { name: '山田太郎', age: 28, weight: 88, height: 180 };

console.log(bmi(member));