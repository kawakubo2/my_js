const numbers = [5, 4, 8, 9, 1, 3, 10, 6, 7, 2];

function array_max(nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

console.log(`最大値: ${array_max(numbers)}`);

function array_min(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

console.log(`最小値: ${array_min(numbers)}`);