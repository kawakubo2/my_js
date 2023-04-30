// aggregate_func.js

function aggregate_func(numbers) {
    let sum = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const n of numbers) {
        sum += n;
        cnt++;
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
    }
    return [sum, sum / cnt, max, min, cnt];
}

const numbers = [5, 10, 3, 8, 7, 1, 6, 2, 4, 9];
const result = aggregate_func(numbers);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`件数: ${result[4]}`);

let [sum, avg, max, min, count] = aggregate_func(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);