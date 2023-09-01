const numbers = [9, 1, 5, 2, 6, 8, 4, 3, 10, 7];

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

const [sum, avg, max, min, count]= group_func(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);

const member = {
    name: '山田太郎',
    age: 38,
    weight: 87,
    height: 181
};

let {weight, height} = member;
console.log(weight);
console.log(height);

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

console.log(bmi(member));

let message = 'Xは整数値を入力してください';

console.log(message ?? '特になし');