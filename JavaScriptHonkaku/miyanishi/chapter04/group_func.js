// group_func.js

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
    return [total, total / cnt, max, min, cnt];
}

let [sum, avg, max, min, count ] = group_func([5, 12, 10, 9, 7, 2, 3, 16, 4, 8]);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);