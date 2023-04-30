/*
function sum(...nums) {
    let result = 0;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error('指定値が数値ではありません: ' + num);
        }
        result += num;
    }
    return result;
}
*/
const sum = (...nums) => {
    if (!nums.every(n => typeof n === 'number')) {
        throw new Error('指定値が数値ではありません');
    }
    return nums.reduce((total, n) => total + n);
}
const numbers = [1, 3, 5, 7, 9];
try {
    console.log(sum(...numbers));
} catch (e) {
    console.log(e.message);
}