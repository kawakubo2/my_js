function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

const member = {name: '山田太郎', height: 172, weight: 75};

console.log(`${member['name']}さんのBMI値は${bmi(member)}`);

const name = '田中一郎'
const weight = 80;
const height = 170;
let member2 = {name, weight, height};
console.log(member2);
member2['name'] = '横山花子';
console.log(member2);
name = '鈴木次郎';