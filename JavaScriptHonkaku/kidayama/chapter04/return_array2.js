function group_func(...nums) {
    if (nums.length === 0) {
        throw new Error('引数を指定してください');
    }
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        total += num;
        cnt++;
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    return [total, total / cnt, max, min, cnt]; // 合計、平均、最大、最小、件数
}

let [sum, avg, max, min, count ] = group_func(...[5, 8, 2, 4, 9, 1, 10, 3, 7, 6]);

console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);
