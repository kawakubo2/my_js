let numbers = [1, [2, [3, 4, [5, 6]], 7, [8, 9], 10]];

function arraySum(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('配列ではない');
    }
    let total = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            total += arraySum(n);
        } else {
            total += n;
        }
    }
    return total;
}

console.log(arraySum(numbers));