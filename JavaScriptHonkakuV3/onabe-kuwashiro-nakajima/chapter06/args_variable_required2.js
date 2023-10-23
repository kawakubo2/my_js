function sum(init, ...nums) {
    if (typeof init !== 'number') {
        throw new Error(`数値ではありません: ${init}`);
    }
    let result = init;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error(`数値ではありません: ${init}`);
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1, 2, 3, 4, 5, 6));
    console.log(sum());
} catch (e) {
    console.log(e.message)
}