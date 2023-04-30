function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        cnt++;
        if (nums[i] > max) max = nums[i];
        if (nums[i] < min) min = nums[i];
    }
    return [total, total / cnt, max, min, cnt];
}

let numbers = [5, 9, 7, 4, 1, 10, 8, 2, 3, 6];

let result = group_func(numbers);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`件数: ${result[4]}`);

let [sum, avg, max, min, count] = group_func(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);

let x = 1;
let y = 2;
[x, y] = [y, x];