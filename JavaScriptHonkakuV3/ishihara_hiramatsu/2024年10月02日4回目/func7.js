import { isArray } from '../validator.js';

const numbers = [7, 8, 2, -5, 3, 9, 4, 1, -3, 6, 10, 5];

/*
整数型の要素を持つ配列の合計値を求める
*/
function sum(nums) {
    if (!isArray(nums)) {
        throw new TypeError(`引数が配列ではありません。`);
    }
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(`合計: ${sum(numbers)}`);

