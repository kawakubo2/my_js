let member = { name: '山田太郎', age: 37, weight: 72, height: 175};

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));

let { weight, height } = member; // オブジェクトの分割代入
console.log(`weight = ${weight} height = ${height}`);