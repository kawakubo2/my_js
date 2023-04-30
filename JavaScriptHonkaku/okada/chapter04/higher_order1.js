let numbers = [1, [2, 3, [4, 5], 4], 5, [6, [7, 8], 9], 10];

function my_sum(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('配列ではない');
    }
    let total = 0;
    for (let item of nums) {
        if (Array.isArray(item)) {
            total += my_sum(item);
        } else {
            total += item;
        }
    }
    return total;
}

console.log('合計:' + my_sum(numbers));