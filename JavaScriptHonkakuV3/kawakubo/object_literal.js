
// オブジェクトリテラル
const member = { name: '山田太郎', age: 38, weight: 72, height: 172 };
console.log(member);

// 連想配列
const employees = {
    'A001': '田中一郎',
    'A002': '山田太郎'
};

const { weight, height, name, active = true } = member;
console.log(weight, height, name, active);

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}
function bmi2(weight, height) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));
console.log(bmi2(member.weight, member.height));