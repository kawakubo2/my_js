let nums = [8, 12, 1, 2, 21, 3, 18];

nums.sort(function(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }

});

let members = [
    { name: 'Yamada', height: 1.68, weight: 72},
    { name: 'Yokoyama', height: 1.60, weight: 72},
    { name: 'Tanaka', height: 1.80, weight: 72},
    { name: 'Suzuki', height: 1.73, weight: 72}
];

function bmi({weight, height}) {
    return weight / Math.pow(height, 2);
}

console.log('---< sort前 >---');
console.log(members);

members.sort(function(m1, m2) {
    if (bmi(m1) < bmi(m2)) {
        return -1;
    } else if (bmi(m1) > bmi(m2)) {
        return 1;
    } else {
        return 0;
    }
});

console.log('---< sort後 >---');
console.log(members);
