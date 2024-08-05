function group(nums) {
    let total = 0;
    let cnt   = 0;
    let max   = nums[0];
    let min   = nums[0];
    for (const n of nums) {
        if (n > max) max = n;
        if (n < min) min = n;
        total += n;
        cnt++;
    }
    return [total, total / cnt, max, min, cnt];
}

const numbers = [5, 3, 8, 9, 1, 10, 2, 4, 7, 6];
const a = group(numbers);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

const [sum, avg, max, min, count] = group(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);