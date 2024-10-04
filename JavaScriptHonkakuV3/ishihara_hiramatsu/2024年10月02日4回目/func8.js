import { isArray } from '../validator.js';

const numbers = [7, 8, 2, -5, 3, 9, 4, 1, -3, 6, 10, 5];

/*
配列の数値の最大値を求める
*/
function mymax(nums) {
    let max = nums[0];
    for (const num of nums) {
        if (num > max) max = num;
    }
    return max;
}

console.log(`最大値: ${mymax(numbers)}`);