const numbers1 = [1, [2, 3, [4, 5], [6, 7]], [8, 9], 10];
const numbers2= [1, [2, [3, [4, [5]], [6, 7]], [8]], [9, 10]];

const higher_sum = nums => {
    if (!Array.isArray(nums)) {
        throw new TypeError('引数が配列ではない。');
    }
    let total = 0;
    for (const n of nums) {
        if (typeof n === 'number') {
            total += n;
        } else if (Array.isArray(n)) {
            total += higher_sum(n);
        } else {
            throw new TypeError('引数が数値または配列ではありません。');
        }
    }
    return total;
}

console.log(higher_sum(numbers1));
console.log(higher_sum(numbers2));
