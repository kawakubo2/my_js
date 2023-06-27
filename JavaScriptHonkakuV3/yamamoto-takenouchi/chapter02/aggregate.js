function aggregate(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const n of numbers) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total , total / cnt, max, min, cnt];
}

let nums = [8, 7, 1, 5, 4, 6, 10, 3, 2, 9];
let result = aggregate(nums);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

// 分割代入(destructuring assignment)
let [sum, avg, max, min, count] = aggregate(nums);
console.log(sum, avg, max, min, count);