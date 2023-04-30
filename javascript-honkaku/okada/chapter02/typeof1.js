let nums = [1, [2, 3, [4, 5], 6], 7, 8, [9, 10]]

function my_array_sum(nums) {
    if (!(typeof nums === 'object' && nums instanceof Array)) return;
    let total = 0;
    for (let n of nums) {
        if (typeof n === 'object' && n instanceof Array) {
            total += my_array_sum(n);
        } else {
            total += n;
        }
    }
    return total;
}

console.log(my_array_sum(nums));