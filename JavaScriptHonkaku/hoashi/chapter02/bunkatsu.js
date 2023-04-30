const numbers = [8, 2, 5, 9, 1, 10, 6, 7, 3, 4];

function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

let result = group_func(numbers);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);
console.log(result[0]);

let [sum, avg, max, min, count] = group_func(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);

const member = {name: 'Yamada', age: 38, weight: 92, height: 181.5, color: 'yellow', bloodtype: 'B'};
function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));

let msg;
console.log(msg ? msg : 'エラーなし');