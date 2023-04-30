const member = {name: '山田太郎', age: 38, weight: 80, height: 172};

function bmi1(weight, height) {
    return weight / (height / 100) ** 2;
}

console.log(bmi1(member.weight, member.height));

function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi2(member));

const name = '田中一郎';
const age = 48;
const weight = 80;
const height = 177;

const member2 = {name, age, weight, height};
console.log(member2);

const bloodtype = 'AB';
const member3 = {...member, bloodtype};
console.log(member3);