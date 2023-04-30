let m1 = {name: '山田太郎', weight: 68, height: 172};

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

function add_bmi(member) {
    member['bmi'] = bmi(member['weight'], member['height']);
}

console.log(m1);
add_bmi(m1);
console.log(m1);