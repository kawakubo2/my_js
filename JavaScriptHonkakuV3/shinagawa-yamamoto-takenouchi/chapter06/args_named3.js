const member = {name: '山田太郎', age: 38, weight: 82, height: 168};

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(`${member.name}さんのBMI値は${bmi(member)}です。`);