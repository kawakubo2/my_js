function sum(...nums) {
    console.log(Array.isArray(nums));
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') {
            throw new Error(`指定値が数値ではありません: ${num}`);
        }
        result += num;
    }
    return result;
}

console.log(sum(1, 3, 5, 7, 9));

const numbers = [1, 2, 4, 8, 16];
console.log(sum(...numbers)); // spread operator

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2];
console.log(num3);
const num4 = [num1, num2];
console.log(num4);