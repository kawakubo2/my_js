function group_func(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const num of numbers) {
        total += num;
        cnt++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [total, total / cnt, max, min, cnt];
}

const nums = [8, 1, 9, 3, 4, 10, 6, 5, 7, 2];
const result = group_func(nums);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

console.log('--- 分割代入 ----');
let [sum, avg, max, min, count] = group_func(nums);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);
