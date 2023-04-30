function array_sum(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('引数が配列ではない');
    }
    let result = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            result += array_sum(n);
        } else {
            result += n;
        }
    }
    return result;
}

console.log(array_sum([1, [2, 3, [4, 5], 6, [7, 8, [9]], 10]]));