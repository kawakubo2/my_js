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

let numbers = [5, 2, 9, 8, 1, 4, 6, 7, 10, 3];

let [sum, avg, max, min, count] = group_func(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);