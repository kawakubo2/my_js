function group(numbers) {
    if (numbers.length === 0) {
        throw new Error("配列か空");
    }
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
    return [total, total / cnt, max, min, cnt];
}

const nums = [8, 7, 2, 1, 4, 9, 3, 10, 5, 6];
const [sum, , max, min, ]= group(nums);
console.log(`合計: ${sum}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);