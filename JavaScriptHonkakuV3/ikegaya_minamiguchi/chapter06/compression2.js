function compress(numbers, max) {
    const result = []
    let flags = [];
    for (let i = 0; i <= 100; i++) {
        flags[i] = 0;
    }
    for (const num of numbers) {
        flags[num] = 1;
    }
    for (let i = 1; i <= 100; i++) {
        if (flags[i] === 1) {
            result.push(i);
        }
    }
    return result;
}

const nums = [5, 5, 1, 4, 1, 2, 3, 8, 1, 1, 4, 4];
console.log(compress(nums));