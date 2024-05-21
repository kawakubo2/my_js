function aggregate(numbers) {
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
    return [total, total / cnt, max, min, cnt]; // [合計, 平均, 最大, 最小, 件数]
}

const nums = [7, 2, 4, 6, 5, 10, 1, 3, 9, 8];

const result = aggregate(nums);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

let [sum, avg, max, min, count] = result;
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);