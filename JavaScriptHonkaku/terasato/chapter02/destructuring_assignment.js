let numbers = [81, 52, 70, 48, 93, 38, 60, 68, 98, 88];

function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
    }
    return [total, total / cnt, max, min, cnt];
}

let result = group_func(numbers);
console.log(`合計: ${result[0]}`)
console.log(`平均: ${result[1]}`)
console.log(`最大: ${result[2]}`)
console.log(`最小: ${result[3]}`)
console.log(`件数: ${result[4]}`)

let [sum, avg, max, min, count] = group_func(numbers);
console.log(`合計: ${sum}`)
console.log(`平均: ${avg}`)
console.log(`最大: ${max}`)
console.log(`最小: ${min}`)
console.log(`件数: ${count}`)