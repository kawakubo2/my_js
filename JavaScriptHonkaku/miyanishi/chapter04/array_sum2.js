let numbers = [ 1, [2, 3, [4, 5], 6], [7, 8], 9, [10] ];

function array_sum(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError('配列ではありません');
    }
    let total = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            total += array_sum(n);
        } else {
            total += n;
        }
    }
    return total;
}

console.log('合計:' + array_sum(numbers));