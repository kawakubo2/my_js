function aggregate(numbers) {
    if (numbers == 0 || numbers.length === 0) {
        throw new Error('空の配列です。');
    }
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (let n of numbers) {
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

const numbers = [9, 3, 6, 4, 5, 1, 7, 10, 8, 2];
const [sum, avg, max, min, count] = aggregate(numbers);

console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result[3]);
// console.log(result[4]);