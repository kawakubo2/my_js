function getTriangle({ base = 1, height = 1 }) {
    return base * height / 2;
}

console.log(getTriangle({ base: 10, height: 20 }));
console.log(getTriangle({ height: 20, base: 10 }));
console.log(getTriangle({ base: 10 }));
console.log(getTriangle({ height: 20 }));
console.log(getTriangle({}));

function bmi({ weight, height }) {
    return weight / (height / 100) ** 2;
}

let members = [
    { name: '山田太郎', weight: 65, height: 170 },
    { name: '田中一郎', weight: 78, height: 178 },
    { name: '鈴木次郎', weight: 70, height: 172 }
]

for (let member of members) {
    console.log(bmi(member));
}