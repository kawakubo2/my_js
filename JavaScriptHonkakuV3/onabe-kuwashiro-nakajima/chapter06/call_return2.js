function group_func(...nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        total += num;
        cnt++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [total, total / cnt, max, min, cnt];
}

const result = group_func(7, 2, 9, 6, 4, 5, 1, 10, 8, 3);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

const [sum, avg, max, min, count] = group_func(8, 2, 4, 7, 3, 10, 6, 9, 1, 5);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);