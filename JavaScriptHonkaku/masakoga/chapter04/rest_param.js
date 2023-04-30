function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof(num) !== 'number') {
            throw new Error('指定値が数値ではありません: ' + num);
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
    console.log(e.messagae);
}

let nums = [1, 2, 3, 4, 5, 6];

console.log(Math.max(nums)); // 配列を可変長引数の関数に渡すのはNG
console.log(Math.max(...nums));