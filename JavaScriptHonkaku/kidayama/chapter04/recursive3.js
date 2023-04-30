const numbers = [[1, 2], 3, [4, [5, 6, [7]], [8, 9]], 10];

function array_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (Array.isArray(n)) {
            total += array_sum(n);
        } else if (typeof n === 'number') {
            total += n;
        }
    }
    return total;
}

console.log(array_sum(numbers));