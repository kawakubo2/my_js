function sum(...nums) {
    console.log(`numsは${Array.isArray(nums) ? "配列です": "配列ではありません"}`);
    console.log(nums);
    let result = 0;
    for (const num of nums) {
        if (typeof num != 'number') {
            throw new Error(`指定値が数値ではありません: ${num}`);
        }
        result += num
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum());

function sum2() {
    console.log(`引数は${Array.isArray(arguments) ? "配列です": "配列ではありません"}`);
    let result = 0;
    for (const num of arguments) {
        if (typeof num != 'number') {
            throw new Error(`指定値が数値ではありません: ${num}`);
        }
        result += num
    }
    return result;
}

console.log(sum2(1, 2, 3, 4, 5));