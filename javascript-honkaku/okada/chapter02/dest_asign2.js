let person = {
    name: '田中一郎',
    height: 170,
    weight: 78
};

function bmi({weight, height}) {
    return weight / Math.pow(height / 100, 2);
}
// let {weight, height} = {name: '田中一郎', height: 170, weight: 78}
console.log(bmi(person));