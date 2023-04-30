const bmi = ({weight, height}) => weight / (height / 100) ** 2;

const member = {name: '山田太郎', age: 38, height: 170, weight: 68};

console.log(bmi(member));