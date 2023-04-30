let numbers = [1.2, 25.4, 5.2, 7.3, 9.2];

function group_func(nums) {
    let total = 0;
    let max = nums[0];
    let min = nums[0];
    let cnt = 0;
    for (let n of nums) {
        total += n;
        if (n > max) max = n;
        if (n < min) min = n;
        cnt++;
    }
    return [total, total/cnt, max, min, cnt];
}

let result = group_func(numbers);
console.log('合計:' + result[0]);
console.log('平均:' + result[1]);
console.log('最大:' + result[2]);
console.log('最小:' + result[3]);
console.log('件数:' + result[4]);

let [sum, avg, max, min, count] = group_func(numbers);
console.log('合計:' + sum);
console.log('平均:' + avg);
console.log('最大:' + max);
console.log('最小:' + min);
console.log('件数:' + count);

let members = [
    { name: '山田太郎', weight: 72, height: 168},
    { name: '田中一郎', weight: 68, height: 172},
    { name: '鈴木次郎', weight: 80, height: 180},
];

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

for (let member of members) {
    console.log(member['name'] + ' BMI:' + bmi(member));
}

for (let i = 0; i < members.length; i++) {
    console.log(members[i]['name'] + ' BMI:' + bmi(members[i]));
}

let m = { name: '山田太郎', weight: 72, height: 168};
let {height, weight} = m;
console.log(weight);
console.log(height);