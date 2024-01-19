const numbers = [[1, 2], 3, [4, [5, 6], [7, 8]], [9], 10];

function mytotal(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("引数が配列ではない。");
    }
    let total = 0;
    for (const n of nums) {
        if (typeof n === "number") {
            total += n;
        } else if (Array.isArray(n)) {
            total += mytotal(n);
        } else {
            throw new Error("数値または配列以外");
        }
    }
    return total;
}

console.log(`合計: ${mytotal(numbers)}`);

const numbers2 = numbers.flat(Infinity);

function mytotal2(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}

console.log(`合計: ${mytotal2(numbers2)}`);