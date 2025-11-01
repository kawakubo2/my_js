function bmi1(weight, height) {
    return weight / (height / 100) ** 2;
}

function bmi2({weight, height}) {
    return weight / (height / 100) ** 2;
}

const member = {
    name: '山田太郎',
    age: 38,
    weight: 78,
    height: 172
};

console.log(bmi1(member.weight, member.height));
console.log(bmi2(member));

// オブジェクトの分割代入
const { height, name } = member;
console.log(`${name}さんの身長は${height}cmです。`);