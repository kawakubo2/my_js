function bmi({height, weight}) {
    return weight / (height / 100) ** 2;
}


const member = {
    name: '山田太郎',
    age: 37,
    weight: 87,
    height: 181
};

const { height, weight } = member; // オブジェクトの分割代入(destructuring assignment)
console.log(`height: ${height} weight: ${weight}`);

console.log(bmi(member));