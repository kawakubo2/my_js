const numbers = [9, 4, 6, 10, 1, 8, 3, 5, 2, 7];

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

const result = group_func(numbers);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

const [sum, avg, max, min, count] = group_func(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);