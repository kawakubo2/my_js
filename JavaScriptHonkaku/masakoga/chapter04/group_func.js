function group_func(nums) {
    let total = 0;
    let max = nums[0];
    let min = nums[0];
    let cnt = 0;
    for (let n of nums) {
        total += n;
        if (n > max) max = n;
        if (n < min) min = n;
        cnt++;
    }
    return [total, total / cnt, max, min, cnt];
}

let [sum, avg, max, min, count ]= group_func([8, 7, 1, 2, 9, 3, 10, 4, 6, 5]);

