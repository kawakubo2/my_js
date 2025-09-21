const members = [
    {
        number: 2003,
        name: 'Taro Yamada',
        age: 38,
        height: 172,
        wiehgt: 75
    },
    {
        number: 1773,
        name: 'Jiro Suzuki',
        age: 53,
        height: 168,
        wiehgt: 80 
    },
    {
        number: 2001,
        name: 'Aiko Goto',
        age: 44,
        height: 160,
        wiehgt: 58 
    },
    {
        number: 1007,
        name: 'Jun Maeda',
        age: 27,
        height: 165,
        wiehgt: 60 
    },
];

console.log('--- 年齢順 ---');
members.sort((m1, m2) => m1.age - m2.age);
members.forEach((m) => console.log(m));

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

console.log('--- BMI順 ---');
members.sort((m1, m2) => bmi(m1.weight, m1.height) - bmi(m2.weight, m2.height))
members.forEach((m) => console.log(m));