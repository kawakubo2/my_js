function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle({base: 10, height: 8}));
console.log(getTriangle({height: 9, base: 7}));
console.log(getTriangle({base: 12}));
console.log(getTriangle({height: 5}));
console.log(getTriangle({}));

const member = { name: '山田太郎', age: 38, weight: 92, height: 181 };

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));

let name = '山田太郎';
let age = 38;
let member2 = {name, age};
console.log(member2);
let weight = 70;
let height = 168;
let member3 = { ...member2,  weight, height };
console.log(member3);