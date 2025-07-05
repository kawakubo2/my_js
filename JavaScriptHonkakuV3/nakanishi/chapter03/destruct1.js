function aggregate(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const n of numbers) {
        total += n;
        cnt++;
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n
        }
    }
    return [total, total / cnt, max, min, cnt];
}

const nums = [9, 4, 6, 5, 1, 7, 10, 8, 2, 3];

const result = aggregate(nums);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

console.log('-------');
// 配列の分割代入(destructuring)
const [sum, avg, max, min, count] = aggregate(nums);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);