function group_func(nums) {
    if (nums == null || !Array.isArray(nums) || nums.length == 0) {
        throw new Error('XXX');
    }
    let total = 0, cnt = 0, max = nums[0], min = nums[0];
    for (let n of nums) {
        if (typeof n !== 'number') {
            throw new Error('数値でない要素が存在');
        }
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total/cnt, max, min, cnt];
}

try {
    let [sum, avg, max, min, count] = group_func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(`合計: ${sum}`);
    console.log(`平均: ${avg}`);
    console.log(`最大: ${max}`);
    console.log(`最小: ${min}`);
    console.log(`件数: ${count}`);
} catch (e) {
    console.log(e.toString());
}