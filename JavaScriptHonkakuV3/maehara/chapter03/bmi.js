function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

const member = {name: "星山裕子", age: 39, weight: 55, height: 157};

const { height, weight } = member;
console.log(`height=${height}`);
console.log(`weight=${weight}`);

console.log(bmi(member));