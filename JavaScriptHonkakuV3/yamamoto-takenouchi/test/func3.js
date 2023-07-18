const numbers = [7, 3, 1, 4, 6, 9, 2, 10, 8, 5];

function mymax(nums) {
    let max = nums[0];
    for (const n of nums) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

const max = mymax(numbers);

console.log(`最大値: ${max}`);