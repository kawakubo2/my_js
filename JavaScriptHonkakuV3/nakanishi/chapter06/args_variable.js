function sum(...nums) {
    let result = 0;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error(`指定地が数値ではありません: ${num}`);
        }
        result += num;
    }
    return result;
}

console.log(sum());
console.log(sum(10));
console.log(sum(5, 1, 2, 4, 3));