function group_func(numbers) {
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
    return [total, total / cnt, max, min, cnt];
}

const numbers = [8, 3, 4, 9, 1, 6, 7, 2, 10, 5];
const [sum, avg, max, min, count] = group_func(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);