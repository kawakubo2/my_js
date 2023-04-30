function aggregate_func(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (let n of numbers) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

let nums = [8, 2, 11, 9, 5, 3, 15, 1, 7, 10]

let [sum, avg, max, min, count] = aggregate_func(nums);
console.log('合計:' + sum);
console.log('平均:' + avg);
console.log('最大:' + max);
console.log('最小:' + min);
console.log('件数:' + count);