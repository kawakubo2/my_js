const numbers = [[1, 2], 3, [4, [5, [6, 7]], 8], [9, 10]];

const array_sum = nums => {
    if (!Array.isArray(nums)) {
        throw Error("配列以外");
    }
    let total = 0;
    for (const elem of nums) {
        if (Array.isArray(elem)) {
            total += array_sum(elem);
        } else {
            total += elem;
        }
    }
    return total;
};

console.log(array_sum(numbers));