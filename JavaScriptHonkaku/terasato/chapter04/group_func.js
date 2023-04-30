const group_func = numbers => {
    if (numbers.length === 0) {
        throw new TypeError('要素数が0');
    }
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
    return [total, total/cnt, max, min, cnt];
}

const result = group_func([8, 5, 1, 9, 2, 10, 4, 6, 7, 3]);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`件数: ${result[4]}`);

const [sum, avg, max, min, count] = group_func([8, 5, 1, 9, 2, 10, 4, 6, 7, 3]);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);
