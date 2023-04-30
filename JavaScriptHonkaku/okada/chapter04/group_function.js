function aggregate(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[1];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt]
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = aggregate(numbers);
console.log('合計:' + result[0]);
console.log('平均:' + result[1]);
console.log('最大:' + result[2]);
console.log('最小:' + result[3]);
console.log('件数:' + result[4]);

let [sum, avg, max, min, count] = aggregate(numbers);
console.log('合計:' + sum);
console.log('平均:' + avg);
console.log('最大:' + max);
console.log('最小:' + min);
console.log('件数:' + count);